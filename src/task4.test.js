import { user, admin } from "./task4";

describe("Copy object", () => {
  it("needle", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12");
    user.setAge();
    expect(user.age).toBe(12);

    jest.spyOn(window, "prompt").mockReturnValue("sdsd");
    user.setAge();
    expect(user.age).toBe(0);

    expect(admin).not.toBe(user);

    expect(admin.role).toBe("admin");
    expect(user.role).toBeUndefined();
  });
});
