/**
 * Removes accents and diacritics from letters in a string.
 * @param str - Input string
 * @returns A deburred string without accented characters.
 * @throws Error if input is not a string
 */
export function deburr(str: string): string {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Normalize and strip combining marks (diacritics)
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
