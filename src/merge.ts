export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const mergedCollection = collection_1.concat(collection_2, collection_3);
    const n = mergedCollection.length;
    for(let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (mergedCollection[i] > mergedCollection[j]) {
                const temp = mergedCollection[i];
                mergedCollection[i] = mergedCollection[j];
                mergedCollection[j] = temp;
            }
        }
    }
    return mergedCollection;
}