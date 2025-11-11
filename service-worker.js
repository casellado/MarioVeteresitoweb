/**
 * SERVICE WORKER - Mario Vetere Website
 * Offline Support & Caching Strategy
 * Version: 1.0.0
 */

const CACHE_VERSION = 'mario-vetere-v1.0.0';
const CACHE_STATIC = `${CACHE_VERSION}-static`;
const CACHE_DYNAMIC = `${CACHE_VERSION}-dynamic`;
const CACHE_IMAGES = `${CACHE_VERSION}-images`;

// Files da cachare immediatamente
const STATIC_FILES = [
  '/',
  '/index.html',
  '/opere.html',
  '/tecnica.html',
  '/chi-sono.html',
  '/contatti.html',
  '/main.css',
  '/assets/js/app.js',
  '/assets/js/config.js',
  '/assets/images/logo/logo-gold.png',
  '/assets/images/logo/favicon.svg'
];

// Limiti cache
const MAX_CACHE_SIZE = 50; // Massimo 50 items per cache dinamica
const CACHE_EXPIRATION = 7 * 24 * 60 * 60 * 1000; // 7 giorni

/**
 * Install Event - Cache initial assets
 */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static files');
        return cache.addAll(STATIC_FILES.map(url => new Request(url, {
          cache: 'no-cache'
        })));
      })
      .then(() => {
        console.log('[ServiceWorker] Static files cached successfully');
        return self.skipWaiting(); // Attiva immediatamente
      })
      .catch((error) => {
        console.error('[ServiceWorker] Cache failed:', error);
      })
  );
});

/**
 * Activate Event - Clean old caches
 */
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Rimuovi cache vecchie
              return cacheName.startsWith('mario-vetere-') && 
                     cacheName !== CACHE_STATIC &&
                     cacheName !== CACHE_DYNAMIC &&
                     cacheName !== CACHE_IMAGES;
            })
            .map((cacheName) => {
              console.log('[ServiceWorker] Removing old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Activated successfully');
        return self.clients.claim(); // Prendi controllo immediato
      })
  );
});

/**
 * Fetch Event - Serve cached content when offline
 * Strategy: Cache First → Network Fallback → Offline Page
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (CDN, analytics, etc.)
  if (!url.origin.includes(self.location.origin)) {
    return;
  }
  
  // Determina strategia basata su tipo file
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticAsset(request)) {
    event.respondWith(handleStaticRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

/**
 * Check if request is for an image
 */
function isImageRequest(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i);
}

/**
 * Check if request is for static asset
 */
function isStaticAsset(request) {
  return request.url.match(/\.(css|js|woff|woff2|ttf|eot)$/i);
}

/**
 * Handle Image Requests - Cache First
 */
async function handleImageRequest(request) {
  try {
    // Cerca in cache
    const cache = await caches.open(CACHE_IMAGES);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[ServiceWorker] Image from cache:', request.url);
      return cachedResponse;
    }
    
    // Fetch da network
    const networkResponse = await fetch(request);
    
    // Cache se successo
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
      trimCache(CACHE_IMAGES, MAX_CACHE_SIZE);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Image fetch failed:', error);
    // Return placeholder image se offline
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="#1a1a1a" width="200" height="200"/><text fill="#d4af37" x="50%" y="50%" text-anchor="middle" dy=".3em">Offline</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
}

/**
 * Handle Static Asset Requests - Cache First
 */
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(CACHE_STATIC);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      console.log('[ServiceWorker] Static from cache:', request.url);
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Static fetch failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

/**
 * Handle Dynamic Content - Network First
 */
async function handleDynamicRequest(request) {
  try {
    // Prova network prima
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      // Cache successful responses
      const cache = await caches.open(CACHE_DYNAMIC);
      cache.put(request, networkResponse.clone());
      trimCache(CACHE_DYNAMIC, MAX_CACHE_SIZE);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[ServiceWorker] Network fetch failed, trying cache:', request.url);
    
    // Fallback a cache
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback finale - offline page
    if (request.mode === 'navigate') {
      const cache = await caches.open(CACHE_STATIC);
      const offlineResponse = await cache.match('/index.html');
      return offlineResponse || new Response('Offline', { status: 503 });
    }
    
    return new Response('Offline', { status: 503 });
  }
}

/**
 * Trim cache to max size
 */
async function trimCache(cacheName, maxSize) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxSize) {
    console.log(`[ServiceWorker] Trimming cache ${cacheName}`);
    await cache.delete(keys[0]);
    trimCache(cacheName, maxSize); // Recursive
  }
}

/**
 * Message Handler - Commands from client
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

console.log('[ServiceWorker] Loaded and ready!');

