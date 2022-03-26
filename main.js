'use strict';

const images = [
    { 'id': 1, 'url': './img/chrono.jpg' },
    { 'id': 1, 'url': './img/inuyasha.jpg' },
    { 'id': 1, 'url': './img/ippo.png' },
    { 'id': 1, 'url': './img/tenchi.jpg' },
    { 'id': 1,'url': './img/tenjhotenge.jpg' },
    { 'id': 1, 'url': './img/yuyuhakusho.jpg' }
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class="item">
                <img src="${image.url}">
            </div>
        `
    });
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const next = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const previous = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', next);
document.querySelector('#previous').addEventListener('click', previous);