/**
 * Checkout Page - Stripe Payment Simulation (Test Mode)
 * Mario Vetere Marketplace
 */

class CheckoutPage {
  constructor() {
    this.artwork = null;
    this.artworkId = null;
    this.shippingCost = 25; // Default Italy
    this.taxRate = 0.22; // 22% IVA
    this.subtotal = 0;
    this.total = 0;
    
    this.init();
  }
  
  async init() {
    console.log('💳 Inizializzazione Checkout (TEST MODE)...');
    
    // Get artwork ID from URL
    this.artworkId = this.getArtworkIdFromURL();
    
    if (!this.artworkId) {
      alert('Nessuna opera selezionata');
      window.location.href = 'opere.html';
      return;
    }
    
    // Load artwork data
    await this.loadArtwork();
    
    // Setup form
    this.setupForm();
    
    // Setup card formatting
    this.setupCardFormatting();
    
    // Calculate prices
    this.calculatePrices();
  }
  
  getArtworkIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
  
  async loadArtwork() {
    try {
      const response = await fetch('assets/data/artworks.json');
      const data = await response.json();
      
      this.artwork = data.artworks.find(a => a.id == this.artworkId);
      
      if (!this.artwork) {
        throw new Error('Opera non trovata');
      }
      
      console.log('✅ Opera caricata:', this.artwork.title);
      this.displayArtwork();
      
    } catch (error) {
      console.error('❌ Errore caricamento opera:', error);
      alert('Errore nel caricamento dell\'opera');
      window.location.href = 'opere.html';
    }
  }
  
  displayArtwork() {
    const art = this.artwork;
    
    // Update order summary
    document.getElementById('orderImage').src = art.images.thumbnail;
    document.getElementById('orderImage').alt = art.title;
    document.getElementById('orderTitle').textContent = art.title;
    document.getElementById('orderDimensions').textContent = 
      `${art.dimensions.width}×${art.dimensions.height} ${art.dimensions.unit}`;
    document.getElementById('orderYear').textContent = art.year;
    
    // Store base price
    this.subtotal = art.price;
  }
  
  calculatePrices() {
    // Get selected country for shipping
    const country = document.getElementById('country')?.value || 'IT';
    
    // Calculate shipping based on country
    if (country === 'IT') {
      this.shippingCost = 25;
    } else if (['FR', 'DE', 'ES', 'AT', 'CH'].includes(country)) {
      this.shippingCost = 50;
    } else {
      this.shippingCost = 100;
    }
    
    // Free shipping over 2000€
    if (this.subtotal >= 2000) {
      this.shippingCost = 0;
    }
    
    // Calculate tax
    const tax = this.subtotal * this.taxRate;
    
    // Calculate total
    this.total = this.subtotal + this.shippingCost + tax;
    
    // Update UI
    document.getElementById('itemPrice').textContent = 
      `€ ${this.subtotal.toLocaleString('it-IT')}`;
    
    document.getElementById('shippingPrice').textContent = 
      this.shippingCost === 0 ? 'GRATIS' : `€ ${this.shippingCost.toLocaleString('it-IT')}`;
    
    document.getElementById('taxPrice').textContent = 
      `€ ${tax.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    document.getElementById('totalPrice').textContent = 
      `€ ${this.total.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    document.getElementById('paymentTotal').textContent = 
      `€ ${this.total.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  
  setupForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;
    
    // Update shipping when country changes
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
      countrySelect.addEventListener('change', () => {
        this.calculatePrices();
      });
    }
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate form
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      
      // Process payment
      await this.processPayment();
    });
  }
  
  setupCardFormatting() {
    // Format card number
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
      cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formatted;
      });
    }
    
    // Format expiry date
    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
      cardExpiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
          value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
      });
    }
    
    // CVV only numbers
    const cardCvc = document.getElementById('cardCvc');
    if (cardCvc) {
      cardCvc.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
      });
    }
  }
  
  async processPayment() {
    // Get form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      postalCode: document.getElementById('postalCode').value,
      country: document.getElementById('country').value,
      notes: document.getElementById('notes').value,
      cardNumber: document.getElementById('cardNumber').value,
      cardExpiry: document.getElementById('cardExpiry').value,
      cardCvc: document.getElementById('cardCvc').value
    };
    
    // Validate card (TEST MODE)
    if (!this.validateTestCard(formData.cardNumber)) {
      this.showError('Carta non valida. Usa: 4242 4242 4242 4242 per test');
      return;
    }
    
    // Show loading
    this.setLoadingState(true);
    this.hideError();
    
    try {
      // Simulate Stripe payment processing
      await this.simulateStripePayment(formData);
      
      // Create order data
      const orderData = {
        orderId: this.generateOrderId(),
        artwork: this.artwork,
        customer: formData,
        pricing: {
          subtotal: this.subtotal,
          shipping: this.shippingCost,
          tax: this.subtotal * this.taxRate,
          total: this.total
        },
        paymentMethod: 'card',
        status: 'completed',
        date: new Date().toISOString()
      };
      
      // Save order to localStorage (simulate database)
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      console.log('✅ Pagamento completato:', orderData);
      
      // Redirect to success page
      window.location.href = `success.html?order=${orderData.orderId}`;
      
    } catch (error) {
      console.error('❌ Errore pagamento:', error);
      this.showError(error.message || 'Errore durante il pagamento. Riprova.');
      this.setLoadingState(false);
    }
  }
  
  async simulateStripePayment(formData) {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Test card validation
        const cardNumber = formData.cardNumber.replace(/\s/g, '');
        
        // Success cards
        if (cardNumber === '4242424242424242') {
          resolve({ status: 'success', paymentId: 'pi_test_' + Date.now() });
        }
        // Decline card
        else if (cardNumber === '4000000000000002') {
          reject(new Error('Carta rifiutata - Fondi insufficienti'));
        }
        // Require authentication
        else if (cardNumber === '4000002500003155') {
          reject(new Error('Carta richiede autenticazione 3D Secure (non disponibile in test)'));
        }
        // Invalid card
        else {
          reject(new Error('Numero carta non valido'));
        }
      }, 2000); // 2 seconds delay
    });
  }
  
  validateTestCard(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    
    // Test mode: accept common test cards
    const testCards = [
      '4242424242424242', // Success
      '4000000000000002', // Decline
      '4000002500003155', // 3D Secure
      '5555555555554444', // Mastercard
      '378282246310005'   // Amex
    ];
    
    return testCards.includes(cleaned);
  }
  
  generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `MV-${timestamp}-${random}`;
  }
  
  setLoadingState(isLoading) {
    const btn = document.getElementById('submitPayment');
    const btnText = document.getElementById('paymentBtnText');
    const btnLoader = document.getElementById('paymentBtnLoader');
    
    if (isLoading) {
      btn.disabled = true;
      btnText.classList.add('d-none');
      btnLoader.classList.remove('d-none');
    } else {
      btn.disabled = false;
      btnText.classList.remove('d-none');
      btnLoader.classList.add('d-none');
    }
  }
  
  showError(message) {
    const errorDiv = document.getElementById('payment-error');
    const errorMsg = document.getElementById('error-message');
    
    if (errorDiv && errorMsg) {
      errorMsg.textContent = message;
      errorDiv.classList.remove('d-none');
      errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  hideError() {
    const errorDiv = document.getElementById('payment-error');
    if (errorDiv) {
      errorDiv.classList.add('d-none');
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CheckoutPage();
});

/**
 * TEST CARDS FOR DEVELOPMENT:
 * 
 * SUCCESS:
 * 4242 4242 4242 4242 - Payment succeeds
 * 
 * DECLINE:
 * 4000 0000 0000 0002 - Payment declined
 * 
 * 3D SECURE:
 * 4000 0025 0000 3155 - Requires authentication
 * 
 * CVV: Any 3 digits (123)
 * Expiry: Any future date (12/25)
 */

