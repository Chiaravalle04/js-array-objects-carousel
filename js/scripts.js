// array oggetti
const images = [
    
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }

];

// container img principale
const containerPhoto = document.querySelector('.photo');

// container text
const containertext = document.querySelector('.container-text');

// container img secondario
const containerPhotoSec = document.querySelector('.all-photo'); 

// bottono indietro
const previousButton = document.getElementById('previous');

// bottono avanti
const afterButton = document.getElementById('after');

// contatore visibilità
let counter = 0;

// creazione immagine 
let myImg = document.createElement('img');

containerPhoto.append(myImg);

myImg.src = images[counter].image;

// creazione title
const myTitle = document.createElement('h2');

containertext.append(myTitle);

myTitle.innerHTML = images[counter].title

// creazione "p" text
const myText = document.createElement('p');

containertext.append(myText);

myText.innerHTML = images[counter].text

// creazione elementi
for (let i = 0; i < images.length; i++) {

    let myImgSec = document.createElement('img');

    containerPhotoSec.append(myImgSec);

    myImgSec.src = images[i].image;

};

afterButton.addEventListener('click',

    () => {

        if (counter >= images.length - 1) {

            counter = 0;

        } else {

            counter++;

        }

        myImg.src = images[counter].image;

        myTitle.innerHTML = images[counter].title;

        myText.innerHTML = images[counter].text;

    }

)

previousButton.addEventListener('click',

    () => {

        if (counter == 0) {

            counter = images.length - 1;

        } else {

            counter--;

        }

        myImg.src = images[counter].image;

        myTitle.innerHTML = images[counter].title;

        myText.innerHTML = images[counter].text;

    }

)