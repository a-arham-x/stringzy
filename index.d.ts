/**
 * Checks if a string is a valid URL.
 * @param str - The string to validate.
 * @returns True if the string is a valid URL, otherwise false.
 */
export function isURL(str: string): boolean;

/**
 * Checks if a string is a valid email address.
 * @param str - The string to validate.
 * @returns True if the string is a valid email address, otherwise false.
 */
export function isEmail(str: string): boolean;

/**
 * Checks if a string is empty or contains only whitespace.
 * @param str - The string to validate.
 * @returns True if the string is empty or contains only whitespace, otherwise false.
 */
export function isEmpty(str: string): boolean;

/**
 * Checks if a string represents a valid date in various formats.
 * @param input - The string to validate.
 * @returns True if the string is a valid date, otherwise false.
 */
export function isDate(input: string): boolean;

/**
 * Truncates a string to a specified maximum length and appends a suffix if truncated.
 * @param text - The string to truncate.
 * @param maxLength - The maximum length of the string.
 * @param suffix - The suffix to append if truncated (default is '...').
 * @returns The truncated string.
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix?: string
): string;

/**
 * Converts a string into a URL-friendly slug.
 * @param text - The string to convert.
 * @returns The slugified string.
 */
export function toSlug(text: string): string;

/**
 * Capitalizes the first letter of each word in a string.
 * @param text - The string to transform.
 * @returns The string with capitalized words.
 */
export function capitalizeWords(text: string): string;

/**
 * Removes special characters from a string, optionally replacing them with a specified replacement.
 * @param text - The string to transform.
 * @param replacement - The replacement for special characters (default is an empty string).
 * @returns The transformed string.
 */
export function removeSpecialChars(text: string, replacement?: string): string;

/**
 * Converts a string to camelCase format.
 * @param text - The string to transform.
 * @returns The camelCase formatted string.
 */
export function camelCase(text: string): string;

/**
 * Converts a string to PascalCase format.
 * @param text - The string to transform.
 * @returns The PascalCase formatted string.
 */
export function pascalCase(text: string): string;

/**
 * Converts a string to snake_case format.
 * @param text - The string to transform.
 * @returns The snake_case formatted string.
 */
export function snakeCase(text: string): string;

/**
 * Converts a string to kebab-case format.
 * @param text - The string to transform.
 * @returns The kebab-case formatted string.
 */
export function kebabCase(text: string): string;

/**
 * Converts a string to Title Case format.
 * @param text - The string to transform.
 * @returns The Title Case formatted string.
 */
export function titleCase(text: string): string;

/**
 * Converts a string to CONSTANT_CASE format.
 * @param text - The string to transform.
 * @returns The CONSTANT_CASE formatted string.
 */
export function constantCase(text: string): string;

/**
 * Removes specified words from a string.
 * @param str - The string to transform.
 * @param wordsToRemove - The words to remove (can be a string or an array of strings).
 * @returns The string with the specified words removed.
 */
export function removeWords(
  str: string,
  wordsToRemove: string | string[]
): string;

/**
 * Extracts the initials from a string, optionally limiting the number of initials.
 * @param text - The string to extract initials from.
 * @param limit - The maximum number of initials to extract (optional).
 * @returns The initials as a string.
 */
export function initials(text: string, limit?: number): string;

/**
 * Removes duplicate words from a string.
 * @param text - The string to transform.
 * @returns The string with duplicate words removed.
 */
export function removeDuplicates(text: string): string;

/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalize(str: string): string;

/**
 * Formats a number with a specified separator for thousands.
 * @param num - The number to format.
 * @param separator - The separator to use (default is ',').
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, separator?: string): string;

/**
 * Formats a phone number based on the specified format.
 * @param phone - The phone number to format.
 * @param format - The format to use ('us', 'international', or 'indian').
 * @returns The formatted phone number as a string.
 */
export function formatPhone(
  phone: string,
  format?: "us" | "international" | "indian"
): string;

/**
 * Counts the number of words in a string.
 * @param str - The string to analyze.
 * @returns The word count.
 */
export function wordCount(str: string): number;

/**
 * Counts the number of characters in a string.
 * @param str - The string to analyze.
 * @returns The character count.
 */
export function characterCount(str: string): number;

/**
 * Calculates the frequency of each character in a string (excluding spaces).
 * @param str - The string to analyze.
 * @returns An object where keys are characters and values are their frequencies.
 */
export function characterFrequency(str: string): Record<string, number>;
