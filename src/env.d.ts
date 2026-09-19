/// <reference types="astro/client" />

interface Navigator {
  globalPrivacyControl?: boolean;
}

interface Window {
  bushGumsAnalytics?: {
    track: typeof import('./scripts/analytics').track;
    beginBuilderAttempt: () => number;
    completeBuilderAttempt: (attempt: number) => void;
    resetBuilderAttempt: () => void;
  };
}
