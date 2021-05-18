import { sumNumbers, multiplicationTableForSeven, average } from "./task3";

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});
afterEach(() => {
  console.log = originalConsoleLog;
});

describe("Sum numbers from 50 to 100", () => {
  it("It should be 3825", () => {
    sumNumbers();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});

describe("Multiplication table for 7", () => {
  it("Check it", () => {
    multiplicationTableForSeven();
    expect(console.log).toHaveBeenCalledWith("7 x 1 = 7");
    expect(console.log).toHaveBeenLastCalledWith("7 x 9 = 63");
  });
});

describe("Average odd numbers", () => {
  it("should be correct", () => {
    jest.spyOn(window, "prompt").mockReturnValue(5);
    average();
    expect(console.log).toHaveBeenCalledWith(9);

    jest.spyOn(window, "prompt").mockReturnValue(20);
    average();
    expect(console.log).toHaveBeenCalledWith(100);

    jest.spyOn(window, "prompt").mockReturnValue("19");
    average();
    expect(console.log).toHaveBeenCalledWith(100);
  });

  it("should be false", () => {
    jest.spyOn(window, "prompt").mockReturnValue("five");
    average();
    expect(console.log).toHaveBeenCalledWith(false);
  });

  it("should be incorrect number", () => {
    jest.spyOn(window, "prompt").mockReturnValue("-11");
    average();
    expect(console.log).toHaveBeenCalledWith("Number must be positive");

    jest.spyOn(window, "prompt").mockReturnValue("0");
    average();
    expect(console.log).toHaveBeenCalledWith("Number must be positive");
  });
});
