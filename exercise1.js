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

console.log(/----Ejercicio #1 , ordinary version-------/);

let numberOfcats = 4;

for (let index = 1; index <= numberOfcats; index++) {
  if (index === 3 || index === 6 || index === 9) {
    console.log(`Gato #:${index} 😹`);
  } else {
    console.log(`Gato #:${index}  😺`);
  }
}

console.log(/----Ejercicio #1 , Formal version-------/);

const amountOfcats = 10;

for (let c = 1; c <= amountOfcats; c++) {
  /* encapsulo el mensaje con el numero de gato del ciclo en la variable cats */
  const cats = `Gato #: ${c}`;

  /* si c % 3 = 0, es impar */
  if (c % 3 === 0) {
    /* print joker cats */
    console.log(`${cats} 😹`);
  } else {
    /* print smiley cats */
    console.log(`${cats} 😺`);
  }
}
