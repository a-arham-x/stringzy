/**
 * index.js
 * Main entry point for the srtingzy package
 * 
 * This file serves as the public API for the entire library,
 * organizing and exporting all functionality in a structured way.
 * 
 * @module stringzy
 * @author Samarth Ruia
 * @version 2.0.0
 */

import * as transformations from './transformations.js';
import * as validations from './validations.js';
import * as analysis from './analysis.js';
import * as formatting from './formatting.js';


export const {
  truncateText,
  toSlug,
  capitalizeWords,
  removeSpecialChars,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  titleCase,
  constantCase,
  removeWords,
} = transformations;

export const {
  isURL,
  isEmail,
  isEmpty
} = validations;

export const {
  wordCount,
  characterCount,
  characterFrequency
} = analysis;

export const {
  capitalize,
  formatNumber,
  formatPhone
} = formatting;

export const transform = transformations;
export const validate = validations;
export const analyze = analysis;
export const format = formatting;


export default {
  ...transformations, 
  ...validations,
  ...analysis,
  ...formatting,
  
  transform: transformations,
  validate: validations,
  analyze: analysis,
  format: formatting,

  transform,
  validate,
  analyze,
  format,
};
