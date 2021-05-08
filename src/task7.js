const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

input.addEventListener("keyup", () => {
  if (input.value.length === 0) {
    btn.style.display = "none";
  } else {
    btn.style.display = "inline";
  }
});

btn.addEventListener("click", () => {
  const texts = document.querySelectorAll(".text");

  if (texts.length > 4) {
    texts[0].remove();
  }

  const p = document.createElement("p");
  p.classList.add("text");
  p.textContent = input.value;

  document.querySelector(".texts").append(p);
});
