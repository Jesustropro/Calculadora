//teclado pc

document.addEventListener("keydown", (evento) => {
  const operadores = ["+", "-", "*", "x", "/", "Enter", "Escape", "."];
  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const teclasPermitidas = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "x",
    "/",
    "Enter",
    "Escape",
    ".",
    "Backspace",
  ];
  if (teclasPermitidas.includes(evento.key)) {
    //casos especiales
    if (evento.key == "Backspace") {
      operacion.innerHTML += "";
    } else if (document.getElementById("operacion").innerText == "0") {
      operacion.innerHTML = "";
      operacion.innerHTML += evento.key;
    } else if (evento.key === "Enter") {
      operacion.innerHTML += "";
    } else {
      operacion.innerHTML += evento.key;
    }
    if (
      localStorage.getItem("operacion") === "-" &&
      localStorage.getItem("num1") == null
    ) {
      localStorage.setItem("num1", "-");
      localStorage.removeItem("operacion");
    }

    //casos especiales
    //
    //Numeros
    if (numeros.includes(evento.key)) {
      casosNumerosTeclado(evento);
    }
    //Numeros
    //
    //Operadores
    if (operadores.includes(evento.key)) {
      if (evento.key == "Enter") {
        casosIgual();
      }
      if (evento.key === "Escape") {
        vaciar();
        vaciarLocal();
      }
      if (evento.key === ".") {
        if (localStorage.getItem("operacion") === null) {
          n1 = localStorage.getItem("num1");
          nw1 = n1 + evento.key;
          localStorage.setItem("num1", nw1);
        } else if (localStorage.getItem("operacion") !== null) {
          n2 = localStorage.getItem("num2");
          nw2 = n2 + evento.key;
          localStorage.setItem("num2", nw2);
        }
      } else if (evento.key == "x" || evento.key == "*") {
        casosIgual;
        localStorage.setItem("operacion", "x");
      } else {
        if (operacionCompleta()) {
          casosIgual();
        }
        localStorage.setItem("operacion", evento.key);
      }
    }
    if (evento.key == "Backspace") {
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
  }
});
