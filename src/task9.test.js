import { checkRectangularTriangle, getCircleInfo } from "./task9";

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});
afterEach(() => {
  console.log = originalConsoleLog;
});

describe("triangle is rectangular", () => {
  it("should be true", () => {
    expect(checkRectangularTriangle(3, 4, 5)).toBeTruthy();
    expect(checkRectangularTriangle(12, 5, 13)).toBeTruthy();
    expect(checkRectangularTriangle(12, 16, 20)).toBeTruthy();
  });

  it("should be false", () => {
    expect(checkRectangularTriangle(12, 12, 12)).toBeFalsy();
    expect(checkRectangularTriangle(23, 32, 18)).toBeFalsy();
    expect(checkRectangularTriangle(6, 4, 8)).toBeFalsy();
  });

  it("should be Incorrect side values", () => {
    expect(checkRectangularTriangle("12", 12, 12)).toBe(
      "Incorrect side values"
    );
    expect(checkRectangularTriangle(23, "number", 18)).toBe(
      "Incorrect side values"
    );
    expect(checkRectangularTriangle(6, 4, "8s")).toBe("Incorrect side values");
  });

  it("should be side must be positive", () => {
    expect(checkRectangularTriangle(-12, 12, 12)).toBe("side must be positive");
    expect(checkRectangularTriangle(23, 0, 18)).toBe("side must be positive");
    expect(checkRectangularTriangle(0, -4, 0)).toBe("side must be positive");
  });
});

describe("getCircleInfo", () => {
  it("should be correct", () => {
    getCircleInfo(12);
    expect(console.log).toHaveBeenCalledWith(75.4, 452.39);

    getCircleInfo(3);
    expect(console.log).toHaveBeenCalledWith(18.85, 28.27);

    getCircleInfo(4.5);
    expect(console.log).toHaveBeenCalledWith(28.27, 63.62);
  });
  it("should be Incorrect radius value", () => {
    getCircleInfo("sdsd");
    expect(console.log).toHaveBeenCalledWith("Incorrect radius value");
    getCircleInfo({ radius: 12 });
    expect(console.log).toHaveBeenCalledWith("Incorrect radius value");
    getCircleInfo(0);
    expect(console.log).toHaveBeenCalledWith("Incorrect radius value");
    getCircleInfo(-3);
    expect(console.log).toHaveBeenCalledWith("Incorrect radius value");
  });
});
