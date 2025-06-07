// test/string-utils.test.js

// Import ALL your actual functions
import {
  // Validation functions
  isURL, isEmail, isEmpty, isDate,
  
  // Transformation functions  
  truncateText, toSlug, capitalizeWords, removeSpecialChars,
  camelCase, pascalCase, snakeCase, kebabCase, titleCase, constantCase,
  removeWords, initials, removeDuplicates, capitalize,
  
  // Formatting functions
  formatNumber, formatPhone,
  
  // Analysis functions
  wordCount, characterCount, characterFrequency
} from '../src/index.js';

// Test each function with multiple scenarios
describe('Validation Functions', () => {
  
  describe('isURL', () => {
    it('should return true for valid HTTP URLs', () => {
      expect(isURL('http://example.com')).toBeTruthy();
      expect(isURL('https://www.google.com')).toBeTruthy();
      expect(isURL('ftp://example.com')).toBeTruthy();

    });

    it('should return false for invalid URLs', () => {
      expect(isURL('not-a-url')).toBeFalsy();
      expect(isURL('')).toBeFalsy();
    });
  });

  describe('isEmail', () => {
    it('should return true for valid emails', () => {
      expect(isEmail('test@example.com')).toBeTruthy();
      expect(isEmail('user.name+tag@domain.co.uk')).toBeTruthy();
    });

    it('should return false for invalid emails', () => {
      expect(isEmail('invalid-email')).toBeFalsy();
      expect(isEmail('test@')).toBeFalsy();
      expect(isEmail('@domain.com')).toBeFalsy();
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty or whitespace strings', () => {
      expect(isEmpty('')).toBeTruthy();
      expect(isEmpty('   ')).toBeTruthy();
      expect(isEmpty('\t\n')).toBeTruthy();
    });

    it('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBeFalsy();
      expect(isEmpty(' a ')).toBeFalsy();
    });
  });

  describe('isDate', () => {
    it('should return true for valid date strings', () => {
      expect(isDate('2023-12-25')).toBeTruthy();
      expect(isDate('12/25/2023')).toBeTruthy();
      expect(isDate('Dec 25, 2023')).toBeTruthy();
    });

    it('should return false for invalid dates', () => {
      expect(isDate('not-a-date')).toBeFalsy();
      expect(isDate('2023-13-40')).toBeFalsy();
    });
  });
});

describe('Transformation Functions', () => {
  
  describe('truncateText', () => {
    it('should truncate text longer than maxLength', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
      expect(truncateText('Short', 10)).toBe('Short');
    });

    it('should use custom suffix', () => {
      expect(truncateText('Hello World', 5, '***')).toBe('Hello***');
    });
  });

  describe('toSlug', () => {
    it('should convert text to URL-friendly slug', () => {
      expect(toSlug('Hello World')).toBe('hello-world');
      expect(toSlug('Special Characters!')).toBe('special-characters');
    });
  });

  describe('capitalizeWords', () => {
    it('should capitalize first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('test case')).toBe('Test Case');
    });
  });

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('test-case')).toBe('testCase');
    });
  });

  // ... continue for all transformation functions
});

describe('Formatting Functions', () => {
  
  describe('formatNumber', () => {
    it('should format numbers with default separator', () => {
      expect(formatNumber(1234567)).toBe('1,234,567');
    });

    it('should use custom separator', () => {
      expect(formatNumber(1234567, '.')).toBe('1.234.567');
    });
  });

  describe('formatPhone', () => {
    it('should format US phone numbers', () => {
      expect(formatPhone('1234567890', 'us')).toBe('(123) 456-7890');
    });

    it('should format international numbers', () => {
      expect(formatPhone('1234567890', 'international')).toBe('+1 123 456 7890');
    });
  });
});

describe('Analysis Functions', () => {
  
  describe('wordCount', () => {
    it('should count words correctly', () => {
      expect(wordCount('hello world')).toBe(2);
      expect(wordCount('one')).toBe(1);
      expect(wordCount('')).toBe(0);
    });
  });

  describe('characterCount', () => {
    it('should count characters', () => {
      expect(characterCount('hello')).toBe(5);
      expect(characterCount('')).toBe(0);
    });
  });

  describe('characterFrequency', () => {
    it('should return character frequency object', () => {
      expect(characterFrequency('hello')).toEqual({
        'h': 1, 'e': 1, 'l': 2, 'o': 1
      });
    });
  });
});