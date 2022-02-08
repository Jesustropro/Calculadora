function vaciar() {
  document.getElementById("operacion").innerHTML = "0";
  document.getElementById("resultado").innerHTML = "0";
}
vaciar();

document.getElementById("btnLimpiar").addEventListener("click", vaciar);
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

document.getElementById("calculadora").addEventListener("click", (evento) => {
  console.log(evento.target.innerText);
});
