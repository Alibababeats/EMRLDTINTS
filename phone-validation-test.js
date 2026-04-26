/**
 * Phone Number Validation Test
 * 
 * This file demonstrates how the phone number validation works
 * You can run this with: node phone-validation-test.js
 */

// Install libphonenumber-js first with: npm install libphonenumber-js
const { parsePhoneNumber, isValidPhoneNumber } = require('libphonenumber-js');

// Test cases to try
const testCases = [
  // Valid US numbers in different formats
  '3013002559',           // 10 digits
  '(301) 300-2559',       // Formatted
  '+13013002559',         // With country code
  '301-300-2559',         // Dash formatted
  
  // Invalid numbers
  '123',                  // Too short
  '12345',                // Too short
  '99999999999',          // Too many digits (but we limit to 10 in the form)
  '1234567890',           // Invalid number pattern
  '5555555555',           // Not a real number (555 is reserved for fiction)
  
  // Edge cases
  '+1 (301) 300-2559',    // Country code + formatted
];

console.log('🔍 Phone Number Validation Test\n');
console.log('='.repeat(70));

testCases.forEach((phoneInput) => {
  try {
    // This is what happens in the form's handlePhoneChange
    const parsed = parsePhoneNumber(phoneInput, 'US');
    
    if (parsed) {
      const isValid = isValidPhoneNumber(parsed.number, parsed.country);
      const formattedNumber = parsed.formatInternational();
      const nationalFormat = parsed.formatNational();
      
      console.log(`\n📱 Input: "${phoneInput}"`);
      console.log(`   ✓ Parsed successfully`);
      console.log(`   International: ${formattedNumber}`);
      console.log(`   National: ${nationalFormat}`);
      console.log(`   Country: ${parsed.country}`);
      console.log(`   Valid: ${isValid ? '✅ YES' : '❌ NO'}`);
    } else {
      console.log(`\n📱 Input: "${phoneInput}"`);
      console.log(`   ❌ Could not parse - likely invalid format or too short`);
    }
  } catch (error) {
    console.log(`\n📱 Input: "${phoneInput}"`);
    console.log(`   ❌ Error: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('\n📋 How the Form Validation Works:\n');
console.log('1. User types numbers → formatPhoneNumber() strips non-digits');
console.log('2. Numbers formatted as (XXX) XXX-XXXX as user types');
console.log('3. Max 10 digits enforced');
console.log('4. When 10 digits entered → parsePhoneNumber() called');
console.log('5. isValidPhoneNumber() checks if it\'s a real phone number');
console.log('6. If invalid → "Please enter a valid phone number" error shown');
console.log('7. If valid → error clears, form can submit\n');

console.log('💡 Real-World Examples:\n');
console.log('✅ VALID:   (301) 300-2559 → Real area code in Maryland');
console.log('✅ VALID:   (202) 555-1234 → Valid DC area code');
console.log('❌ INVALID: (999) 999-9999 → Area code 999 doesn\'t exist');
console.log('❌ INVALID: (555) 555-5555 → 555 is reserved for fiction\n');
