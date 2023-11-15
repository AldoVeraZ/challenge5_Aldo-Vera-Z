/* ** EJERCICIO 1: **
Crear una variable con un valor numérico libre:
var cantidadDeGatos = 10;
Esto debe generar en la consola lo siguiente:
```
Gato #1: 😺
Gato #2: 😸
Gato #3: 😹
Gato #4: 😺
Gato #5: 😸
Gato #6: 😹
Gato #7: 😺
Gato #8: 😸
Gato #9: 😹
Gato #10: 😺
``` */

const amountOfcats = 10;

for (let i = 1; i <= amountOfcats; i++) {
  const mod = i % 3;
  /* quiero saber en base al resto de la división (divisible por 3) de cada 3 gatos, va a ser que se me va a repetir el ciclo
  al hacer i % 3, me va a decir en q posicion de ese ciclo de 3 voy a estar */

  let cats = `Gato #${i}:`;
  /* Entrega mensaje con el numero de gatos en posicion */

  /* ver que devuelve el modulo en cada vuelta */
  /*  console.log(modulo); */
  /* i en la primera vuelta vale 1, entonces 1 / 3 da 0 si frenamos en el primer numero natural y cuanto sobro? 1 
  segunda vuelta i = 2 , 2 / 3 = 0 no entra ninguna vez, entonces el resto tenemos 2 */
  let emojiCats = cats;
  /* se cera variable emojiCats para mejor comprensión, esta toma el valor del mensaje de gatos con su lugar para despues
  concatenarles los emoji segun el if de abajo */

  if (mod === 1) {
    /* Si el resto o el residuo de la division de index modulo 3 es exactamente 1 mostrar el primer gato */
    emojiCats = cats.concat("😺");
    /* re asigno la variable cats llamandola con su valor respectivo de gato y lugar de gato para concatenarle el emoji */
  } else if (mod === 2) {
    /* Si el resto de la division de index modulo 3 segun el lugar que caiga , da exactamente 2 mostarr el segundo gato */
    emojiCats = cats.concat("😸");
  } else {
    /* Si el resto de la division de index modulo 3 en el lugar que caiga da exactamente 0 es divisible por 3 y mostrar el tercer gato */
    emojiCats = cats.concat("😹");
  }
  console.log(emojiCats);
}
