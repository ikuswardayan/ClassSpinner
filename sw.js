const CACHE_NAME = 'classspinner-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/css/style.css',
  './assets/js/app.js',
  './assets/vendor/css/bootstrap.min.css',
  './assets/vendor/css/bootstrap-icons.css',
  './assets/vendor/js/bootstrap.bundle.min.js',
  './assets/vendor/js/jquery.min.js',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/vendor/css/fonts/bootstrap-icons.woff',
  './assets/vendor/css/fonts/bootstrap-icons.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
