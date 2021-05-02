const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});
afterEach(() => {
  console.log = originalConsoleLog;
});

describe("Console sum and product two numbers", () => {
  it("should correct values", () => {
    // log(3, 14);
    expect(console.log).toHaveBeenCalledWith(3 + 14, 3 * 14);

    // log(-2, 3);
    expect(console.log).toHaveBeenCalledWith(-2 + 3, -2 * 3);
  });

  it("should be false", () => {
    // log(3, "14");
    expect(console.log).toHaveBeenCalledWith(false);

    // log("sdfsdf", "23");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("Sum of length two strings", () => {
  it("should correct values", () => {
    // sumLengthString("wer", "df");
    expect(console.log).toHaveBeenCalledWith(5);

    // sumLengthString("rertt", "dff");
    expect(console.log).toHaveBeenCalledWith(8);
  });

  it("should be false", () => {
    // sumLengthString(234234, "14");
    expect(console.log).toHaveBeenCalledWith(false);

    // sumLengthString([1, 2, 3], "23");
    expect(console.log).toHaveBeenCalledWith(false);
  });
});

describe("Sum digit of number", () => {
  it("should be ok", () => {
    jest.spyOn(window, "prompt").mockReturnValue(123);
    // sumDigitNumber();
    expect(console.log).toHaveBeenCalledWith(6);

    jest.spyOn(window, "prompt").mockReturnValue(999);
    // sumDigitNumber();
    expect(console.log).toHaveBeenCalledWith(27);
  });

  it("should be false", () => {
    jest.spyOn(window, "prompt").mockReturnValue("23423");
    // sumDigitNumber();
    expect(console.log).toHaveBeenCalledWith(false);

    jest.spyOn(window, "prompt").mockReturnValue("");
    // sumDigitNumber();
    expect(console.log).toHaveBeenCalledWith({ a: 1, b: 2 });
  });
});
