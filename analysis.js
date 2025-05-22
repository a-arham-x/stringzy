
export function wordCount(str) {
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}


export function characterCount(str) {
    
  return str.length;
}

export function characterFrequency(str) {
  const frequency = {};
  for (const char of str.toLowerCase()) {
    if (char !== ' ') { // Exclude spaces for cleaner analysis
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }
  return frequency;
}
