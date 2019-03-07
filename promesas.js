let promesa = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Vamos a seguir trabajando");
    // resolve("Todo esta excelente");
    reject("Hay problema con la conexion");
  }, 1300);
});

promesa.then((resolve) => {
  console.log(resolve)
}, (error) => {
  console.error(error)
})