# Sentry Config Alignment Design

## Summary

Align the existing Next.js Sentry setup with the upgraded `@sentry/nextjs` SDK so the application meets the minimum version requirement for MCP monitoring prerequisites without pretending this repository contains an MCP server.

## Current State

The repository already has runtime-specific Sentry initialization files:

- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `instrumentation-client.ts`

All three files already call `Sentry.init()` with the production DSN and tracing enabled. The project also wraps Next.js with `withSentryConfig()` in `next.config.mjs`.

There is no MCP server implementation in this repository. A search of the codebase did not find any `McpServer` construction or `Sentry.wrapMcpServerWithSentry(...)` usage target. Because of that, MCP server wrapping is out of scope for this repo and should not be added as placeholder code.

## Goals

- Keep the Next.js Sentry integration working after upgrading to `@sentry/nextjs` `9.44.0+`
- Reduce drift between server, edge, and client Sentry initialization
- Add `sendDefaultPii: true` consistently so the existing setup matches the documented MCP-monitoring prerequisites
- Preserve client-only replay configuration

## Non-Goals

- Building or scaffolding an MCP server in this repository
- Adding fake `wrapMcpServerWithSentry(...)` calls without a real MCP server instance
- Reworking broader observability strategy, sampling policy, or release automation

## Recommended Approach

Introduce a small shared Sentry config helper and have each runtime-specific entry point consume it.

The helper should contain the shared DSN, `tracesSampleRate`, `sendDefaultPii`, and common debug setting. The server and edge config files should use the shared base options directly. The client config should extend the same base options and retain the existing replay integration and replay sampling settings.

This approach keeps the established Next.js runtime entry points intact while preventing the configuration from drifting across files.

## File Changes

- Create `lib/sentry-config.ts`
  Responsibility: shared base config used by all Sentry runtime entry points
- Modify `sentry.server.config.ts`
  Responsibility: initialize Sentry on the server using shared options
- Modify `sentry.edge.config.ts`
  Responsibility: initialize Sentry on the edge runtime using shared options
- Modify `instrumentation-client.ts`
  Responsibility: initialize client-side Sentry using shared options plus replay integration
- Modify `package.json`
  Responsibility: keep `@sentry/nextjs` on the upgraded version
- Modify `package-lock.json`
  Responsibility: lockfile update for the upgraded SDK

## Verification

- Run `npm run build`
- Run `npm run lint`
- Confirm the Sentry init files still import and initialize cleanly with the shared helper
- Confirm the repo does not claim MCP server wrapping that does not exist

## Risks

- If the shared helper uses the wrong exported types, one or more runtime init files could fail type-checking
- If client-only integrations are moved into shared config, server or edge bundles could accidentally import browser-only behavior

## Mitigations

- Keep replay integrations in the client file only
- Keep the shared helper limited to runtime-safe base options
- Validate with a fresh build and lint pass after implementation
