// tema soft
document.getElementById("soft").addEventListener("click", () => {
  let pantalla = document.getElementById("pantalla");
  pantalla.className = "pantallaSoft";
  let calculadora = document.getElementById("calculadora");
  calculadora.className = "diseñoSoft";
  let btn = document.querySelectorAll(".btnDark");
  btn.forEach((button) => {
    button.className = "btnSoft";
  });
  let navbar = document.getElementById("navbar");
  navbar.className = "navbar navbarSoft";
  let body = document.getElementById("body");
  body.className = "bodySoft";
  let ocultar = document.getElementById("soft");
  ocultar.className = "temaDark quitar";
  let mostrar = document.getElementById("dark");
  mostrar.className = "temaSoft";
});
//tema soft
//tema dark
document.getElementById("dark").addEventListener("click", () => {
  let pantalla = document.getElementById("pantalla");
  pantalla.className = "pantallaDark";
  let calculadora = document.getElementById("calculadora");
  calculadora.className = "diseñoDark";
  let btn = document.querySelectorAll(".btnSoft");
  btn.forEach((button) => {
    button.className = "btnDark";
  });
  let navbar = document.getElementById("navbar");
  navbar.className = "navbar navbar-dark bg-dark";
  let body = document.getElementById("body");
  body.className = "";
  let ocultar = document.getElementById("dark");
  ocultar.className = "temaSoft quitar";
  let mostrar = document.getElementById("soft");
  mostrar.className = "temaDark";
});
//tema dark
