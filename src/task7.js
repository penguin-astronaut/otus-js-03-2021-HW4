export function templateInit() {
  const div = document.createElement("div");
  div.classList.add("app");

  document.body.prepend(div);

  document.body.querySelector(".app").innerHTML =
    '<div class="form">' +
    '  <input type="text" placeholder="input text" class="input">' +
    '  <button class="btn" style="display: none;">add</button>' +
    "</div>" +
    '<div class="texts">' +
    '  <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio sed voluptas totam accusantium. Delectus eveniet adipisci recusandae, sit quidem atque temporibus a harum nisi nam doloremque voluptate, soluta ea?</p>' +
    '  <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quidem voluptatum incidunt, esse numquam adipisci consectetur quos odit consequatur voluptate excepturi aliquid earum modi dolor, culpa obcaecati, voluptates aspernatur in.</p>' +
    '  <p class="text">no lorem</p>' +
    "</div>";

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
}
