
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

export function complexity (str) {
  if (!str) return { score: 0, uniqueness: 0, length: 0 }

  const length = str.length
  const unique = new Set(str).size
  const uniqueness = unique / length

  let typeScore = 0
  if (/[a-z]/.test(str)) typeScore += 0.25
  if (/[A-Z]/.test(str)) typeScore += 0.25
  if (/[0-9]/.test(str)) typeScore += 0.25
  if (/[^a-zA-Z0-9]/.test(str)) typeScore += 0.25

  // Calculate score based on length and character diversity
  const lengthScore = Math.min(1, length / 20) // Max score at 20 chars
  const score = uniqueness * 0.4 + typeScore * 0.4 + lengthScore * 0.2;
  return {
    score: parseFloat(score.toFixed(2)),
    uniqueness: parseFloat(uniqueness.toFixed(2)),
    length
  }
}
