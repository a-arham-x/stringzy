# stringzy

[![NPM Version](https://img.shields.io/npm/v/stringzy)](https://www.npmjs.com/package/stringzy)
[![Downloads](https://img.shields.io/npm/dt/stringzy)](https://www.npmjs.com/package/stringzy)
[![License](https://img.shields.io/npm/l/stringzy)](https://www.npmjs.com/package/stringzy)
[![Bundle Size](https://img.shields.io/bundlephobia/min/stringzy)](https://bundlephobia.com/package/stringzy)

**A lightweight, zero-dependency NPM Package for elegant string manipulations. It provides a range of text utilities for JavaScript and Node.js applications.**

## ✨ Features

- 💪 **Powerful** - Transform strings with minimal code
- 🪶 **Lightweight** - Zero dependencies, tiny footprint
- 🧩 **Modular** - Import only what you need
- 🚀 **Fast** - Optimized for performance
- ✅ **Tested** - Reliable and robust

## 📦 Installation

```bash
# Using npm
npm install stringzy

# Using yarn
yarn add stringzy

# Using pnpm
pnpm add stringzy
```

## 🚀 Quick Start

```javascript
// Import the entire library
import * as stringzy from 'stringzy';

// Or import specific functions
import { truncateText, toSlug } from 'stringzy';

// Transform your strings
const slug = stringzy.toSlug('Hello World!'); // 'hello-world'
```

## 📋 API Reference

### `truncateText(text, maxLength, suffix = '...')`

Truncates text to a specified maximum length, adding a suffix if truncated.

```javascript
import { truncateText } from 'stringzy';

truncateText('This is a long sentence that needs truncating', 10);
// Returns: 'This is a...'

truncateText('This is a long sentence', 10, ' →');
// Returns: 'This is a →'

truncateText('Short', 10);
// Returns: 'Short' (no truncation needed)
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| text | string | required | The input string to truncate |
| maxLength | number | required | Maximum length of the output string (excluding suffix) |
| suffix | string | '...' | String to append if truncation occurs |

### `toSlug(text)`

Converts a string to a URL-friendly slug.

```javascript
import { toSlug } from 'stringzy';

toSlug('Hello World!');
// Returns: 'hello-world'

toSlug('This is a TEST string 123');
// Returns: 'this-is-a-test-string-123'

toSlug('Special $#@! characters');
// Returns: 'special-characters'
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| text | string | required | The input string to convert to a slug |

### `capitalizeWords(text)`

Capitalizes the first letter of each word in a string.

```javascript
import { capitalizeWords } from 'stringzy';

capitalizeWords('hello world');
// Returns: 'Hello World'

capitalizeWords('javascript string manipulation');
// Returns: 'Javascript String Manipulation'

capitalizeWords('already Capitalized');
// Returns: 'Already Capitalized'
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| text | string | required | The input string to capitalize |

### `removeSpecialChars(text, replacement = '')`

Removes special characters from a string, optionally replacing them.

```javascript
import { removeSpecialChars } from 'stringzy';

removeSpecialChars('Hello, world!');
// Returns: 'Hello world'

removeSpecialChars('email@example.com');
// Returns: 'emailexamplecom'

removeSpecialChars('Phone: (123) 456-7890', '-');
// Returns: 'Phone-123-456-7890'
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| text | string | required | The input string to process |
| replacement | string | '' | String to replace special characters with |

## 🛠️ Usage Examples

### In a React component

```jsx
import React from 'react';
import { truncateText, capitalizeWords } from 'stringzy';

function ArticlePreview({ title, content }) {
  return (
    <div className="article-preview">
      <h2>{capitalizeWords(title)}</h2>
      <p>{truncateText(content, 150)}</p>
    </div>
  );
}
```

### In a Node.js application

```javascript
const { toSlug } = require('stringzy');

function createPermalink(title) {
  const timestamp = Date.now();
  const slug = toSlug(title);
  return `${timestamp}-${slug}`;
}

const permalink = createPermalink('New Blog Post Title!');
// Returns something like: '1620000000000-new-blog-post-title'
```

## 🔄 TypeScript Support

The package includes TypeScript type definitions.

```typescript
import { truncateText } from 'stringzy';

// TypeScript will provide proper type checking
const truncated: string = truncateText('Hello, world!', 5);
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Thank you to all contributors and users of this package!
- Inspired by the need for simple yet powerful string manipulation utilities.

---

Made with ❤️ by Samarth Ruia
