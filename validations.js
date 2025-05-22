export function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}


export function isEmail(str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
}


export function isEmpty(str) {
  return str.trim().length === 0;
}