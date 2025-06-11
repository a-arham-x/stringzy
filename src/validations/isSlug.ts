export function isSlug(str: string): boolean {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }
  const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return slugRegex.test(str);
}
