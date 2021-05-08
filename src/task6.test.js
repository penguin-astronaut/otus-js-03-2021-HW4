import { diff, pow, isWord } from "./task6";

describe("diff between numbers", () => {
  it("check", () => {
    expect(diff(4, 2)).toBe(2);

    expect(diff(-4, 2)).toBe(6);

    expect(diff(3, 0)).toBe(3);
  });
});

describe("IsWord", () => {
  it("shold be true", () => {
    expect(isWord("sdfsfd")).toBe(true);
    expect(isWord("abc_def")).toBe(true);
    expect(isWord("3453______")).toBe(true);
    expect(isWord("234234")).toBe(true);
  });

  it("shold be false", () => {
    expect(isWord("sdf sfd")).toBe(false);
    expect(isWord("abc_ def")).toBe(false);
    expect(isWord("345 3__ ____")).toBe(false);
    expect(isWord("2 3 4 2 3 4")).toBe(false);
  });
});

describe("pow number", () => {
  it("check", () => {
    expect(pow(4, 2)).toBe(16);
    expect(pow(-4, 2)).toBe(16);
    expect(pow(3, 3)).toBe(27);
    expect(pow(2, 9)).toBe(512);
  });
});
