// Service worker Only Clik — rend le site installable (PWA) et disponible hors-ligne (pages déjà visitées).
const CACHE_NAME = 'onlyclik-cache-v1'
const OFFLINE_URLS = ['/', '/manifest.webmanifest']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS)).catch(() => {})
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  )
  self.clients.claim()
})

// Stratégie "network-first" : toujours essayer le réseau en premier (contenu à jour),
// et se replier sur le cache si hors-ligne.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {})
        return response
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/')))
  )
})
