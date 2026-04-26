import { APICallError, LoadAPIKeyError } from "@ai-sdk/provider";

const contactEmail = "info@imperiumlinguistics.co.za";

export const CHAT_QUOTA_EXCEEDED_MESSAGE =
  `Our AI assistant has reached its current usage limit. Please try again later or contact ${contactEmail}.`;
export const CHAT_CONTEXT_LIMIT_MESSAGE =
  "That request is too long for the chat assistant right now. Please shorten your message and try again.";
export const CHAT_RATE_LIMIT_MESSAGE =
  "The chat assistant is handling a lot of requests right now. Please wait a moment and try again.";
export const CHAT_UNAVAILABLE_MESSAGE =
  `The chat service is temporarily unavailable. Please try again later or contact ${contactEmail}.`;

type ChatErrorResponse = {
  status: number;
  message: string;
};

const quotaMarkers = [
  "insufficient_quota",
  "exceeded your current quota",
  "billing hard limit",
  "rate limit reached for tokens",
];

const contextLimitMarkers = [
  "context_length_exceeded",
  "maximum context length",
  "too many tokens",
  "reduce the length",
];

function safeSerialize(value: unknown) {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function errorToSearchText(error: unknown) {
  if (error instanceof APICallError) {
    return [
      error.message,
      error.responseBody,
      safeSerialize(error.data),
      safeSerialize(error.cause),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  if (error instanceof Error) {
    return [error.name, error.message, safeSerialize((error as Error & { cause?: unknown }).cause)]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  }

  return safeSerialize(error).toLowerCase();
}

function includesAnyMarker(value: string, markers: string[]) {
  return markers.some((marker) => value.includes(marker));
}

export function getChatErrorResponse(error: unknown): ChatErrorResponse {
  const errorText = errorToSearchText(error);

  if (includesAnyMarker(errorText, quotaMarkers)) {
    return {
      status: 429,
      message: CHAT_QUOTA_EXCEEDED_MESSAGE,
    };
  }

  if (includesAnyMarker(errorText, contextLimitMarkers)) {
    return {
      status: 400,
      message: CHAT_CONTEXT_LIMIT_MESSAGE,
    };
  }

  if (error instanceof LoadAPIKeyError) {
    return {
      status: 503,
      message: CHAT_UNAVAILABLE_MESSAGE,
    };
  }

  if (error instanceof APICallError) {
    if (error.statusCode === 429) {
      return {
        status: 429,
        message: CHAT_RATE_LIMIT_MESSAGE,
      };
    }

    if (error.statusCode === 401 || error.statusCode === 403) {
      return {
        status: 503,
        message: CHAT_UNAVAILABLE_MESSAGE,
      };
    }
  }

  return {
    status: 500,
    message: CHAT_UNAVAILABLE_MESSAGE,
  };
}

export function getChatStreamErrorMessage(error: unknown) {
  return getChatErrorResponse(error).message;
}
