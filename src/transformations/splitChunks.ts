export function splitChunks(text: string, chunkSize: Number = 1): string[] {
    if (
        typeof chunkSize !== 'number' ||
        !Number.isInteger(chunkSize) ||
        chunkSize < 1
    ) {
        throw new Error("chunkSize must be a natural number (1, 2, 3, ...)");
    }

    const len = text.length;
    const chunks = []
    for (let i=0; i<len; i+=chunkSize){
        chunks.push(text.slice(i, i+chunkSize));
    }
    return chunks;
}