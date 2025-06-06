// test/runner.js
const fs = require('fs');
const path = require('path');

class TestRunner {
  constructor() {
    this.tests = [];
    this.passedTests = 0;
    this.failedTests = 0;
    this.totalTests = 0;
  }

  describe(description, callback) {
    console.log(`\n📝 ${description}`);
    callback();
  }

  it(description, callback) {
    this.totalTests++;
    try {
      callback();
      console.log(`  ✅ ${description}`);
      this.passedTests++;
    } catch (error) {
      console.log(`  ❌ ${description}`);
      console.log(`     Error: ${error.message}`);
      this.failedTests++;
    }
  }

  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error(`Expected ${expected}, but got ${actual}`);
        }
      },
      toEqual: (expected) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
        }
      },
      toBeTruthy: () => {
        if (!actual) {
          throw new Error(`Expected truthy value, but got ${actual}`);
        }
      },
      toBeFalsy: () => {
        if (actual) {
          throw new Error(`Expected falsy value, but got ${actual}`);
        }
      },
      toThrow: () => {
        if (typeof actual !== 'function') {
          throw new Error('Expected a function that throws');
        }
        let threw = false;
        try {
          actual();
        } catch (e) {
          threw = true;
        }
        if (!threw) {
          throw new Error('Expected function to throw an error');
        }
      }
    };
  }

  async runTests() {
    console.log('🚀 Starting test run...\n');
    
    // Load all test files
    const testDir = path.join(__dirname);
    const testFiles = fs.readdirSync(testDir)
      .filter(file => file.endsWith('.test.js'))
      .map(file => path.join(testDir, file));

    // Make test methods available globally
    global.describe = this.describe.bind(this);
    global.it = this.it.bind(this);
    global.expect = this.expect.bind(this);

    // Run each test file
    for (const testFile of testFiles) {
      require(testFile);
    }

    // Print results
    console.log('\n📊 Test Results:');
    console.log(`   Total: ${this.totalTests}`);
    console.log(`   Passed: ${this.passedTests}`);
    console.log(`   Failed: ${this.failedTests}`);

    if (this.failedTests > 0) {
      console.log('\n❌ Some tests failed!');
      process.exit(1);
    } else {
      console.log('\n✅ All tests passed!');
      process.exit(0);
    }
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  const runner = new TestRunner();
  runner.runTests();
}

module.exports = TestRunner;