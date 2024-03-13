// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

console.log('Campominato.');

// Collegare con il bottone start
const startGame = document.getElementById('start-button');

// Ascoltare azione di click su bottone start
startGame.addEventListener('click', function () {
    console.log('Inizio gioco!');

    const gridElement = document.querySelector('.grid');

    const rowSize = 10;
    const numberOfCells = rowSize ** 2;


    // Generare 100 celle all'interno della griglia
    for (let i = 0; i < numberOfCells; i++) {
        const num = 1+ i;

        const cellElement = document.createElement('div');
        cellElement.className = 'cell-10';
        cellElement.innerHTML = num;

        gridElement.append(cellElement);

        // Permettere di cambiare colore alle celle al click
        cellElement.addEventListener('click', function () {
            console.log('Hai selezionato la casella numero', num);

            cellElement.classList.toggle('selected');
        })

    }

});

