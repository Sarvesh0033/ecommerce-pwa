const CACHE_NAME = 'e-shop-v1';
const ASSETS = [
  "/ecommerce-pwa/",
  "/ecommerce-pwa/index.html",
  "/ecommerce-pwa/style.css",
  "/ecommerce-pwa/app.js"
];

// Install Event - Caching Assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event - Serve from Cache if Offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});