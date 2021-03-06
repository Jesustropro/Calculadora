function vaciar() {
  document.getElementById("operacion").innerHTML = "0";
  document.getElementById("resultado").innerHTML = "0";
}

function vaciarLocal() {
  localStorage.removeItem("num1");
  localStorage.removeItem("num2");
  localStorage.removeItem("operacion");
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  return num1 / num2;
}

function casosNumeros(evento) {
  if (localStorage.getItem("num1") === null) {
    localStorage.setItem("num1", evento.target.innerText);
  } else if (localStorage.getItem("num1") === "-") {
    let negativo = localStorage.getItem("num1");
    new1 = negativo + evento.target.innerText;
    localStorage.setItem("num1", new1);
  } else if (
    localStorage.getItem("num1") !== null &&
    localStorage.getItem("operacion") !== null &&
    localStorage.getItem("num2") === null
  ) {
    localStorage.setItem("num2", evento.target.innerText);
  } else if (
    localStorage.getItem("num1") != null &&
    localStorage.getItem("operacion") === null
  ) {
    let uno = localStorage.getItem("num1");
    let tres = uno + evento.target.innerText;
    localStorage.setItem("num1", tres);
  } else if (
    localStorage.getItem("num1") != null &&
    localStorage.getItem("operacion") != null &&
    localStorage.getItem("num2") !== null
  ) {
    let Uno = localStorage.getItem("num2");
    let Tres = Uno + evento.target.innerText;
    localStorage.setItem("num2", Tres);
  }
}

function casosNumerosTeclado(evento) {
  if (localStorage.getItem("num1") === null) {
    localStorage.setItem("num1", evento.key);
  } else if (localStorage.getItem("num1") === "-") {
    let negativo = localStorage.getItem("num1");
    new1 = negativo + evento.key;
    localStorage.setItem("num1", new1);
  } else if (
    localStorage.getItem("num1") !== null &&
    localStorage.getItem("operacion") !== null &&
    localStorage.getItem("num2") === null
  ) {
    localStorage.setItem("num2", evento.key);
  } else if (
    localStorage.getItem("num1") != null &&
    localStorage.getItem("operacion") === null
  ) {
    let uno = localStorage.getItem("num1");
    let tres = uno + evento.key;
    localStorage.setItem("num1", tres);
  } else if (
    localStorage.getItem("num1") != null &&
    localStorage.getItem("operacion") != null &&
    localStorage.getItem("num2") !== null
  ) {
    let Uno = localStorage.getItem("num2");
    let Tres = Uno + evento.key;
    localStorage.setItem("num2", Tres);
  }
}

function casosIgual() {
  if (localStorage.getItem("operacion") == "+") {
    const suma = sumar(
      parseFloat(localStorage.getItem("num1")),
      parseFloat(localStorage.getItem("num2"))
    );
    resultado.innerHTML = suma;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", suma);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "-") {
    const resta = restar(
      parseFloat(localStorage.getItem("num1")),
      parseFloat(localStorage.getItem("num2"))
    );
    resultado.innerHTML = resta;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", resta);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "x") {
    const multiplica = multiplicar(
      parseFloat(localStorage.getItem("num1")),
      parseFloat(localStorage.getItem("num2"))
    );
    resultado.innerHTML = multiplica;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", multiplica);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "/") {
    const divide = dividir(
      parseFloat(localStorage.getItem("num1")),
      parseFloat(localStorage.getItem("num2"))
    );
    resultado.innerHTML = divide;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", divide);
    localStorage.removeItem("operacion");
  }
  localStorage.removeItem("num2");
}

function temaDark() {
  localStorage.setItem("tema", "dark");
  let pantalla = document.getElementById("pantalla");
  pantalla.className = "pantallaDark";
  let calculadora = document.getElementById("calculadora");
  calculadora.className = "dise??oDark";
  let btn = document.querySelectorAll(".btnSoft");
  btn.forEach((button) => {
    button.className = "btnDark punto";
  });
  let navbar = document.getElementById("navbar");
  navbar.className = "navbar navbar-dark bg-dark";
  let body = document.getElementById("body");
  body.className = "";
  let ocultar = document.getElementById("dark");
  ocultar.className = "temaSoft quitar";
  let mostrar = document.getElementById("soft");
  mostrar.className = "temaDark";
  let logo = document.getElementById("temaLogo");
  logo.innerHTML = `          <img
            src="./images/logoDark.png"
            alt=""
            width="40"
            height="50"
            class="d-inline-block align-text-top"
          />
          <h1 class="tituloNav d-inline-block align-text-top">Calculadora</h1>`;
  let scroll = document.getElementById("operacion");
  scroll.className = "scrollDark";
  let scroll2 = document.getElementById("resultado");
  scroll2.className = "scrollDark";
}

function temaSoft() {
  localStorage.setItem("tema", "soft");
  let pantalla = document.getElementById("pantalla");
  pantalla.className = "pantallaSoft";
  let calculadora = document.getElementById("calculadora");
  calculadora.className = "dise??oSoft";
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
  let logo = document.getElementById("temaLogo");
  logo.innerHTML = `          <img
            src="./images/logoSoft.png"
            alt=""
            width="40"
            height="50"
            class="d-inline-block align-text-top"
          />
          <h1 class="tituloNavSoft d-inline-block align-text-top">Calculadora</h1>`;
  let scroll = document.getElementById("operacion");
  scroll.className = "scrollSoft";
  let scroll2 = document.getElementById("resultado");
  scroll2.className = "scrollSoft";
}

function operacionCompleta() {
  return (
    localStorage.getItem("operacion") != null &&
    localStorage.getItem("num1") != null &&
    localStorage.getItem("num2") != null
  );
}
