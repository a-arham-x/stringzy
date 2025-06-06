// test/coverage.js
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);

class CoverageChecker {
  constructor() {
    this.threshold = 80; // 80% coverage threshold
    this.srcDir = path.join(process.cwd(), 'src');
    this.testDir = path.join(process.cwd(), 'test');
  }

  // Get all source files
  getSourceFiles() {
    if (!fs.existsSync(this.srcDir)) {
      console.log('❌ Source directory not found');
      return [];
    }

    return fs.readdirSync(this.srcDir)
      .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
      .map(file => path.join(this.srcDir, file));
  }

  // Get all test files
  getTestFiles() {
    if (!fs.existsSync(this.testDir)) {
      console.log('❌ Test directory not found');
      return [];
    }

    return fs.readdirSync(this.testDir)
      .filter(file => file.endsWith('.test.js'))
      .map(file => path.join(this.testDir, file));
  }

  // Extract function names from source files
  extractFunctions(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const functionRegex = /export\s+function\s+(\w+)/g;
    const functions = [];
    let match;

    while ((match = functionRegex.exec(content)) !== null) {
      functions.push(match[1]);
    }

    return functions;
  }

  // Check if function is tested
  isFunctionTested(functionName, testFiles) {
    for (const testFile of testFiles) {
      const testContent = fs.readFileSync(testFile, 'utf8');
      if (testContent.includes(functionName)) {
        return true;
      }
    }
    return false;
  }

  // Get modified files (new or changed)
  getModifiedFiles() {
    try {
      // Get staged files
      const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.trim() && (file.includes('src/') || file.includes('lib/')))
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'));

      return stagedFiles.map(file => path.join(process.cwd(), file));
    } catch (error) {
      console.log('⚠️  Could not get git diff, checking all files');
      return this.getSourceFiles();
    }
  }

  async checkCoverage() {
    console.log('📊 Checking test coverage...\n');

    const sourceFiles = this.getSourceFiles();
    const testFiles = this.getTestFiles();
    const modifiedFiles = this.getModifiedFiles();

    if (sourceFiles.length === 0) {
      console.log('⚠️  No source files found');
      return true;
    }

    if (testFiles.length === 0) {
      console.log('⚠️  No test files found');
      return false;
    }

    let totalFunctions = 0;
    let testedFunctions = 0;
    let newUntestedFunctions = [];

    // Check coverage for all files, but focus on modified ones for threshold
    for (const sourceFile of sourceFiles) {
      const functions = this.extractFunctions(sourceFile);
      const isModified = modifiedFiles.some(modFile => 
        path.resolve(modFile) === path.resolve(sourceFile)
      );

      console.log(`📄 ${path.basename(sourceFile)}:`);

      for (const functionName of functions) {
        totalFunctions++;
        const isTested = this.isFunctionTested(functionName, testFiles);

        if (isTested) {
          testedFunctions++;
          console.log(`  ✅ ${functionName} - tested`);
        } else {
          console.log(`  ❌ ${functionName} - not tested`);
          if (isModified) {
            newUntestedFunctions.push({ file: sourceFile, function: functionName });
          }
        }
      }
      console.log('');
    }

    // Calculate overall coverage
    const overallCoverage = totalFunctions > 0 ? (testedFunctions / totalFunctions) * 100 : 0;

    console.log('📊 Coverage Summary:');
    console.log(`   Total Functions: ${totalFunctions}`);
    console.log(`   Tested Functions: ${testedFunctions}`);
    console.log(`   Overall Coverage: ${overallCoverage.toFixed(1)}%`);

    // Check if new/modified functions meet threshold
    if (newUntestedFunctions.length > 0) {
      console.log('\n❌ New/modified functions without tests:');
      newUntestedFunctions.forEach(({ file, function: fn }) => {
        console.log(`   ${path.basename(file)}: ${fn}`);
      });
      console.log(`\n❌ Coverage check failed! New functions need ${this.threshold}% coverage.`);
      return false;
    }

    if (overallCoverage >= this.threshold) {
      console.log(`\n✅ Coverage check passed! (${overallCoverage.toFixed(1)}% >= ${this.threshold}%)`);
      return true;
    } else {
      console.log(`\n⚠️  Overall coverage below threshold (${overallCoverage.toFixed(1)}% < ${this.threshold}%), but no new untested functions.`);
      return true; // Allow commit but warn
    }
  }
}

// Run coverage check if this file is executed directly
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  const checker = new CoverageChecker();
  checker.checkCoverage().then(passed => {
    process.exit(passed ? 0 : 1);
  });
}

export default CoverageChecker;