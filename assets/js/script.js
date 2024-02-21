
// Scrivi un programma che stampi in console i numeri da 1 a 100,
//     ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
// per i multipli di 5 stampi “Buzz”. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.




// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i % 3 == 0) {

//         console.log('Fizz');
//     }
//     else if (i % 5 == 0) {

//         console.log('Buzz');
//     }
//     if (i % 3 == 0 && i % 5 == 0) {

//         console.log('FizzBuzz');
//     }
// }

// BONUS 1:
// Crea un container nel DOM, aggiungendo(attraverso la funzione append()) 
// un elemento html con il numero o la stringa corretta da mostrare.

const cellList = document.querySelector('.cell-list');
let cell = document.createElement('li');
cellList.append(cell);

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 == 0) {

        console.log('Fizz');
    }
    else if (i % 5 == 0) {

        console.log('Buzz');
    }
    if (i % 3 == 0 && i % 5 == 0) {

        console.log('FizzBuzz');
    }
}

//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
//     a seconda che il valore inserito sia un numero, un fizz,
//     un buzz o un fizzbuzz.Se sei a corto di idee per lo stile,
//         potresti prendere spunto dallo screenshot fornito in consegna.