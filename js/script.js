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
localStorage.clear();
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");
//let numero1 = sessionStorage.getItem("primerNumero");
//let numero2 = sessionStorage.getItem("segundoNumero");

let botones = document.querySelectorAll("button");
botones.forEach((botonesCalculadora) => {
  botonesCalculadora.addEventListener("click", (evento) => {
    if (evento.target.innerText === "dark") {
      operacion.innerHTML += "";
    } else if (evento.target.innerText === "soft") {
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
      localStorage.clear();
    }
    if (evento.target.innerText == "+") {
      localStorage.setItem("operacion", "+");
    }
    if (evento.target.innerText == "-") {
      localStorage.setItem("operacion", "-");
    }
    if (evento.target.innerText == "x") {
      localStorage.setItem("operacion", "x");
    }
    if (evento.target.innerText == "/") {
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
    //operaciones
    document.addEventListener("keydown", (event) => {
      const keyName = event.key;

      if (event.key === "1") {
        console.log(keyName);
        operacion.innerText += keyName;
        // casosNumeros(evento, event.key);
      }
    });
  });
});
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
});
//tema dark

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
(3) ['1', '+', '←']0: "1"1: "+"2: "←"length: 3[[Prototype]]: Array(0)
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
