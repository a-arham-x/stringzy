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
  