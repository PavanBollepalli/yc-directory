"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function SentryInit() {
  useEffect(() => {
    Sentry.init({
      dsn: "https://80a4281a1a05e9b4e75e32500e563ba4@o4509531764293632.ingest.de.sentry.io/4509537305493584",
      integrations: [
        Sentry.feedbackIntegration({
          colorScheme: "system",
        }),
        // Don't use replayIntegration() yet — it breaks SSR
      ],
      tracesSampleRate: 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      debug: true,
    });
  }, []);

  return null;
}
