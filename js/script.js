vaciarLocal();
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
//let numero1 = sessionStorage.getItem("primerNumero");
//let numero2 = sessionStorage.getItem("segundoNumero");

let botones = document.querySelectorAll("button");
botones.forEach((botonesCalculadora) => {
  botonesCalculadora.addEventListener("click", (evento) => {
    if (evento.target.innerText === "Dark") {
      operacion.innerHTML += "";
    } else if (evento.target.innerText === "Soft") {
      operacion.innerHTML += "";
    } else if (document.getElementById("operacion").innerText == "0") {
      operacion.innerHTML = "";
      operacion.innerHTML += evento.target.innerText;
    } else if (evento.target.innerText === "=") {
      operacion.innerHTML += "";
    } else if (evento.target.innerText == "←") {
      operacion.innerHTML += "";
    } else {
      operacion.innerHTML += evento.target.innerText;
    }

    if (evento.target.innerText == "0") {
      //Numeros

      casosNumeros(evento);
    }
    if (evento.target.innerText == "1") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "2") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "3") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "4") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "5") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "6") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "7") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "8") {
      casosNumeros(evento);
    }
    if (evento.target.innerText == "9") {
      casosNumeros(evento);
    }

    //Numeros
    //Operadores
    if (evento.target.innerText === "C") {
      vaciar();
      vaciarLocal();
    }
    if (evento.target.innerText == "+") {
      if (
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num1") != null &&
        localStorage.getItem("num2") != null
      ) {
        casosIgual();
      }
      localStorage.setItem("operacion", "+");
    }
    if (evento.target.innerText == "-") {
      if (
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num1") != null &&
        localStorage.getItem("num2") != null
      ) {
        casosIgual();
      }
      localStorage.setItem("operacion", "-");
    }
    if (evento.target.innerText == "x") {
      if (
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num1") != null &&
        localStorage.getItem("num2") != null
      ) {
        casosIgual();
      }
      localStorage.setItem("operacion", "x");
    }
    if (evento.target.innerText == "/") {
      if (
        localStorage.getItem("operacion") != null &&
        localStorage.getItem("num1") != null &&
        localStorage.getItem("num2") != null
      ) {
        casosIgual();
      }
      localStorage.setItem("operacion", "/");
    }
    if (evento.target.innerText == "←") {
      let op = operacion.textContent;

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      let newOp = op.slice(0, op.length - 1);
      operacion.innerHTML = newOp;
      if (operacion.textContent == "") {
        operacion.innerHTML = "0";
      }
    }
    //Operadores
    //Operaciones
    if (evento.target.innerText == "=") {
      casosIgual();
    }
    //operaciones
  });
});
