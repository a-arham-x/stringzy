import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TestRunner {
  describe(name, fn) {
    console.log(`\n${name}`);
    fn();
  }
  it(name, fn) {
    try {
      fn();
      console.log(`  ✔ ${name}`);
    } catch (err) {
      console.error(`  ✖ ${name}`);
      console.error(`    ${err.message}`);
    }
  }
expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${expected}, but got ${received}`);
      }
    },
    toBeTruthy() {
      if (!received) {
        throw new Error(`Expected value to be truthy, but got ${received}`);
      }
    },
    toBeFalsy() {
      if (received) {
        throw new Error(`Expected value to be falsy, but got ${received}`);
      }
    },
    toEqual(expected) {
      if (JSON.stringify(received) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(received)}`);
      }
    }
    // Add more matchers as needed
  };
}

  async runTests() {
    console.log('🚀 Starting test run...\n');
    const testDir = __dirname;
    const testFiles = fs.readdirSync(testDir)
      .filter(file => file.endsWith('.test.js'))
      .map(file => path.join(testDir, file));

    global.describe = this.describe.bind(this);
    global.it = this.it.bind(this);
    global.expect = this.expect.bind(this);

    for (const testFile of testFiles) {
      await import(pathToFileURL(testFile).href);
    }
  }
}

// Run tests if this file is executed directly
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const runner = new TestRunner();
  runner.runTests();
}

export default TestRunner;