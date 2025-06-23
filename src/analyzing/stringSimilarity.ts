/*
* TODO: formatting
* TODO : documentation
* */


export function stringSimilarity(textA: string, textB: string, algorithm: 'Levenshtein' | 'Damerau-Levenshtein' = 'Levenshtein'): number {
    validateParams(textA, textB, algorithm);

    if (textA === textB) {
        return 100.0;
    }

    if (textA.length === 0 && textB.length != 0) {
        return 0.0;
    }

    let distance: number;
    if (algorithm === 'Levenshtein') {
        distance = calculateLevenshteinDistance(textA, textB);
    } else {
        distance = calculateDamerauLevenshteinDistance(textA, textB);
    }


    return calculateSimilarityScore(distance, textA, textB);

}

function calculateSimilarityScore(distance: number, textA: string, textB: string): number {
    const similarityScore: number = 1 - (distance / Math.max(textA.length, textB.length))
    return parseFloat((similarityScore * 100).toFixed(2));
}

function calculateLevenshteinDistance(textA: string, textB: string): number {

    const lenA: number = textA.length;
    const lenB: number = textB.length;

    if (lenA === 0) {
        return lenB
    }

    if (lenB === 0) {
        return lenA;
    }

    const distancesMatrix: number[][] = prepareDistanceMatrix(lenA, lenB);


    for (let i = 1; i <= lenA; i++) {
        for (let j = 1; j <= lenB; j++) {
            distancesMatrix[i][j] = applyBasicEditOperations(i, j, textA, textB, distancesMatrix);
        }
    }

    return distancesMatrix[lenA][lenB];
}

function calculateDamerauLevenshteinDistance(textA: string, textB: string) {
    const lenA: number = textA.length;
    const lenB: number = textB.length;

    if (lenA === 0) {
        return lenB
    }

    if (lenB === 0) {
        return lenA;
    }

    const distancesMatrix: number[][] = prepareDistanceMatrix(lenA, lenB);


    for (let i = 1; i <= lenA; i++) {
        for (let j = 1; j <= lenB; j++) {
            distancesMatrix[i][j] = applyBasicEditOperations(i, j, textA, textB, distancesMatrix);

            if (i > 1 && j > 1 && textA[i - 1] === textB[j - 2] && textA[i - 2] === textB[j - 1]) {
                distancesMatrix[i][j] = Math.min(
                    distancesMatrix[i][j],
                    distancesMatrix[i - 2][j - 2] + 1
                );
            }
        }
    }

    return distancesMatrix[lenA][lenB];
}

function prepareDistanceMatrix(lenA: number, lenB: number): number[][] {

    const distancesMatrix: number[][] = Array.from(
        {length: lenA + 1},
        () => Array(lenB + 1).fill(0)
    );

    for (let i = 0; i <= lenA; i++) {
        distancesMatrix[i][0] = i;
    }

    for (let j = 0; j <= lenB; j++) {
        distancesMatrix[0][j] = j;
    }

    return distancesMatrix;
}

function applyBasicEditOperations(i: number, j: number, textA: string, textB: string, matrix: number[][]): number {
    const cost = textA[i - 1] === textB[j - 1] ? 0 : 1;

    return Math.min(
        matrix[i - 1][j] + 1,       // Deletion
        matrix[i][j - 1] + 1,       // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
    );
}

/////////////////////////////////////////
//// Validation Functions
/////////////////////////////////////////

function isString(value: any): value is string {
    return typeof value === 'string';
}

function validateParams(textA: string, textB: string, algorithm: 'Levenshtein' | 'Damerau-Levenshtein'): void {
    if (!isString(textA) || !isString(textB)) {
        throw new Error('Both text arguments must be strings');
    }

    if (algorithm !== 'Levenshtein' && algorithm !== 'Damerau-Levenshtein') {
        throw new Error("Invalid optional algorithm param. Should be 'Levenshtein' or 'Damerau-Levenshtein'");
    }
}