/**
 * PULL TO REFRESH - Mario Vetere Website
 * Native-like pull-to-refresh for mobile
 * Version: 1.0.0
 */

class PullToRefresh {
  constructor(options = {}) {
    this.options = {
      threshold: 80, // Pixel per triggerare refresh
      resistance: 2.5, // Resistenza durante pull
      maxPull: 120, // Massimo pull possibile
      refreshTimeout: 1500, // Tempo refresh simulation
      onRefresh: null,
      ...options
    };
    
    this.state = {
      pulling: false,
      refreshing: false,
      startY: 0,
      currentY: 0,
      pullDistance: 0
    };
    
    this.indicator = null;
    this.icon = null;
    
    this.init();
  }
  
  /**
   * Initialize pull-to-refresh
   */
  init() {
    // Solo su mobile
    if (!this.isMobile()) {
      return;
    }
    
    // Crea indicator
    this.createIndicator();
    
    // Bind events
    this.bindEvents();
    
    console.log('[PullToRefresh] Initialized');
  }
  
  /**
   * Check if mobile device
   */
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
  }
  
  /**
   * Create pull indicator
   */
  createIndicator() {
    // Container
    this.indicator = document.createElement('div');
    this.indicator.className = 'pull-to-refresh-indicator';
    this.indicator.setAttribute('aria-hidden', 'true');
    
    // Icon
    this.icon = document.createElement('i');
    this.icon.className = 'bi bi-arrow-down-circle';
    this.icon.style.fontSize = '24px';
    this.icon.style.color = 'var(--accent-primary)';
    
    this.indicator.appendChild(this.icon);
    document.body.appendChild(this.indicator);
  }
  
  /**
   * Bind touch events
   */
  bindEvents() {
    let touchStartHandler, touchMoveHandler, touchEndHandler;
    
    // Touch Start
    touchStartHandler = (e) => {
      // Solo se scrollato in top
      if (window.scrollY === 0) {
        this.state.startY = e.touches[0].clientY;
        this.state.pulling = true;
      }
    };
    
    // Touch Move
    touchMoveHandler = (e) => {
      if (!this.state.pulling || this.state.refreshing) {
        return;
      }
      
      this.state.currentY = e.touches[0].clientY;
      this.state.pullDistance = (this.state.currentY - this.state.startY) / this.options.resistance;
      
      // Limita pull
      if (this.state.pullDistance > this.options.maxPull) {
        this.state.pullDistance = this.options.maxPull;
      }
      
      // Solo pull down
      if (this.state.pullDistance > 0) {
        // Previeni scroll nativo
        e.preventDefault();
        
        // Update indicator
        this.updateIndicator();
      } else {
        this.hideIndicator();
      }
    };
    
    // Touch End
    touchEndHandler = () => {
      if (!this.state.pulling) {
        return;
      }
      
      this.state.pulling = false;
      
      // Trigger refresh se threshold raggiunto
      if (this.state.pullDistance >= this.options.threshold) {
        this.triggerRefresh();
      } else {
        this.hideIndicator();
      }
      
      // Reset
      this.state.pullDistance = 0;
    };
    
    // Add listeners con passive: false per preventDefault
    document.addEventListener('touchstart', touchStartHandler, { passive: true });
    document.addEventListener('touchmove', touchMoveHandler, { passive: false });
    document.addEventListener('touchend', touchEndHandler, { passive: true });
  }
  
  /**
   * Update indicator position and icon
   */
  updateIndicator() {
    const progress = Math.min(this.state.pullDistance / this.options.threshold, 1);
    
    // Show indicator
    this.indicator.classList.add('visible');
    
    // Update position
    this.indicator.style.transform = `translateX(-50%) translateY(${this.state.pullDistance}px) scale(${progress})`;
    
    // Update icon rotation
    const rotation = progress * 180;
    this.icon.style.transform = `rotate(${rotation}deg)`;
    
    // Change icon when ready
    if (progress >= 1) {
      this.icon.className = 'bi bi-arrow-clockwise';
    } else {
      this.icon.className = 'bi bi-arrow-down-circle';
    }
  }
  
  /**
   * Hide indicator
   */
  hideIndicator() {
    this.indicator.classList.remove('visible');
    this.indicator.style.transform = 'translateX(-50%) scale(0)';
  }
  
  /**
   * Trigger refresh
   */
  async triggerRefresh() {
    if (this.state.refreshing) {
      return;
    }
    
    this.state.refreshing = true;
    
    // Change icon to spinning
    this.icon.className = 'bi bi-arrow-clockwise';
    this.indicator.classList.add('refreshing');
    
    console.log('[PullToRefresh] Refreshing...');
    
    // Execute refresh callback
    if (typeof this.options.onRefresh === 'function') {
      await this.options.onRefresh();
    } else {
      // Default: reload page
      await this.defaultRefresh();
    }
    
    // Hide indicator
    setTimeout(() => {
      this.indicator.classList.remove('refreshing');
      this.hideIndicator();
      this.state.refreshing = false;
    }, 300);
  }
  
  /**
   * Default refresh action
   */
  async defaultRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.location.reload();
        resolve();
      }, this.options.refreshTimeout);
    });
  }
  
  /**
   * Destroy instance
   */
  destroy() {
    if (this.indicator) {
      this.indicator.remove();
    }
    console.log('[PullToRefresh] Destroyed');
  }
}

/**
 * Initialize Pull-to-Refresh quando DOM è ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Solo su mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                   window.innerWidth <= 768;
  
  if (!isMobile) {
    return;
  }
  
  // Crea istanza
  window.pullToRefresh = new PullToRefresh({
    threshold: 80,
    resistance: 2.5,
    refreshTimeout: 1500,
    onRefresh: async () => {
      console.log('[PullToRefresh] Custom refresh triggered');
      
      // Simula refresh con delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Reload page
      window.location.reload();
    }
  });
  
  console.log('[PullToRefresh] Ready!');
});

/**
 * Export per usage esterno
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PullToRefresh;
}

