/// <reference types="astro/client" />

interface Navigator {
  globalPrivacyControl?: boolean;
}

interface Window {
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  bushGumsAnalytics?: {
    track: typeof import('./scripts/analytics').track;
    beginBuilderAttempt: () => number;
    completeBuilderAttempt: (attempt: number) => void;
    resetBuilderAttempt: () => void;
  };
}
