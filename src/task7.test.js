import { templateInit } from "./task7";

describe("DOM test", () => {
  templateInit();

  it("check temaplate", () => {
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const textsContainer = document.querySelector(".texts");
    const texts = document.querySelectorAll(".text");

    expect(btn).toBeTruthy();
    expect(input).toBeTruthy();
    expect(textsContainer).toBeTruthy();
    expect(texts).toBeTruthy();
    expect(texts.length).toBe(3);
  });

  it("show & hide button", () => {
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");

    input.value = "some text";
    input.dispatchEvent(new KeyboardEvent("keyup"));

    expect(btn.style.display).toBe("inline");

    input.value = "";
    input.dispatchEvent(new KeyboardEvent("keyup"));

    expect(btn.style.display).toBe("none");
  });

  it("add new item", () => {
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");

    input.value = "some text";
    input.dispatchEvent(new KeyboardEvent("keyup"));
    btn.click();

    expect(document.querySelectorAll(".text").length).toBe(4);
    expect(document.querySelectorAll(".text")[3].innerHTML).toBe("some text");
    document.querySelectorAll(".text")[3].remove();
  });

  it('max "p" count', () => {
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");

    input.value = "some text 1";
    input.dispatchEvent(new KeyboardEvent("keyup"));
    btn.click();

    input.value = "some text 2";
    input.dispatchEvent(new KeyboardEvent("keyup"));
    btn.click();

    input.value = "some text 3";
    input.dispatchEvent(new KeyboardEvent("keyup"));
    btn.click();

    input.value = "some text 4";
    input.dispatchEvent(new KeyboardEvent("keyup"));
    btn.click();

    expect(document.querySelectorAll(".text").length).toBe(5);
    expect(document.querySelectorAll(".text")[0] === "no lorem");
    expect(document.querySelectorAll(".text")[4] === "some text 4");
  });
});
