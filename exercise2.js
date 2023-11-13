/* ** EJERCICIO 2: **

Crear 2 variables con valores numéricos libres:
var cantidadDeGatos = 5;
var cantidadDePasos = 3;
A partir de esas 2 variables, la consola debe mostrar lo siguiente:
```
Gato #1: 🐈 🐾🐾🐾
Gato #2: 🐈 🐾🐾🐾
Gato #3: 🐈 🐾🐾🐾
Gato #4: 🐈 🐾🐾🐾
Gato #5: 🐈 🐾🐾🐾 */

console.log(/----Ejercicio #2-------/);

const numberOfcats = 10; /* cantidad de gatos */

const catPaws = 4; /* patas de gato */

for (let nc = 1; nc <= numberOfcats; nc++) {
  /* cats variable que toma el mensaje en string */
  const cats = `Gato #:`;
  /* catsAmount, variable que toma mensaje de arriba concatenado con el numero de gatos del ciclo for y el emoji gato*/
  const catsAmount = `${cats}${nc} 🐈`;

  /* fuera del ciclo for interno se crea variable llamada catsAndpaws que toma a los gatos con sus patas, esta toma el valor de catsAmount , porque en base a 
  catsAmount vamos a concatenar a las patitas de gato */
  let catsAndpaws = catsAmount;
  /* esta variable se va a ir redefiniendo a lo largo del ciclo for interno por eso tengo que usar let */

  /* For interno que cuenta las patas de gato */
  for (let np = 0; np < catPaws; np++) {
    /* catsAndpaws toma su propio valor osea el mensaje con numero de gatos y el emoji gato y ahora le agregamos el emoji de patas que ira rellenando segun
    las patas de gato que tenga la variable catPaws*/
    catsAndpaws = `${catsAndpaws} 🐾`;
  }
  /* Fuera del siglo voy a tener todos los gatos con patas */
  console.log(catsAndpaws);
  /* print all cats with their paws */
}
