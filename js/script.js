vaciar();
vaciarLocal();
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

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

    //Numeros
    if (evento.target.innerText == "0") {
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
    //
    //Operadores
    if (evento.target.innerText == "=") {
      casosIgual();
    }
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

    //
    if (
      localStorage.getItem("operacion") === "-" &&
      localStorage.getItem("num1") == null
    ) {
      localStorage.setItem("num1", "-");
      localStorage.removeItem("operacion");
    }
    //Operadores
  });
});

// string.slice(0, string.length - 1);

/* let string = "jesus"
undefined
string.pop()
VM15049:1 Uncaught TypeError: string.pop is not a function
    at <anonymous>:1:8
(anonymous) @ VM15049:1
string.lenght - 1 
NaN
string.slice(0, str.length - 1);
VM15134:1 Uncaught ReferenceError: str is not defined
    at <anonymous>:1:17
(anonymous) @ VM15134:1
string.slice(0, string.length - 1);
'jesu'
let op = document.getElementById("operacion")
undefined
let opArray = op.split("")
VM15620:1 Uncaught TypeError: op.split is not a function
    at <anonymous>:1:18
(anonymous) @ VM15620:1
op = op.textContent
'1+←'
let opArray = op.split("")
undefined
opArray
(3) ['1', '+', '←']0: "1"1: "+"2: "←"length: 3[[Prototype]]: Array(0)
opArray[opArray.lenght - 1]
undefined
let last = opArray[opArray.lenght - 1]
undefined
last
undefined
let last = opArray[opArray.length - 1]
undefined
last.includes("+-/x←2")
false
localStorage.getItem("num1").find(last =>  last)
VM16741:1 Uncaught TypeError: localStorage.getItem(...).find is not a function
    at <anonymous>:1:30
(anonymous) @ VM16741:1
let uno = localStorage.getItem("num1")
undefined*/
