/*
Consegna:
    1. Dato un array di oggetti letterali con:
        - url dell’immagine
        - titolo
        - descrizione
    2. Creare un carosello come nella foto allegata.
Milestone 0:
    Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
    Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
    Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
    Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
    Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
    Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/

// Creo array immagini da inserire nel DOM successivamente
let slides = [
    `01.webp`,
    `02.webp`,
    `03.webp`,
    `04.webp`,
    `05.webp`
]

// Creo un ciclo per contare gli elementi di slides(array)
for ( i = 0; i < slides.length; i++) {

    document.querySelector(`.slides`).innerHTML += 
    `
    <div class="item">
        <img src="./assets/img/${slides[i]}">
    </div>
    `
    console.log(slides[i])
}

// Indice
let active = 0

// Seleziono il primo elemento e aggiungo la classe "active"
document.getElementsByClassName("item")[active].classList.add("active");

// console.log(collection)

// Creo variabili che mi selezionano i div dentro il DOM che userò poi per le funzioni
let prev = document.getElementById("prev");

let next = document.getElementById("next");

console.log(prev,next)

// Scriviamo la funzione al click del button next per scorrere le immagini
next.addEventListener(`click`, function() {

    if ( active == slides.length - 1 ) {

        active = 0;
    } else {
        
        active++
    }

    console.log(slides.length-1)

    document.querySelector(".item.active").classList.remove("active");    
    
    document.getElementsByClassName("item")[active].classList.add("active");
})

// Scriviamo la funzione al click del button prev per scorrere le immagini
prev.addEventListener(`click`, function() {

    if ( active == 0 ) {

        active = slides.length - 1;
    } else {

        active--
    }
    
    document.querySelector(".item.active").classList.remove("active");    

    document.getElementsByClassName("item")[active].classList.add("active");
})