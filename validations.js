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

export function isDate(str) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(str)) return false;

  const date = new Date(str);
  return !isNaN(date.getTime());
}

