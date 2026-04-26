import assert from "node:assert/strict";
import test from "node:test";

import { APICallError, LoadAPIKeyError } from "@ai-sdk/provider";

import { getChatErrorResponse } from "./chat-service-errors.ts";

test("returns a helpful quota message when the provider runs out of tokens", () => {
  const error = new APICallError({
    message: "OpenAI request failed",
    statusCode: 429,
    responseBody: JSON.stringify({
      error: {
        code: "insufficient_quota",
        message: "You exceeded your current quota.",
      },
    }),
  });

  assert.deepStrictEqual(getChatErrorResponse(error), {
    status: 429,
    message:
      "Our AI assistant has reached its current usage limit. Please try again later or contact info@imperiumlinguistics.co.za.",
  });
});

test("returns a shorter-message hint when the request exceeds the context window", () => {
  const error = new APICallError({
    message: "This model's maximum context length is 128000 tokens.",
    statusCode: 400,
    responseBody: JSON.stringify({
      error: {
        code: "context_length_exceeded",
      },
    }),
  });

  assert.deepStrictEqual(getChatErrorResponse(error), {
    status: 400,
    message:
      "That request is too long for the chat assistant right now. Please shorten your message and try again.",
  });
});

test("falls back to a safe temporary-unavailable message when the API key is missing", () => {
  const error = new LoadAPIKeyError({
    message: "OpenAI API key is missing.",
  });

  assert.deepStrictEqual(getChatErrorResponse(error), {
    status: 503,
    message:
      "The chat service is temporarily unavailable. Please try again later or contact info@imperiumlinguistics.co.za.",
  });
});
