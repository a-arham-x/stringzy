
/*
* TODO: formatting
* TODO : documentation
* TODO: add more calculate algorithms
* */


export function stringSimilarity(textA: string, textB: string): number {

    if(!isString(textA) || !isString(textB)) {
        throw new Error('Both arguments must be strings');
    }

    if (textA === textB) {
        return 100.0;
    }

    if (textA.length === 0 && textB.length != 0) {
        return 0.0;
    }

    const similarityScore: number = 1 - (calculateLevenshteinDistance(textA, textB) / Math.max(textA.length, textB.length));
    return parseFloat((similarityScore * 100).toFixed(2));

}

function calculateLevenshteinDistance(textA: string, textB: string): number {

    const lenA: number = textA.length;
    const lenB: number = textB.length;

    if(lenA === 0) {
        return lenB
    }

    if(lenB === 0) {
        return lenA;
    }

    const distancesMatrix: number[][] = Array.from(
        { length: lenA + 1 },
        () => Array(lenB + 1).fill(0)
    );

    for (let i = 0; i <= lenA; i++) {
        distancesMatrix[i][0] = i;
    }

    for (let j = 0; j <= lenB; j++) {
        distancesMatrix[0][j] = j;
    }


    for (let i = 1; i <= lenA; i++) {
        for (let j = 1; j <= lenB; j++) {
            const cost = textA[i - 1] === textB[j - 1] ? 0 : 1;
            distancesMatrix[i][j] = Math.min(
                // Deletion
                distancesMatrix[i - 1][j] + 1,
                // Insertion
                distancesMatrix[i][j - 1] + 1,
                // Substitution
                distancesMatrix[i - 1][j - 1] + cost
            );
        }
    }

    return distancesMatrix[lenA][lenB];
}


function isString(value: any): value is string {
    return typeof value === 'string';
}