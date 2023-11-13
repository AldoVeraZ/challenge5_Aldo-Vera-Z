/* ** EJERCICIO 3 **
Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
```
Gato #1: 🐈 🐾🐾🐾🐾
Gato #2: 🐈‍⬛ 🐾🐾🐾🐾
Gato #3: 🐈 🐾🐾🐾🐾
Gato #4: 🐈‍⬛ 🐾🐾🐾🐾
Gato #5: 🐈 🐾🐾🐾🐾
Gato #6: 🐈‍⬛ 🐾🐾🐾🐾
Gato #7: 🐈 🐾🐾🐾🐾
Gato #8: 🐈‍⬛ 🐾🐾🐾🐾
Gato #9: 🐈 🐾🐾🐾🐾
Gato #10: 🐈‍⬛ 🐾🐾🐾🐾
``` */

console.log(/----Ejercicio #3-------/);

const numberOfcats = 10; /* amount of cats */

const catPaws = 4; /* cat's paws */

for (let nc = 1; nc <= numberOfcats; nc++) {
  /* cats variable takes the string message*/
  const cats = `Gato #:`;

  let catsAmount = `${cats}${nc}`;
  if (nc % 2 === 0) {
    /* if number of cats index modular 2 result exactly in 0, number of cats index is pair, so print the black cat*/
    catsAmount = `${cats}${nc} 🐈‍⬛`;
  } else {
    /* catsAmount, variable takes the above message concatened with number of cats from de bucle for, plus emoji cat */
    catsAmount = `${cats}${nc} 🐈`;
  }

  /* Out of inner bucle for, it's create a variable called catsAndpaws that takes cats and their paws, this takes the value of catsAmount because in base 
   a catsAmount we gonna concatenate the emoji cat's paws  */
  let catsAndpaws = catsAmount;
  /* this variable it's gonna be redefining along the process of inner bucle for , for that reason it's used let */

  /* Inner Bucle For that counts the cat's paws*/
  for (let np = 0; np < catPaws; np++) {
    /* catsAndpaws takes is own value it's means the message of number of cats and the emoji cat and now we add the emoji of paws that will be filled according to
    the catPaws that have the variable catPaws */
    catsAndpaws = `${catsAndpaws} 🐾`;
  }
  /* Our of inner bucle for, it's has all the cats with their paws*/
  console.log(catsAndpaws);
  /* print all cats with their paws */
}
