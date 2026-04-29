// Minimal service worker — required for PWA installability.
// Passes all requests straight through to the network (no caching).
const CACHE = 'tp-ai-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
