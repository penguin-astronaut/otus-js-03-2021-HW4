import { sumAndMultiply, sumDigitOfNumber, sumOfLengthStrings } from "./task1";

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});
afterEach(() => {
  console.log = originalConsoleLog;
});

describe("Console sum and product two numbers", () => {
  it("should correct values", () => {
    sumAndMultiply(3, 14);
    expect(console.log).toHaveBeenCalledWith(3 + 14, 3 * 14);

    sumAndMultiply(-2, 3);
    expect(console.log).toHaveBeenCalledWith(-2 + 3, -2 * 3);
  });

  it("should be false", () => {
    sumAndMultiply(3, "14");
    expect(console.log).toHaveBeenCalledWith(false);

    sumAndMultiply("sdfsdf", "23");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("Sum of length two strings", () => {
  it("should correct values", () => {
    sumOfLengthStrings("wer", "df");
    expect(console.log).toHaveBeenCalledWith(5);

    sumOfLengthStrings("rertt", "dff");
    expect(console.log).toHaveBeenCalledWith(8);
  });

  it("should be false", () => {
    sumOfLengthStrings(234234, "14");
    expect(console.log).toHaveBeenCalledWith(false);

    sumOfLengthStrings([1, 2, 3], "23");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("Sum digit of number", () => {
  it("should be ok", () => {
    jest.spyOn(window, "prompt").mockReturnValue(123);
    sumDigitOfNumber();
    expect(console.log).toHaveBeenCalledWith(6);

    jest.spyOn(window, "prompt").mockReturnValue(999);
    sumDigitOfNumber();
    expect(console.log).toHaveBeenCalledWith(27);
  });

  it("should be false", () => {
    jest.spyOn(window, "prompt").mockReturnValue("23423");
    sumDigitOfNumber();
    expect(console.log).toHaveBeenCalledWith(false);

    jest.spyOn(window, "prompt").mockReturnValue(1233);
    sumDigitOfNumber();
    expect(console.log).toHaveBeenCalledWith(false);

    jest.spyOn(window, "prompt").mockReturnValue({ a: 123, b: "sdfds" });
    sumDigitOfNumber();
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
