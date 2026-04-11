# Sentry Config Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the repo to a compatible `@sentry/nextjs` version and align the existing Next.js Sentry runtime configuration behind one shared base config.

**Architecture:** Keep the current Next.js Sentry entry points in place and introduce a small shared helper in `lib/` for the common runtime-safe options. Server and edge runtime files will consume the shared base config directly, while the client runtime will extend the same base config with replay-specific settings.

**Tech Stack:** Next.js App Router, TypeScript, `@sentry/nextjs`, npm

---

### Task 1: Upgrade the Sentry SDK

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Upgrade the dependency**

Run:

```bash
npm install @sentry/nextjs --save
```

Expected: `package.json` and `package-lock.json` update from `^9.38.0` to a `9.44.0+` release.

- [ ] **Step 2: Verify the version changed**

Run:

```bash
rg -n '"@sentry/nextjs"' package.json package-lock.json
```

Expected: both files show the upgraded version string.

- [ ] **Step 3: Commit the dependency update**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade sentry nextjs sdk"
```

### Task 2: Add a shared runtime-safe Sentry config helper

**Files:**
- Create: `lib/sentry-config.ts`

- [ ] **Step 1: Write the shared helper**

Create `lib/sentry-config.ts` with:

```ts
export const sentryDsn =
  "https://f8b0c4aeb1efd10a4dd44c65bcefee3c@o4509518279409664.ingest.us.sentry.io/4509654657138688";

export const sentryBaseConfig = {
  dsn: sentryDsn,
  tracesSampleRate: 1,
  sendDefaultPii: true,
  debug: false,
} as const;
```

- [ ] **Step 2: Confirm the helper is present**

Run:

```bash
sed -n '1,120p' lib/sentry-config.ts
```

Expected: the file exports `sentryDsn` and `sentryBaseConfig`.

- [ ] **Step 3: Commit the shared helper**

```bash
git add lib/sentry-config.ts
git commit -m "refactor: add shared sentry base config"
```

### Task 3: Align the runtime entry points to the shared config

**Files:**
- Modify: `sentry.server.config.ts`
- Modify: `sentry.edge.config.ts`
- Modify: `instrumentation-client.ts`

- [ ] **Step 1: Update the server runtime config**

Change `sentry.server.config.ts` to:

```ts
import * as Sentry from "@sentry/nextjs";

import { sentryBaseConfig } from "@/lib/sentry-config";

Sentry.init(sentryBaseConfig);
```

- [ ] **Step 2: Update the edge runtime config**

Change `sentry.edge.config.ts` to:

```ts
import * as Sentry from "@sentry/nextjs";

import { sentryBaseConfig } from "@/lib/sentry-config";

Sentry.init(sentryBaseConfig);
```

- [ ] **Step 3: Update the client runtime config**

Change `instrumentation-client.ts` to:

```ts
import * as Sentry from "@sentry/nextjs";

import { sentryBaseConfig } from "@/lib/sentry-config";

Sentry.init({
  ...sentryBaseConfig,
  integrations: [Sentry.replayIntegration()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
```

- [ ] **Step 4: Verify the config drift is removed**

Run:

```bash
sed -n '1,120p' sentry.server.config.ts
sed -n '1,120p' sentry.edge.config.ts
sed -n '1,160p' instrumentation-client.ts
```

Expected: all three files import `sentryBaseConfig`, and only the client file defines replay behavior.

- [ ] **Step 5: Commit the config alignment**

```bash
git add sentry.server.config.ts sentry.edge.config.ts instrumentation-client.ts
git commit -m "refactor: align sentry runtime config"
```

### Task 4: Verify the upgraded setup

**Files:**
- Verify: `package.json`
- Verify: `package-lock.json`
- Verify: `lib/sentry-config.ts`
- Verify: `sentry.server.config.ts`
- Verify: `sentry.edge.config.ts`
- Verify: `instrumentation-client.ts`

- [ ] **Step 1: Run the production build**

Run:

```bash
npm run build
```

Expected: build exits `0`.

- [ ] **Step 2: Run lint**

Run:

```bash
npm run lint
```

Expected: lint exits `0`; existing unrelated warnings may still appear, but no new Sentry-related failures are introduced.

- [ ] **Step 3: Confirm there is no fake MCP wrapping**

Run:

```bash
rg -n "wrapMcpServerWithSentry|McpServer" .
```

Expected: no new placeholder MCP wrapping is introduced by this work.

- [ ] **Step 4: Commit the verified final state**

```bash
git add package.json package-lock.json lib/sentry-config.ts sentry.server.config.ts sentry.edge.config.ts instrumentation-client.ts
git commit -m "feat: align sentry config for upgraded sdk"
```
