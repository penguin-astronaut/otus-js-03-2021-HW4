import { getDayByDate, minutsOfDay, dateDifference } from "./task8";

describe("getDayByDate", () => {
  it("should be ok", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10.05.2021");
    expect(getDayByDate()).toBe("Понедельник");

    jest.spyOn(window, "prompt").mockReturnValue("07.01.1996");
    expect(getDayByDate()).toBe("Воскресенье");

    jest.spyOn(window, "prompt").mockReturnValue("23.10.2014");
    expect(getDayByDate()).toBe("Четверг");
  });

  it("shuold be Incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("10-05-2021");
    expect(getDayByDate()).toBe("Incorrect date");

    jest.spyOn(window, "prompt").mockReturnValue("10.05.2021asdas");
    expect(getDayByDate()).toBe("Incorrect date");

    jest.spyOn(window, "prompt").mockReturnValue("test");
    expect(getDayByDate()).toBe("Incorrect date");
  });

  it("shuold be Incorrect month or day", () => {
    jest.spyOn(window, "prompt").mockReturnValue("35.12.2021");
    expect(getDayByDate()).toBe("Incorrect month or day");

    jest.spyOn(window, "prompt").mockReturnValue("05.45.3000");
    expect(getDayByDate()).toBe("Incorrect month or day");
  });
});

describe("minutsOfDay", () => {
  [
    [1620432000000, 1620433200000, 20],
    [1010448000000, 1010530740000, 1379],
    [2620080000000, 2620119310000, 656],
  ].forEach((item) => {
    const [dateStart, dateNow, result] = item;
    it("check it", () => {
      jest
        .spyOn(Date.prototype, "getTime")
        .mockImplementationOnce(() => dateStart);
      jest.spyOn(Date, "now").mockImplementationOnce(() => dateNow);

      expect(minutsOfDay()).toBe(result);
    });
  });
});

describe("dateDifference", () => {
  it("should be ok", () => {
    expect(dateDifference("20.04.1991", "20.04.1989")).toBe(
      "first user is younger"
    );
    expect(dateDifference("12.10.2001", "11.10.2001")).toBe(
      "first user is younger"
    );
    expect(dateDifference("20.04.1991", "23.04.2012")).toBe(
      "second user is younger"
    );
    expect(dateDifference("10.10.2001", "01.10.2002")).toBe(
      "second user is younger"
    );
  });

  it("shuold be Incorrect date", () => {
    expect(dateDifference("20-04-1991", "20.04.1989")).toBe("Incorrect dates");
    expect(dateDifference("20.04.1991", "20/04/1989")).toBe("Incorrect dates");
  });

  it("shuold be Incorrect month or day", () => {
    expect(dateDifference("20.45.1991", "20.04.1989")).toBe(
      "Incorrect month or day"
    );
    expect(dateDifference("60.10.2001", "51.10.2001")).toBe(
      "Incorrect month or day"
    );
  });
});
