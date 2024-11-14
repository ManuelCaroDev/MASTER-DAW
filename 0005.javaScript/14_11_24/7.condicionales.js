const heLimpiado = true;
const heEstudiado = false;

//igual que == o estrictamente igual ===   ---   = es solo de asignacion

/* if(heLimpiado === true){
    console.log("Puedo salir a la calle")
} */

//ternario ---> no usar
/* if(heLimpiado && heEstudiado){
    console.log("Puedo salir a la calle")
} else{
    console.log("Estas castigado")
} */

/* heLimpiado && heEstudiado
    ? console.log("hola")
    : console.log("adios");
 */

/* if(heLimpiado){
    console.log("Puedo salir a la calle")
} else{
    console.log("Estas castigado")
} */

/* 
if(heLimpiado || heEstudiado){
    console.log("Puedo salir a la calle")
} else{
    console.log("Estas castigado")
} */

/* if(heLimpiado && heEstudiado){
    console.log("Puedo salir a la calle")
} else{
    console.log("Estas castigado")
} */

/* const age = 20;

if (age > 0 && age < 18) {
  console.log("No puedes entrar sin tus padres");
} else if (age >= 18 && age < 80) {
  console.log("puedes pasar a la pista");
} else if (age >= 80 && age < 120) {
  console.log("puedes pasar a la grada con sofas");
} else {
  console.log("Estas flipado?");
} */

//switch

const pelicula = "The Matrix";

switch (pelicula) {
  case "The Matrix":
    console.log("ES un peliculon");
    break;
  case "Dune":
    console.log("es una pelicula futurista");
    break;
  case "Dracula":
    console.log("peli de vampiros");
    break;
  default:
    console.log("no se que pelicula es esa");
    break;
}

if (pelicula === "The Matrix") {
  console.log("Es un peliculon");
} else if (pelicula === "Dune") {
  console.log("Es una pelicula futurista");
} else if (pelicula === "Dracula") {
  console.log("No se que pelicula es esa");
}
console.log("No se que pelicula es esa");
