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
function vaciar() {
  document.getElementById("operacion").innerHTML = "0";
  document.getElementById("resultado").innerHTML = "0";
}
vaciar();

function casosNumeros(evento) {
  if (localStorage.getItem("num1") === null) {
    localStorage.setItem("num1", evento.target.innerText);
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

function casosIgual() {
  if (localStorage.getItem("operacion") == "+") {
    const suma = sumar(
      parseInt(localStorage.getItem("num1")),
      parseInt(localStorage.getItem("num2"))
    );
    resultado.innerHTML = suma;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", suma);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "-") {
    const resta = restar(
      parseInt(localStorage.getItem("num1")),
      parseInt(localStorage.getItem("num2"))
    );
    resultado.innerHTML = resta;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", resta);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "x") {
    const multiplica = multiplicar(
      parseInt(localStorage.getItem("num1")),
      parseInt(localStorage.getItem("num2"))
    );
    resultado.innerHTML = multiplica;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", multiplica);
    localStorage.removeItem("operacion");
  } else if (localStorage.getItem("operacion") == "/") {
    const divide = dividir(
      parseInt(localStorage.getItem("num1")),
      parseInt(localStorage.getItem("num2"))
    );
    resultado.innerHTML = divide;
    localStorage.removeItem("num1");
    localStorage.setItem("num1", divide);
    localStorage.removeItem("operacion");
  }
  localStorage.removeItem("num2");
}
