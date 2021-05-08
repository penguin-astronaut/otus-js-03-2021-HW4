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
    expect(console.log.mock.calls[0][0]).toBe("7 x 1 = 7");
    expect(console.log.mock.calls[1][0]).toBe("7 x 2 = 14");
    expect(console.log.mock.calls[2][0]).toBe("7 x 3 = 21");
    expect(console.log.mock.calls[3][0]).toBe("7 x 4 = 28");
    expect(console.log.mock.calls[4][0]).toBe("7 x 5 = 35");
    expect(console.log.mock.calls[5][0]).toBe("7 x 6 = 42");
    expect(console.log.mock.calls[6][0]).toBe("7 x 7 = 49");
    expect(console.log.mock.calls[7][0]).toBe("7 x 8 = 56");
    expect(console.log.mock.calls[8][0]).toBe("7 x 9 = 63");
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
    jest.spyOn(window, "prompt").mockReturnValue(-11);
    average();
    expect(console.log).toHaveBeenCalledWith("Number must be positive");

    jest.spyOn(window, "prompt").mockReturnValue(0);
    average();
    expect(console.log).toHaveBeenCalledWith("Number must be positive");
  });
});
