let Edad = document.querySelector("#Edad");
let Res = document.querySelector("#respuesta");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (Edad.value > 17) {
    Res.textContent = "es mayor de edad";
    //document.write("es mayor de edad");
  } else {
    Res.textContent = "es menor de edad";
    //document.write("Es menor de edad");
  }
});
