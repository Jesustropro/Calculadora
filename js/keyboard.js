//teclado pc
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
document.addEventListener("keydown", (evento) => {
  // console.log(evento.key);
  if (document.getElementById("operacion").innerText == "0") {
    operacion.innerHTML = "";
    operacion.innerHTML += evento.key;
  } else if (evento.key === "Enter") {
    operacion.innerHTML += "";
  } else if (evento.keyt == "Backspace") {
    operacion.innerHTML += "";
  } else {
    operacion.innerHTML += evento.key;
  }
  if (evento.key == "0") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "1") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "2") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "3") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "4") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "5") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "6") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "7") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "8") {
    casosNumerosTeclado(evento);
  }
  if (evento.key == "9") {
    casosNumerosTeclado(evento);
  }
  //Numeros
  //
  //Operadores
  if (evento.key == "Enter") {
    casosIgual();
  }
  if (evento.key === "C") {
    vaciar();
    vaciarLocal();
  }
  if (evento.key == "+") {
    if (
      localStorage.getItem("operacion") != null &&
      localStorage.getItem("num1") != null &&
      localStorage.getItem("num2") != null
    ) {
      casosIgual();
    }
    localStorage.setItem("operacion", "+");
  }
  if (evento.key == "-") {
    if (
      localStorage.getItem("operacion") != null &&
      localStorage.getItem("num1") != null &&
      localStorage.getItem("num2") != null
    ) {
      casosIgual();
    }
    localStorage.setItem("operacion", "-");
  }
  if (evento.key == "x") {
    if (
      localStorage.getItem("operacion") != null &&
      localStorage.getItem("num1") != null &&
      localStorage.getItem("num2") != null
    ) {
      casosIgual();
    }
    localStorage.setItem("operacion", "x");
  }
  if (evento.key == "/") {
    if (
      localStorage.getItem("operacion") != null &&
      localStorage.getItem("num1") != null &&
      localStorage.getItem("num2") != null
    ) {
      casosIgual();
    }
    localStorage.setItem("operacion", "/");
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
    let newOp = op.slice(0, op.length - 10);
    operacion.innerHTML = newOp;
    if (operacion.textContent == "") {
      operacion.innerHTML = "0";
    }
  }

  // Scroll
  operacion.scrollTo({
    left: 10000,
  });
  resultado.scrollTo({
    left: 10000,
  });
  //Scroll
});
