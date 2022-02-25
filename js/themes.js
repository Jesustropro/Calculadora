// tema soft
document.getElementById("soft").addEventListener("click", () => {
  temaSoft();
});
if (localStorage.getItem("tema") === "soft") {
  temaSoft();
}
//tema soft
//tema dark
document.getElementById("dark").addEventListener("click", () => {
  temaDark();
});
if (localStorage.getItem("tema") === "dark") {
  temaDark();
}
//tema dark
