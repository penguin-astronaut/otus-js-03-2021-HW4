import { checkDate, checkEmail } from "./task10";

describe("checkDate", () => {
  it("should be valid date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("28.05.2001");
    expect(checkDate()).toBeTruthy();

    jest.spyOn(window, "prompt").mockReturnValue("12/12/1997");
    expect(checkDate()).toBeTruthy();

    jest.spyOn(window, "prompt").mockReturnValue("01-01-1993");
    expect(checkDate()).toBeTruthy();
  });

  it("should be invalid date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("283.05.2001");
    expect(checkDate()).toBeFalsy();

    jest.spyOn(window, "prompt").mockReturnValue("12/123/1997");
    expect(checkDate()).toBeFalsy();

    jest.spyOn(window, "prompt").mockReturnValue("01-01-1993dsfsd");
    expect(checkDate()).toBeFalsy();
    jest.spyOn(window, "prompt").mockReturnValue("dfgdf01-01-1993");
    expect(checkDate()).toBeFalsy();
  });
});

describe("checkEmail", () => {
  it("should be valid email", () => {
    jest.spyOn(window, "prompt").mockReturnValue("test@test.com");
    expect(checkEmail()).toBeTruthy();

    jest.spyOn(window, "prompt").mockReturnValue("тест@тест.рф");
    expect(checkEmail()).toBeTruthy();

    jest.spyOn(window, "prompt").mockReturnValue("email2@mail.ru");
    expect(checkEmail()).toBeTruthy();
  });

  it("should be invalid email", () => {
    jest.spyOn(window, "prompt").mockReturnValue("email@mail.ru!");
    expect(checkEmail()).toBeFalsy();

    jest.spyOn(window, "prompt").mockReturnValue("acvd@sds");
    expect(checkEmail()).toBeFalsy();

    jest.spyOn(window, "prompt").mockReturnValue("почта@");
    expect(checkEmail()).toBeFalsy();

    jest.spyOn(window, "prompt").mockReturnValue("@gmail.com");
    expect(checkEmail()).toBeFalsy();
  });
});
