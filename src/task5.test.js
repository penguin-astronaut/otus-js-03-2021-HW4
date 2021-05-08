import { arrNew, maxItem, minItem } from "./task5";

describe("Arrays", () => {
  it("check", () => {
    expect(arrNew).toEqual([4, 6, 10, 20, 24, 112, -90, 0, 2000, 468]);

    expect(maxItem).toBe(1000);
    expect(minItem).toBe(-45);
  });
});
