'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

// querySelector -> solo para uno
// querySelectorAll -> Varios 

const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

// Funcion para mostrar las ventanas
for(let i = 0; i < btnsOpenModal.length; i ++){
    btnsOpenModal[i].addEventListener('click', function () {
        console.log('Button clicked')
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

// Funcion para ocultar las ventanas
const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// Llamada al hacer click a la funcion
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)