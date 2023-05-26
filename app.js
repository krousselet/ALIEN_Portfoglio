// DECLARATION DES VARIABLES //



// ********************** MOBILE BUTTONS ****************** //
let hamburger = document.querySelector('.hamburger-container');
let hamburgerUp = document.querySelector('.hamburger-up');
let hamburgerDown = document.querySelector('.hamburger-down');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navElements = document.querySelectorAll('.menu-elements');
let threeDots = document.querySelectorAll('.index-title-dots');
let home = document.querySelector('.home');
let contacts = document.querySelector('.contact');
let projects = document.querySelector('.projects');
let about = document.querySelector('.about');
let onItIndex = true;
let onItContact = false;
let onItProjects = false;
let onItAbout = false;

// ******************* DIV STYLES INDEX ****************** //
let wrapper = document.querySelector('.wrapper');

// ********************** DESKTOP ANCHORS ****************** //
let homeDesktop = document.querySelector('.home-desktop');
let contactsDesktop = document.querySelector('.contact-desktop');
let projectsDesktop = document.querySelector('.projects-desktop');
let aboutDesktop = document.querySelector('.about-desktop');
let containerIndex = document.querySelector('.container-index');
let containerIndexTitles = document.querySelector('.container-index-titles');
let containerContact = document.querySelector('.container-contact');
let containerAbout = document.querySelector('.container-about');
let containerProjects = document.querySelector('.container-projects');
let timer = 5;
let menuElementsDesktop = document.querySelectorAll('.menu-elements-desktop');
let card = document.querySelectorAll('.card');
let blob = document.querySelector('#blob');

//***************************** CURSOR GREENISH CLOUD ****************************//

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
}



// ********************* TEXT ANIMATION JS ************************************* //
const textDisplay = document.querySelector('.dynamic-txts');
const textDisplayed = ['Dessinateur', 'Pianiste', 'Developpeur', 'Ecrivain', 'Poete', 'Polyglotte'];
let i = 0;
let j = 0;
let currentText = [];
let isDeleting = false;

// *****************************  ECRIRE DES MOTS EN DIFERES DANS LA PAGE ******************** //

function nestedLoopLetters() {
    textDisplay.innerHTML = currentText.join('');
    if (i < textDisplayed.length) {

    } if (!isDeleting && j <= textDisplayed[i].length) {
        currentText.push(textDisplayed[i][j])
        j++;
    }

    if (isDeleting && j <= textDisplayed[i].length) {
        currentText.pop(textDisplayed[i][j])
        j--;
    };
    if (j == textDisplayed[i].length) {
        isDeleting = true;
    }

    if (isDeleting && j === 0) {
        currentText = [];
        isDeleting = false;
        i++;
        if (i == textDisplayed.length) {
            i = 0;
        }
    }
    setTimeout(nestedLoopLetters, 220)
}

nestedLoopLetters();

// ************************* MOBILE HAMBURGER BEHAVIOR CROSS ********************** //

hamburger.onclick = function () {
    hamburgerUp.classList.toggle('hamburger-up-active');
    hamburgerDown.classList.toggle('hamburger-down-active');
    hamburgerMenu.classList.toggle('hamburger-menu-active');
    navElements.forEach(item => item.classList.toggle('menu-elements-active'))
}

//********************************** GSAPS **********************************//

// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.title-underscore', {
//     duration: 100, x: 500, y: 0, scrollTrigger: {
//         start: 'top 33%',
//         end: 'top 100%',
//         scrub: true,
//         trigger: '.static-txt',
//         toggleActions: 'none reverse none none',
//     }
// });

// gsap.to('.jet', {
//     duration: 100, x: 500, y: 0, scrollTrigger: {
//         start: 'top 10%',
//         end: 'top 100%',
//         scrub: true,
//         trigger: '.jet-trigger',
//         toggleActions: 'restart reverse none none',
//     }
// });

// gsap.from('.card', {
//     duration: 5, x: -50, scrollTrigger: {
//         start: 'top 25%',
//         end: 'top 75%',
//         scrub: true,
//         trigger: 'display:block'
//     }
// })

// gsap.to('.card', {
//     duration: 5, x: 800, scrollTrigger: {
//         start: 'top 25%',
//         end: 'top 75%',
//         scrub: true,
//         trigger: '.play'
//     }
// })

menuElementsDesktop.forEach(el => {
    el.style.textTransform = 'uppercase';
})

// ********************** LE FONCTIONNEMENT DES BOUTONS MOBILE ********************************* //
home.onclick = function () {
    onItIndex = true;
    onItAbout = false;
    onItProjects = false;
    onItContact = false;
    if (onItIndex === true) {
        containerIndex.style.display = "block";
        containerAbout.classList.remove('container-about-active');
        containerContact.classList.remove('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
    }
}

contacts.onclick = function () {
    onItIndex = false;
    onItContact = true;
    onItAbout = false;
    onItProjects = false;
    if (onItContact) {
        containerIndex.style.display = "none";
        containerContact.classList.add('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
        containerAbout.classList.remove('container-about-active')
    }

}

about.onclick = function () {
    onItIndex = false;
    onItAbout = true;
    onItContact = false;
    onItProjects = false;
    if (onItAbout) {
        containerIndex.style.display = 'none';
        containerAbout.classList.add('container-about-active');
        containerContact.classList.remove('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
    }


}

projects.onclick = function () {
    onItIndex = false;
    onItProjects = true;
    onItContact = false;
    onItHome = false;
    if (onItProjects) {
        containerIndex.style.display = 'none';
        containerProjects.classList.add('container-projects-active');
        containerAbout.classList.remove('container-about-active');
        containerContact.classList.remove('container-contact-active');
    }
}

//*****************************LE FONCTIONNEMENT DES DESKTOP BUTTONS ******************************** */

homeDesktop.onclick = function () {
    onItIndex = true;
    onItAbout = false;
    onItProjects = false;
    onItContact = false;
    if (onItIndex === true) {
        containerIndex.style.display = "block";
        containerAbout.classList.remove('container-about-active');
        containerContact.classList.remove('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
        menuElementsDesktop.forEach(el => el.style.opacity = '.6');
        homeDesktop.style.opacity = '1';
    }
}

contactsDesktop.onclick = function () {
    onItIndex = false;
    onItContact = true;
    onItAbout = false;
    onItProjects = false;
    if (onItContact) {
        containerIndex.style.display = "none";
        containerContact.classList.add('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
        containerAbout.classList.remove('container-about-active');
        menuElementsDesktop.forEach(el => el.style.opacity = '.6');
        contactsDesktop.style.opacity = '1';
    }

}

aboutDesktop.onclick = function () {
    onItIndex = false;
    onItAbout = true;
    onItContact = false;
    onItProjects = false;
    if (onItAbout) {
        containerIndex.style.display = 'none';
        containerAbout.classList.add('container-about-active');
        containerContact.classList.remove('container-contact-active');
        containerProjects.classList.remove('container-projects-active');
        menuElementsDesktop.forEach(el => el.style.opacity = '.6');
        aboutDesktop.style.opacity = '1';
    }


}

projectsDesktop.onclick = function () {
    onItIndex = false;
    onItProjects = true;
    onItContact = false;
    onItHome = false;
    if (onItProjects) {
        containerIndex.style.display = 'none';
        containerProjects.classList.add('container-projects-active');
        containerAbout.classList.remove('container-about-active');
        containerContact.classList.remove('container-contact-active');
        menuElementsDesktop.forEach(el => el.style.opacity = '.6');
        projectsDesktop.style.opacity = '1';
    }
}

// ******************** ABOUT VARIABLES ******************//

let audioContainer = document.querySelector('.about-audio-container');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let test = document.querySelector('.test');
let testYiruma = document.querySelector('.test-yiruma');
let playYiruma = document.querySelector('.play-yiruma');
let pauseYiruma = document.querySelector('.pause-yiruma');
card.forEach(card => card.addEventListener('click', function () {
    card.classList.toggle('flip');
})
);

play.onclick = function () {
    play.classList.toggle('play');
    pause.style.display = 'flex';
    test.play();
    testYiruma.play() ? testYiruma.pause() : console.log('Ce n\'est pas bien d\'écouter deux choses à la fois');
}

pause.onclick = function () {
    pause.style.display = 'none';
    play.classList.toggle('play');
    play ? test.pause() : test.play();

}

playYiruma.onclick = function () {
    playYiruma.classList.toggle('play');
    pauseYiruma.style.display = 'flex';
    testYiruma.play();
    testYiruma.play() ? test.pause() : console.log('Ce n\'est pas bien d\'écouter deux choses à la fois');
}

pauseYiruma.onclick = function () {
    pauseYiruma.style.display = 'none';
    playYiruma.classList.toggle('play');
    playYiruma ? testYiruma.pause() : testYiruma.play();

}

//******************** CONTACT VARIABLES ***********************//

let firstName = document.querySelector('#first-name');
let firstNameValue = firstName.value;
let lastName = document.querySelector('#first-name');
let lastNameValue = lastName.value;
let message = document.querySelector('#message');
let messageRegistered = message.value;
let submit = document.querySelector('#submit');
let cancel = document.querySelector('#cancel');

// ************************ SUBMIT BEHAVIOR ******************//

submit.onclick = function (e) {
    e.preventDefault();
    console.log(firstNameValue, lastNameValue);
}

// ********************** PROJECT VARIABLES *****************//
const slides = document.querySelectorAll('.slide');
let currentSlide = 0, resetSlides = false;
// Allows a rotation to always have something to display //
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector('.btn-next');
const previousSlide = document.querySelector('.btn-previous');

//*********************** MOVE THE PICTURE OUT OF THE VIEWPORT TO THE RIGHT ********************* */


function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
}

nextSlide.addEventListener('click', function () {
    if (currentSlide >= maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    resetSlides = true;
    updateSlides();
});

//*********************** MOVE THE PICTURE OUT OF THE VIEWPORT TO THE LEFT ********************* */

previousSlide.addEventListener('click', function () {
    if (currentSlide <= 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    resetSlides = true;
    updateSlides();
})

updateSlides();

setInterval(() => {

    if (resetSlides) {
        resetSlides = false;
        return;
    }
    currentSlide++;
    if (currentSlide >= maxSlide) {
        currentSlide = 0;
    }
    updateSlides();
}, 2000);