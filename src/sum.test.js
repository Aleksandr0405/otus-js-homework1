import { sum } from "./sum";

describe("sum", () => {
    it ("sum number", () => {
        expect(sum(1, 2)).toEqual(4)
    })
} )