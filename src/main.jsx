import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://32d0f48ef6b4ffc8b444a22425961510@o4508602328875008.ingest.de.sentry.io/4508602342834256',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
