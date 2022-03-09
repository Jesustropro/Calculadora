vaciar();
vaciarLocal();
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

let botones = document.querySelectorAll("button");
botones.forEach((botonesCalculadora) => {
  botonesCalculadora.addEventListener("click", (evento) => {
    //casos especiales
    if (evento.target.innerText === "Dark") {
      operacion.innerHTML += "";
    } else if (evento.target.innerText === "Soft") {
      operacion.innerHTML += "";
    } else if (evento.target.innerText == "←") {
      operacion.innerHTML += "";
    } else if (document.getElementById("operacion").innerText == "0") {
      operacion.innerHTML = "";
      operacion.innerHTML += evento.target.innerText;
    } else if (evento.target.innerText === "=") {
      operacion.innerHTML += "";
    } else {
      operacion.innerHTML += evento.target.innerText;
    }
    if (
      localStorage.getItem("operacion") === "-" &&
      localStorage.getItem("num1") == null
    ) {
      localStorage.setItem("num1", "-");
      localStorage.removeItem("operacion");
    }
    //Casos especiales
    const operadores = ["+", "-", "x", "/", "=", "C", "."];
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //Numeros
    if (numeros.includes(evento.target.innerText)) {
      casosNumeros(evento);
    }
    //Numeros
    //
    //Operadores
    if (operadores.includes(evento.target.innerText)) {
      if (evento.target.innerText == "=") {
        casosIgual();
      }
      if (evento.target.innerText === ".") {
        if (localStorage.getItem("operacion") === null) {
          n1 = localStorage.getItem("num1");
          nw1 = n1 + evento.target.innerText;
          localStorage.setItem("num1", nw1);
        } else if (localStorage.getItem("operacion") !== null) {
          n2 = localStorage.getItem("num2");
          nw2 = n2 + evento.target.innerText;
          localStorage.setItem("num2", nw2);
        }
      } else {
        if (operacionCompleta()) {
          casosIgual();
        }
        localStorage.setItem("operacion", evento.target.innerText);
      }
    }
    if (evento.target.innerText === "C") {
      vaciar();
      vaciarLocal();
    }
    if (evento.target.innerText == "←") {
      let op = operacion.textContent;
      let opArray = op.split("");
      let last = opArray[opArray.length - 1];
      if (
        localStorage.getItem("num1") != null &&
        localStorage.getItem("operacion") === null
      ) {
        let numero1 = localStorage.getItem("num1");
        let nmArray = numero1.split("");
        let nmlast = nmArray[nmArray.length - 1];
        if (last == nmlast) {
          let nwm = numero1.slice(0, numero1.length - 1);
          if (nwm == "") {
            localStorage.removeItem("num1");
          } else {
            localStorage.setItem("num1", nwm);
          }
        }
      }
      if (
        localStorage.getItem("num1") != null &&
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num2") == null
      ) {
        let ope = localStorage.getItem("operacion");
        let nmArray = ope.split("");
        let nmlast = nmArray[nmArray.length - 1];
        if (last == nmlast) {
          let nwm = ope.slice(0, ope.length - 1);
          if (nwm == "") {
            localStorage.removeItem("operacion");
          } else {
            localStorage.setItem("operacion", nwm);
          }
        }
      }
      if (
        localStorage.getItem("num1") != null &&
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num2") != null
      ) {
        let numero2 = localStorage.getItem("num2");
        let nmArray = numero2.split("");
        let nmlast = nmArray[nmArray.length - 1];
        if (last == nmlast) {
          let nwm = numero2.slice(0, numero2.length - 1);
          if (nwm == "") {
            localStorage.removeItem("num2");
          } else {
            localStorage.setItem("num2", nwm);
          }
        }
      }
      let newOp = op.slice(0, op.length - 1);
      operacion.innerHTML = newOp;
      if (operacion.textContent == "") {
        operacion.innerHTML = "0";
      }
    }
    //Operadores
    //
    // Scroll
    operacion.scrollTo({
      left: 10000,
    });
    resultado.scrollTo({
      left: 10000,
    });
    //Scroll
  });
});
