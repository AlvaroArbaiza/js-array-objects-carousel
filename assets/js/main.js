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


// Array objects
const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach( (element) => {

    // Chiave image
    let imageImages = element.image

    // Chiave title
    let titleImages = element.title

    // Chiave text
    let textImages = element.text
1
    // Inserimento dati nel DOM
    document.querySelector(`.slides`).innerHTML += 
    `
    <div class="item">
        <img src="./assets/img/${imageImages}">
        
        <div class="text">
            <h2>${titleImages}</h2>
            <p>${textImages}</p>
        </div>
    </div>
        `
})

// Indice
let active = 0

// Seleziono il primo elemento di classe "item" e aggiungo la classe "active"
document.getElementsByClassName("item")[active].classList.add("active");

// console.log(collection)

// Creo variabili che mi selezionano i div dentro il DOM che userò poi per le funzioni
let prev = document.getElementById("prev");

let next = document.getElementById("next");

console.log(prev,next)

// Scriviamo la funzione al click del button next per scorrere le immagini in avanti e arrivata all'ultima immagine torniamo a quella di partenza
next.addEventListener(`click`, function() {

    // Quando active è uguale al valore dell'ultimo elemento di images diventa "0" tornando alla prima immagine, altrimenti continua a cambiare immagine salendo di valore(++)
    if ( active == images.length - 1 ) {

        active = 0;
    } else {
        
        active++
    }

    console.log(images.length-1)

    // Seleziono l'elemento con classi ".item.active" e rimuovo la classe "active"
    document.querySelector(".item.active").classList.remove("active");    
    
    // Seleziono l'elemento con classe "item" con posizione [active] e aggiungo la classe "active"
    document.getElementsByClassName("item")[active].classList.add("active");
})

// Scriviamo la funzione al click del button prev per scorrere le immagini all'indietro e arrivata alla prima immagine torniamo all'ultima
prev.addEventListener(`click`, function() {

    // Quando active è uguale al valore del primo elemento di images( active = 0 ), diventa uguale al valore dell'ultimo elemento di images, andando all'ultima immagine, altrimenti continua a cambiare immagine scendendo di valore(--)
    if ( active == 0 ) {

        active = slides.length - 1;
    } else {

        active--
    }
    
    // Seleziono l'elemento con classi ".item.active" e rimuovo la classe "active"
    document.querySelector(".item.active").classList.remove("active");    

    // Seleziono l'elemento con classe "item" con posizione [active] e aggiungo la classe "active"
    document.getElementsByClassName("item")[active].classList.add("active");
})

