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

export const transform = transformations;
export const validate = validations;
export const analyze = analysis;
export const format = formatting;


export default {
  ...transformations, 
  ...validations,
  ...analysis,
  ...formatting,
  
  transform,
  validate,
  analyze,
  format,

};