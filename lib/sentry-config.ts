export const sentryDsn =
  "https://f8b0c4aeb1efd10a4dd44c65bcefee3c@o4509518279409664.ingest.us.sentry.io/4509654657138688";

export const sentryBaseConfig = {
  dsn: sentryDsn,
  tracesSampleRate: 1,
  sendDefaultPii: true,
  debug: false,
} as const;
