/**
 * SERVICE WORKER REGISTRATION
 * Mario Vetere Website - Offline Support
 * Version: 1.0.0
 */

/**
 * Register Service Worker
 */
async function registerServiceWorker() {
  // Check browser support
  if (!('serviceWorker' in navigator)) {
    console.log('[SW] Service Worker not supported');
    return;
  }
  
  try {
    // Register
    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    });
    
    console.log('[SW] Service Worker registered successfully:', registration.scope);
    
    // Check for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      console.log('[SW] New Service Worker found, installing...');
      
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('[SW] New version available! Reload to update.');
          
          // Mostra notifica update disponibile (opzionale)
          showUpdateNotification();
        }
      });
    });
    
    // Auto-update check ogni ora
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);
    
  } catch (error) {
    console.error('[SW] Service Worker registration failed:', error);
  }
}

/**
 * Show update notification
 */
function showUpdateNotification() {
  // Crea toast notification
  const toast = document.createElement('div');
  toast.className = 'toast-update';
  toast.innerHTML = `
    <div class="toast-update-content">
      <i class="bi bi-arrow-clockwise"></i>
      <div>
        <strong>Nuovo aggiornamento disponibile!</strong>
        <p>Ricarica la pagina per aggiornare.</p>
      </div>
    </div>
    <button class="toast-update-btn" onclick="window.location.reload()">
      Ricarica
    </button>
  `;
  
  // Add styles
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 1rem;
    right: 1rem;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideUpToast 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 10000);
}

/**
 * Check if app is running as PWA (standalone)
 */
function isPWA() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

/**
 * Initialize offline indicator
 */
function initOfflineIndicator() {
  // Create offline indicator
  const indicator = document.createElement('div');
  indicator.id = 'offline-indicator';
  indicator.innerHTML = `
    <i class="bi bi-wifi-off"></i>
    <span>Sei offline</span>
  `;
  
  indicator.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    background: #ef4444;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  document.body.appendChild(indicator);
  
  // Listen for online/offline events
  window.addEventListener('offline', () => {
    indicator.style.transform = 'translateX(-50%) translateY(0)';
    console.log('[SW] App is offline');
  });
  
  window.addEventListener('online', () => {
    indicator.style.transform = 'translateX(-50%) translateY(-100px)';
    console.log('[SW] App is online');
    
    // Reload to get fresh content
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SKIP_WAITING'
      });
    }
  });
}

/**
 * Initialize on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Register Service Worker
  registerServiceWorker();
  
  // Initialize offline indicator
  initOfflineIndicator();
  
  // Log PWA status
  if (isPWA()) {
    console.log('[SW] Running as PWA (standalone mode)');
  } else {
    console.log('[SW] Running in browser');
  }
  
  // Log initial online status
  console.log('[SW] Online status:', navigator.onLine ? 'online' : 'offline');
});

/**
 * Unregister Service Worker (per debug/development)
 */
window.unregisterServiceWorker = async function() {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
      console.log('[SW] Service Worker unregistered');
    }
  }
};

/**
 * Clear all caches (per debug/development)
 */
window.clearAllCaches = async function() {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('[SW] All caches cleared');
  }
};

