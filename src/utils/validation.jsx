/**
 * Utility functions for form validation
 */

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidUrl = (url) => {
    if (!url) return true; // Allow empty URLs
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  export const isValidPhoneNumber = (phoneNumber) => {
    // Basic phone validation - accepts common formats and removes non-digits
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };
  
  export const isRequiredField = (value) => {
    return !!value && value.trim() !== '';
  };
  
  export const validatePrice = (price) => {
    // Accept common price formats like $10, 10.99, 10,99, etc.
    return /^(\$|€|£)?[\d,.]+$/.test(price);
  };
  
  // New validation functions
  export const isStrongPassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const isValidZipCode = (zipCode, country = 'US') => {
    // Basic ZIP/postal code validation for common formats
    if (country === 'US') {
      return /^\d{5}(-\d{4})?$/.test(zipCode); // US format: 12345 or 12345-6789
    } else if (country === 'CA') {
      return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(zipCode); // Canadian format
    } else if (country === 'UK') {
      return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/.test(zipCode); // UK format
    }
    // Generic validation for other countries (at least 3 characters)
    return zipCode.length >= 3;
  };
  
  export const isValidUsername = (username) => {
    // Alphanumeric, 3-20 characters, allowing underscores and hyphens
    return /^[a-zA-Z0-9_-]{3,20}$/.test(username);
  };
  
  export const isNumeric = (value) => {
    return /^[0-9]+$/.test(value);
  };
  
  export const isAlpha = (value) => {
    return /^[a-zA-Z]+$/.test(value);
  };
  
  export const isAlphaNumeric = (value) => {
    return /^[a-zA-Z0-9]+$/.test(value);
  };
  
  export const isInRange = (value, min, max) => {
    return value >= min && value <= max;
  };
  
  export const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };
  
  export const isValidCreditCard = (cardNumber) => {
    // Remove spaces and dashes
    const digitsOnly = cardNumber.replace(/[\s-]/g, '');
    // Check if it contains only digits and has valid length (13-19 digits)
    return /^\d{13,19}$/.test(digitsOnly) && validateLuhn(digitsOnly);
  };
  
  // Luhn algorithm for credit card validation
  const validateLuhn = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    
    // Loop through card number from right to left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i));
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return sum % 10 === 0;
  };
  
  // Additional validation functions
  export const isValidHexColor = (color) => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  };
  
  export const isValidIPAddress = (ip) => {
    // IPv4 validation
    const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    const match = ipv4Regex.exec(ip);
    
    if (match) {
      return match.slice(1).every(part => {
        const num = parseInt(part, 10);
        return num >= 0 && num <= 255;
      });
    }
    
    // IPv6 validation (simplified)
    return /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(ip);
  };
  
  export const isValidFileSize = (fileSizeInBytes, maxSizeInMB) => {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return fileSizeInBytes <= maxSizeInBytes;
  };
  
  export const isValidFileType = (fileName, allowedExtensions) => {
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    return allowedExtensions.includes(extension);
  };
  
  export const isValidAge = (birthDate, minAge) => {
    const today = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = today.getFullYear();
    
    let age = currentYear - birthYear;
    
    // Adjust age if birthday hasn't occurred yet this year
    const birthMonth = birthDate.getMonth();
    const currentMonth = today.getMonth();
    const birthDay = birthDate.getDate();
    const currentDay = today.getDate();
    
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    
    return age >= minAge;
  };
  
  export const containsSpecialCharacters = (value) => {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
  };
  
  export const containsNumbers = (value) => {
    return /\d/.test(value);
  };
  
  export const isSecurePassword = (password) => {
    const errors = [];
    let strength = 'weak';
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    // Determine password strength
    if (errors.length === 0) {
      strength = 'strong';
    } else if (errors.length <= 2 && password.length >= 6) {
      strength = 'medium';
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      strength
    };
  };
  
  export const isValidLatLng = (lat, lng) => {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  };