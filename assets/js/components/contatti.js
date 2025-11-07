/**
 * Contatti Page - Form Management & EmailJS Integration
 * Mario Vetere Marketplace
 */

class ContattiPage {
  constructor() {
    this.form = null;
    this.submitBtn = null;
    this.init();
  }
  
  init() {
    console.log('📧 Inizializzazione Pagina Contatti...');
    
    // Get form elements
    this.form = document.getElementById('contactForm');
    this.submitBtn = document.getElementById('submitBtn');
    
    if (!this.form) {
      console.error('❌ Form non trovato');
      return;
    }
    
    // Setup form validation
    this.setupFormValidation();
    
    // Setup form submission
    this.setupFormSubmission();
    
    // Init AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true
      });
    }
  }
  
  setupFormValidation() {
    // Real-time validation on blur
    const inputs = this.form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });
      
      // Remove invalid class on input
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (!this.isValidEmail(emailInput.value)) {
          emailInput.classList.add('is-invalid');
        }
      });
    }
    
    // Message min length validation
    const messageInput = document.getElementById('message');
    if (messageInput) {
      messageInput.addEventListener('input', () => {
        const charCount = messageInput.value.length;
        if (charCount > 0 && charCount < 10) {
          messageInput.setCustomValidity('Il messaggio deve essere di almeno 10 caratteri');
        } else {
          messageInput.setCustomValidity('');
        }
      });
    }
  }
  
  validateField(field) {
    if (!field.checkValidity()) {
      field.classList.add('is-invalid');
      return false;
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      return true;
    }
  }
  
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  setupFormSubmission() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Validate all fields
      if (!this.form.checkValidity()) {
        this.form.classList.add('was-validated');
        
        // Focus first invalid field
        const firstInvalid = this.form.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        
        return;
      }
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim()
      };
      
      // Additional validation
      if (formData.message.length < 10) {
        this.showError('Il messaggio deve essere di almeno 10 caratteri');
        return;
      }
      
      // Submit form
      await this.submitForm(formData);
    });
  }
  
  async submitForm(data) {
    // Show loading state
    this.setLoadingState(true);
    this.hideMessages();
    
    try {
      // Check if EmailJS is loaded
      if (typeof emailjs !== 'undefined') {
        // EmailJS Integration
        await this.sendWithEmailJS(data);
      } else {
        // Fallback: simulate sending (for development)
        console.log('📧 EmailJS non caricato, simulazione invio:', data);
        await this.simulateSending(data);
      }
      
      // Show success message
      this.showSuccess();
      
      // Reset form
      this.form.reset();
      this.form.classList.remove('was-validated');
      
      // Remove is-valid classes
      const validFields = this.form.querySelectorAll('.is-valid');
      validFields.forEach(field => field.classList.remove('is-valid'));
      
    } catch (error) {
      console.error('❌ Errore invio form:', error);
      this.showError(error.message || 'Si è verificato un errore. Riprova più tardi.');
    } finally {
      this.setLoadingState(false);
    }
  }
  
  async sendWithEmailJS(data) {
    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID';  // Replace with your EmailJS service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your EmailJS public key
    
    // Template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Non fornito',
      subject: data.subject,
      message: data.message,
      to_name: 'Mario Vetere'
    };
    
    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('✅ Email inviata con successo:', response);
      return response;
    } catch (error) {
      console.error('❌ Errore EmailJS:', error);
      throw new Error('Errore durante l\'invio dell\'email');
    }
  }
  
  async simulateSending(data) {
    // Simulate API call for development
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('✅ Messaggio simulato inviato:', data);
        resolve({ status: 'success' });
      }, 1500);
    });
  }
  
  setLoadingState(isLoading) {
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    
    if (isLoading) {
      this.submitBtn.disabled = true;
      btnText.classList.add('d-none');
      btnLoader.classList.remove('d-none');
    } else {
      this.submitBtn.disabled = false;
      btnText.classList.remove('d-none');
      btnLoader.classList.add('d-none');
    }
  }
  
  showSuccess() {
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
      successMsg.classList.remove('d-none');
      
      // Scroll to message
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Auto-hide after 10 seconds
      setTimeout(() => {
        successMsg.classList.add('d-none');
      }, 10000);
    }
  }
  
  showError(message) {
    const errorMsg = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    if (errorMsg && errorText) {
      errorText.textContent = message;
      errorMsg.classList.remove('d-none');
      
      // Scroll to message
      errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Auto-hide after 8 seconds
      setTimeout(() => {
        errorMsg.classList.add('d-none');
      }, 8000);
    }
  }
  
  hideMessages() {
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    
    if (successMsg) successMsg.classList.add('d-none');
    if (errorMsg) errorMsg.classList.add('d-none');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ContattiPage();
});

// Optional: EmailJS initialization
// Add this script in HTML before this file:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
// Then uncomment and configure:
/*
(function() {
  emailjs.init('YOUR_PUBLIC_KEY');
})();
*/

