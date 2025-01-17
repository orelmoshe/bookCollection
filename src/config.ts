export const baseURL = 'http://localhost:12345';
export const EXAMPLE_WS_URL = `ws://localhost:12345/example`;
export const wsReconnectAttempts = 20;
export const wsAttemptToConnectAgainTime = (attemptNumber: number) =>
  Math.min(Math.pow(2, attemptNumber) * 1000, wsReconnectAttempts * 100); // Or number such as 3000
export const alertTimeout = 5000;
