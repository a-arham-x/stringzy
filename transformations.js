export function truncateText(text, maxLength, suffix = '...') {
    if (typeof text !== 'string') {
        throw new Error("Input text must be a string.");
    }
    if (typeof maxLength !== 'number' || maxLength < 0) {
        throw new Error("maxLength must be a non-negative number.");
    }
    if (typeof suffix !== 'string') {
        throw new Error("Suffix must be a string.");
    }

    if (text.length <= maxLength) {
        return text;
    }

    const adjustedLength = maxLength - suffix.length;
    return text.slice(0, adjustedLength > 0 ? adjustedLength : 0) + suffix;
}
  

  export function toSlug(text) {
    if (typeof text !== "string") {
      throw new Error("Invalid argument. Expected a string.");
    }
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, "-")
      .replace(/[^\w-]+/g, "");
  }
  

  export function capitalizeWords(text) {
    if (typeof text !== "string") {
      throw new Error("Invalid argument. Expected a string.");
    }
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  export function removeSpecialChars(text, replacement = '') {
    if (typeof text !== "string") {
        throw new Error("Invalid argument. Expected a string.");
    }
    if (typeof replacement !== "string") {
        throw new Error("Replacement must be a string.");
    }
    return text.replace(/[^\w\s]/gi, replacement);
}
  

export function camelCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s(.)/g, (_, character) => character.toUpperCase())
    .replace(/^(.)/, (_, character) => character.toLowerCase());
}


export function pascalCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => character.toUpperCase())
    .replace(/\s/g, '');
}


export function snakeCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .replace(/[\s-]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^\w_]/g, '_')
    .toLowerCase()
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}


export function kebabCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[^\w-]/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function titleCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .toLowerCase()
    .replace(/([^\w\s]|_)/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/(^|\s)(.)/g, (_, prefix, character) => prefix + character.toUpperCase())
    .replace(/\s/g, ' ');
}
export function constantCase(text) {
  if (text == null) return '';
  
  return text
    .trim()
    .replace(/[\s-]+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[^\w_]/g, '_')
    .toUpperCase()
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function removeWords(str, wordsToRemove) {
  const wordsArray = Array.isArray(wordsToRemove) ? wordsToRemove : [wordsToRemove];
  const regex = new RegExp(`\\b(${wordsArray.join('|')})\\b`, 'gi');
  return str.replace(regex, '').replace(/\s+/g, ' ').trim();
}