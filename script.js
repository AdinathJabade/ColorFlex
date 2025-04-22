let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let color = document.querySelector(".color");
let main = document.querySelector(".hexcontainer");
let Buttons = document.querySelector(".buttons");
let hexval1 = "#ffffff";
let hexval2 = "#ffffff";
handlebutton1 = () => {
  let value1 = "0123456789abcdef";
  let randomval1;
  hexval1 = "#";
  for (let i = 0; i < 6; i++) {
    randomval1 = value1[Math.floor(Math.random() * 16)];
    hexval1 = hexval1 + randomval1;
  }
  button1.innerHTML = `<button class="btn1">${hexval1}</button>`;
  Buttons.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  main.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  color.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  color.innerHTML = ` background-image:linear-gradient(to right,${hexval1},${hexval2})`;
};
handlebutton2 = () => {
  let value2 = "0123456789abcdef";
  let randomval2;
  hexval2 = "#";
  for (let i = 0; i < 6; i++) {
    randomval2 = value2[Math.floor(Math.random() * 16)];
    hexval2 = hexval2 + randomval2;
  }
  button2.innerHTML = `<button class="btn1">${hexval2}</button>`;
  Buttons.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  main.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  color.style.backgroundImage = `linear-gradient(to right,${hexval1},${hexval2}`;
  color.innerHTML = ` background-image:linear-gradient(to right,${hexval1},${hexval2})`;
};

button1.addEventListener("click", () => {
  handlebutton1();
});
button2.addEventListener("click", () => {
  handlebutton2();
});
color.addEventListener("click", () => {
  alert("Your color is copied:");
  navigator.clipboard.writeText(color.innerHTML);
});
