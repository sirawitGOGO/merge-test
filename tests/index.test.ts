import { merge } from "../src/merge";

describe("merge function", () => {
    test("merge threee array correctly", () => {
        const collection_1 = [1, 2, 3];
        const collection_2 = [4, 5, 6];
        const collection_3 = [9, 8, 7];
        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    test("merge correctly if there are empty array", () => {
        expect(merge([],[1,2,3],[6,5,4])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1,2,3],[],[6,5,4])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1,2,3],[4,5,6],[])).toEqual([1, 2, 3, 4, 5, 6]);
    })

    test("merge correctly if there are duplicate numbers", () => {
        expect(merge([1,2,3],[1,2,3],[1,2,3])).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
    })
})