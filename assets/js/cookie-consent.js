/**
 * Cookie Consent Banner - GDPR Compliant
 * Mario Vetere Art - 2025
 */

class CookieConsent {
  constructor() {
    this.cookieName = 'mario_vetere_cookie_consent';
    this.cookieExpireDays = 365;
    this.init();
  }

  init() {
    // Verifica se il consenso è già stato dato
    if (!this.hasConsent()) {
      this.showBanner();
    }
  }

  hasConsent() {
    return localStorage.getItem(this.cookieName) !== null;
  }

  setConsent(accepted) {
    const consentData = {
      accepted: accepted,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem(this.cookieName, JSON.stringify(consentData));
  }

  showBanner() {
    // Crea il banner HTML
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.className = 'cookie-consent-banner';
    banner.innerHTML = `
      <div class="cookie-consent-content">
        <div class="cookie-consent-text">
          <p class="mb-2">
            <strong>🍪 Questo sito utilizza cookie</strong>
          </p>
          <p class="mb-0 small">
            Utilizziamo solo cookie tecnici necessari per il funzionamento del sito (preferenze lingua e tema). 
            Non utilizziamo cookie di profilazione o tracciamento.
            <a href="privacy-policy.html" class="text-decoration-underline">Privacy Policy</a> | 
            <a href="cookie-policy.html" class="text-decoration-underline">Cookie Policy</a>
          </p>
        </div>
        <div class="cookie-consent-buttons">
          <button id="cookie-accept" class="btn btn-primary btn-sm">
            Accetta
          </button>
          <button id="cookie-settings" class="btn btn-outline-secondary btn-sm">
            Maggiori Info
          </button>
        </div>
      </div>
    `;

    // Aggiungi CSS inline per garantire visibilità
    const style = document.createElement('style');
    style.textContent = `
      .cookie-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, rgba(13, 17, 23, 0.98), rgba(20, 26, 34, 0.98));
        backdrop-filter: blur(20px);
        border-top: 2px solid rgba(255, 183, 3, 0.3);
        padding: 1.5rem;
        z-index: 9999;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
        animation: slideUp 0.4s ease-out;
      }

      @keyframes slideUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .cookie-consent-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .cookie-consent-text {
        flex: 1;
        min-width: 300px;
        color: #e6edf3;
      }

      .cookie-consent-text p {
        margin-bottom: 0.5rem;
      }

      .cookie-consent-text strong {
        color: #FFB703;
      }

      .cookie-consent-text a {
        color: #58a6ff;
        text-decoration: underline;
      }

      .cookie-consent-text a:hover {
        color: #79c0ff;
      }

      .cookie-consent-buttons {
        display: flex;
        gap: 0.75rem;
        flex-shrink: 0;
      }

      @media (max-width: 768px) {
        .cookie-consent-banner {
          padding: 1rem;
        }
        
        .cookie-consent-content {
          flex-direction: column;
          gap: 1rem;
        }

        .cookie-consent-text {
          min-width: 100%;
        }

        .cookie-consent-buttons {
          width: 100%;
          flex-direction: column;
        }

        .cookie-consent-buttons button {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);

    // Aggiungi il banner al body
    document.body.appendChild(banner);

    // Event listeners
    document.getElementById('cookie-accept').addEventListener('click', () => {
      this.acceptCookies();
    });

    document.getElementById('cookie-settings').addEventListener('click', () => {
      window.location.href = 'cookie-policy.html';
    });
  }

  acceptCookies() {
    this.setConsent(true);
    this.hideBanner();
  }

  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.animation = 'slideDown 0.3s ease-out';
      setTimeout(() => {
        banner.remove();
      }, 300);
    }
  }
}

// Aggiungi animazione slide down
const slideDownStyle = document.createElement('style');
slideDownStyle.textContent = `
  @keyframes slideDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(slideDownStyle);

// Inizializza quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
  });
} else {
  new CookieConsent();
}

