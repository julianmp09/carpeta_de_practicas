// Aprenderemos a utilizar el IF y else para entender mejor la forma en la que nuestro programa puede desarrollarse.

/* 
    Los tipo boolean son valores que solo entrenga true o false
    Ejemplo:
    boolean(0) => "false"
    boolean(1) => "true"
    boolean(-5) => "true"
    boolean("string") => "true"
    boolean("") => false
*/

/*  
    Estructura de la condiciona IF

    if(condicion o valor true/false){
        El codigo que esta aca adentro se ejecutara cuando el valor o la condicion sea verdadero.
    }

    Estructura del if else
    if(condicion o valor){
        El codigo que esta aca adentro se ejecutara cuando el valor o la condicion sea verdadero (true).
    } else {
        El codigo que esta aca adentro se ejecutara cuando el valor o la condicion sea false.
        
    }

*/

// let respuesta = prompt("Terminaste la tarea? ");

// if (respuesta === "si"){
//     alert("Puedes salir a jugar");
// } else{
//     alert("No puedes salir a jugar");
// }

/* 
    Estructura de if else if

    if(condicion1){
        codigo a ejecutar cuando es verdadera
    } else if (condicion2){
        codigo a ejecutar cuando la codicion2 es verdadera
    } else{
        codigo a ejecutar cuando ninguna de las condiciones es verdadera
    }
*/

// let edad = Number(prompt("Ingrese su edad:"));

// if (edad < 14) {
//     alert("No podes entrar a la fiesta")
// } else if (edad < 18){
//     alert("Podes entrar a la fiesta con un adulto responsable");
// } else {
//     alert("Puedes entrar a la fiesta");
// }

/* 
    Condiciones:
    != significa es diferente
    ! cambia el valor de un elemento
    valor1 &&(condicional AND) valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso
    valor1 ||(condicional OR) valor2 es verdadero cuando al menos uno de los valores es verdadero, en caso contrario es falso
*/

// Crea un programa que le pregunte al usuario cual es su anime preferido si escribe naruto responde que a ti tambien, si escribe dragon ball responde que tu personaje favorito es vegeta y que te gusta si es pokemon responde que te gusta la temporada de diamante y perla. Sino es ninguna de estas, responde ese anime no me gusta.

/* 
const nombreAnime = prompt("¿Cual es tu anime favorito? ").toLowerCase();

if (nombreAnime === "naruto") {
    alert("Me gusta naruto");
} else if (nombreAnime === "dragon ball"){
    alert("Me gusta dragon ball y mi personaje favorito es vegeta");
} else if (nombreAnime === "pokemon"){
    alert("Me gusta pokemon en especial la temporada de sinoh")
} else {
    alert("No me gusta ese anime");
} */

/* 
    Utiliza las siguientes condiciones AND OR O NOT para crear tu programa. 

    Crea un programa donde le pregunte al usuario cual es su pokemon favorito si el pokemon del usurio es squirtle o charmander responde que a escogido uno de los mejores pokemones de la region de canto. Si es un pokemon legendario y es de la region de jotho responde que a ti te gusta ese pokemon porque es una de tus regiones favoritas. Sino es ninguna de estas opciones responde que a escogido a un buen pokemon.
*/ 

const pokemonFavorito = prompt("Cual es tu pokemon favorito?").toLowerCase();

//Creamos un ARRY que contenga los pokemones legenadarios de jotho
const pokemonLengadario = ["entei", "raiku", "suicune", "Ho-oh", "lugia", "celebi"];

const regionPokemon = "jotho";

if (pokemonFavorito === "squirtle" || pokemonFavorito === "charmander") {
    alert("Haz escogido a uno de los mejores pokemons de Kanto.");
} else if (pokemonLengadario.includes(pokemonFavorito)  && regionPokemon === "jotho") {
    // En la comparación pokemonLegendario.includes(pokemonFavorito), utilizamos el método includes() para verificar si el Pokémon favorito está en la lista de Pokémon legendarios.
    alert("Me gusta ese pokemon legendario de la region de jotho");
} else{
    alert("Haz escogio a un buen pokemon");
}