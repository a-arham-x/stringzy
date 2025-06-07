// export function isURL(str) {
//   try {
//     new URL(str);
//     return true;
//   } catch {
//     return false;
//   }
// }
export function isURL(str) {
  if (!str || typeof str !== 'string') {
    return false;
  }
  
  str = str.trim();
  
  if (str.length === 0 || str.length > 2048) {
    return false;
  }
  
  try {
    const url = new URL(str);
    const protocol = url.protocol;
    
    if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:$/.test(protocol)) {
      return false;
    }
    
    if (protocol.length > 20) {
      return false;
    }
    
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



export function isDate(input) {

  //console.log("True")

  
  
  if (typeof input !== "string") return false;

  const formats = [
    {
      // Format: YYYY-MM-DD 
      regex: /^\d{4}-\d{2}-\d{2}$/,
      split: (s) => s.split("-").map(Number),
      order: ["Y", "M", "D"],
    },
      {
      // Format: MM-DD-YYYY 
      regex: /^\d{2}-\d{2}-\d{4}$/,
      split: (s) => s.split("-").map(Number),
      order: ["M", "D", "Y"],
   },
    {
      // Format: DD-MM-YYYY 
      regex: /^\d{2}-\d{2}-\d{4}$/,
      split: (s) => s.split("-").map(Number),
      order: ["D", "M", "Y"],
    },
    {
      // Format: DD/MM/YYYY 
      regex: /^\d{2}\/\d{2}\/\d{4}$/,
      split: (s) => s.split("/").map(Number),
      order: ["D", "M", "Y"],
    },
    {
      // Format: YYYY/MM/DD 
      regex: /^\d{4}\/\d{2}\/\d{2}$/,
      split: (s) => s.split("/").map(Number),
      order: ["Y", "M", "D"],
    },
  ];

  for (const format of formats) {
    if (format.regex.test(input)) {
      const parts = format.split(input);
      const dateParts = {};
      format.order.forEach((key, i) => {
        dateParts[key] = parts[i];
      });

      const { Y, M, D } = dateParts;
      const date = new Date(Y, M - 1, D); // JS months are 0-indexed
      return date.getFullYear() === Y && date.getMonth() === M -1  && date.getDate() === D;
    }
  }

  return false;
}

export function isSlug(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return false;
  }

  const slugRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  return slugRegex.test(str);
}