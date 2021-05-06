import { circleInSquare, greatesNumber, showMonth } from "./task2";

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});
afterEach(() => {
  console.log = originalConsoleLog;
});

describe("Greatest number", () => {
  it("should correct values", () => {
    greatesNumber(3, 14);
    expect(console.log).toHaveBeenCalledWith(14);

    greatesNumber(-2, -3);
    expect(console.log).toHaveBeenCalledWith(-2);
  });

  it("should be false", () => {
    greatesNumber(3, "14");
    expect(console.log).toHaveBeenCalledWith(false);

    greatesNumber("sdfsdf", "23");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("showMonth", () => {
  it("should correct values", () => {
    showMonth(1);
    expect(console.log).toHaveBeenCalledWith("Январь");

    showMonth(4);
    expect(console.log).toHaveBeenCalledWith("Апрель");
  });

  it("should be incorrect number", () => {
    showMonth(0);
    expect(console.log).toHaveBeenCalledWith("Incorrect number");

    showMonth(15);
    expect(console.log).toHaveBeenCalledWith("Incorrect number");
  });

  it("should be false", () => {
    showMonth("1");
    expect(console.log).toHaveBeenCalledWith(false);

    showMonth("7");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("Circle in Sqaure", () => {
  it("should be true", () => {
    circleInSquare(16, 26);
    expect(console.log).toHaveBeenCalledWith(true);

    circleInSquare(13, 29);
    expect(console.log).toHaveBeenCalledWith(true);

    circleInSquare(27, 14);
    expect(console.log).toHaveBeenCalledWith(true);
  });

  it("should be false", () => {
    circleInSquare(32, 14);
    expect(console.log).toHaveBeenCalledWith(false);

    circleInSquare(75, 30);
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
