
export function truncateText(text, length) {
    if (typeof text !== "string" || typeof length !== "number") {
      throw new Error("Invalid arguments. Expected (string, number).");
    }
    return text.length > length ? text.slice(0, length) + "..." : text;
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
  
  export function removeSpecialChars(text) {
    if (typeof text !== "string") {
      throw new Error("Invalid argument. Expected a string.");
    }
    return text.replace(/[^\w\s]/gi, "");
  }
  