'use strict';

const btnModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const hideModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (var i = 0; i < btnModal.length; i++)
    btnModal[i].addEventListener('click', showModal);

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        hideModal();
    }
});