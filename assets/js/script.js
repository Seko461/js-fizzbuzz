
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

//     BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
//     a seconda che il valore inserito sia un numero, un fizz,
//     un buzz o un fizzbuzz.Se sei a corto di idee per lo stile,
//         potresti prendere spunto dallo screenshot fornito in consegna.



// Seleziono il contenitore della lista
const cellList = document.querySelector('.cell-list');



for (let i = 1; i <= 100; i++) {
    // console.log(i)
    //creo e manipolo la cella
    let cell = document.createElement('li');
    let markuplistitem = `<li>${i}</li>`
    cell.innerHTML += markuplistitem
    cell.classList.add('cell');

    //Trovo le celle multiplo di 3
    if (i % 3 == 0) {

        // console.log('Fizz');
        let markUpFizz = 'Fizz'
        //manipolo la cella
        cell.innerHTML = markUpFizz
        cell.classList.add('cell-fizz');
    }
    //Trovo le celle multiplo di 5
    else if (i % 5 == 0) {

        // console.log('Buzz');
        let markUpBuzz = 'Buzz'
        //manipolo la cella
        cell.innerHTML = markUpBuzz
        cell.classList.add('cell-buzz');
    }
    //Trovo le celle multiplo di 3 e di 5
    if (i % 3 == 0 && i % 5 == 0) {

        // console.log('FizzBuzz');
        let markUpFizz_Buzz = 'FizzBuzz'
        //manipolo la cella
        cell.innerHTML = markUpFizz_Buzz
        cell.classList.add('cell-fizz-buzz');
    }

    // stampo le celle nel DOM 
    cellList.append(cell);
}
