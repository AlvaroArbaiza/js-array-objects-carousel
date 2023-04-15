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

images.forEach( (element, index) => {

    // Destrutturiamo e otteniamo le chiavi (image, tittle, text)
    const {image, title, text} = element

    // Seleziono elementi "slides" e "thumbnails"
    const slides = document.getElementById("slides");
    const thumbnails = document.getElementById("thumbnails");

    // SE INDEX = 0 ovvero nel primo oggetto inserisce "active" a tutto
    if ( index === 0) {
        
        // Inserimento dati nel DOM
        slides.innerHTML += 
        `
        <div class="item active">
            <img src="./assets/img/${image}">
            
            <div class="text">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `;    
    
        thumbnails.innerHTML += 
        `
        <div class="thumb active_thumb col p-0">
    
            <img src="./assets/img/${image}">
        </div>
        `;
        
    // ALRIMENTI continua a inserire senza "active" 
    } else {

        slides.innerHTML += 
        `
        <div class="item">
            <img src="./assets/img/${image}">
            
            <div class="text">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
        </div>
        `;
    
        thumbnails.innerHTML += 
        `
        <div class="thumb col p-0">
    
            <img src="./assets/img/${image}">
        </div>
        `;
    }

})

// Indice
let active = 0

// Creo variabili che mi selezionano i div dentro il DOM che userò poi per le funzioni
let prev = document.getElementById("prev");

let next = document.getElementById("next");

// Scriviamo la funzione al click del button next per scorrere le immagini in avanti e arrivata all'ultima immagine torniamo a quella di partenza
next.addEventListener(`click`, nextSlide);

function nextSlide() {

    // Quando active è uguale al valore dell'ultimo elemento di images diventa "0" tornando alla prima immagine, altrimenti continua a cambiare immagine salendo di valore(++)
    if ( active == images.length - 1 ) {

        active = 0;
    } else {
        
        active++
    }

    // Seleziono l'elemento con classi ".item.active" e rimuovo la classe "active"
    document.querySelector(".item.active").classList.remove("active");   
    // Seleziono l'elemento con classe "item" con posizione [active] e aggiungo la classe "active"
    document.getElementsByClassName("item")[active].classList.add("active");

    // Seleziono l'elemento con classi ".thumb.active_thumb" e rimuovo la classe "active_thumb"
    document.querySelector(".thumb.active_thumb").classList.remove("active_thumb");
    // Seleziono l'elemento con classe "thumb" con posizione [active] e aggiungo la classe "active_thumb"
    document.getElementsByClassName("thumb")[active].classList.add("active_thumb");

}

// Scriviamo la funzione al click del button prev per scorrere le immagini all'indietro e arrivata alla prima immagine torniamo all'ultima
prev.addEventListener(`click`, prevSlide);

function prevSlide() {

    // Quando active è uguale al valore del primo elemento di images( active = 0 ), diventa uguale al valore dell'ultimo elemento di images, andando all'ultima immagine, altrimenti continua a cambiare immagine scendendo di valore(--)
    if ( active == 0 ) {

        active = images.length - 1;
    } else {

        active--
    }
    
    // Seleziono l'elemento con classi ".item.active" e rimuovo la classe "active"
    document.querySelector(".item.active").classList.remove("active");    
    // Seleziono l'elemento con classe "item" con posizione [active] e aggiungo la classe "active"
    document.getElementsByClassName("item")[active].classList.add("active");

    // Seleziono l'elemento con classi ".thumb.active_thumb" e rimuovo la classe "active_thumb"
    document.querySelector(".thumb.active_thumb").classList.remove("active_thumb");
    // Seleziono l'elemento con classe "thumb" con posizione [active] e aggiungo la classe "active_thumb"
    document.getElementsByClassName("thumb")[active].classList.add("active_thumb");
}

// Variabile che seleziona "timebtn_play"
let playSlides = document.querySelector(".timebtn_play");
// Variabile che seleziona "timebtn_stop"
let stopSlides = document.querySelector(".timebtn_stop");
// Variabile che seleziona "timebtn_prev"
let prevSlides = document.querySelector(".timebtn_prev");

// setInterval fisso per far scorrere le immagini di default
let interval = setInterval(nextSlide, 3000);

// Funzione al click per far partire lo scorrimento immagini
playSlides.addEventListener(`click`, function() {
    
    interval = setInterval(nextSlide, 3000);
})

// Funzione al click per far partire lo scorrimento immagini inversamente
prevSlides.addEventListener(`click`, function() {
    
    interval = setInterval(prevSlide, 3000);
})

// Funzione che termina lo scorrimento di immagini al click
stopSlides.addEventListener(`click`, function() {
    
    clearInterval(interval);
})