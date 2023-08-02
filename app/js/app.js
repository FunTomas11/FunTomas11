import $ from 'jquery';
import {getLinkPreview} from "link-preview-js";

window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)

const works = ['https://funtomas11.github.io/dental-meeting/'];

$(document).on('scroll', function () {

    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('header > ul > li > a');
    const pos = $(this).scrollTop() + $(this).scrollTop() * 0.15;

    sections.forEach((section, index) => {
        if (index === 0) {
            return;
        }

        if (pos >= $(section).position().top) {
            buttons[index].classList.add('button_active');
        }

        if ($(this).scrollTop() >= $(section).position().top + $(section).height() || pos < $(section).position().top) {
            buttons[index].classList.remove('button_active');
        }
    });

});

window.toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

window.addEventListener('DOMContentLoaded', async () => {
    const previews = [];
    for (const work of works) {
        previews.push(await getLinkPreview(work))
    }

    $('#work > .content').prepend(preparePreviewElement(previews[0]))
})

function preparePreviewElement(preview) {
    const newElement = document.createElement('div');
    newElement.className = 'work__box';
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', preview.images[0])
    newElement.appendChild(imageElement)
    return newElement;
}

