import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const imageItem = galleryItems
    .map(
        ({ preview, original, description }) =>
            `
        <li>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}' alt='${description}'/>
        </a>
        </li>
        `
    )
    .join('');

galleryList.insertAdjacentHTML('beforeend', imageItem);

const options = {
    captionsData: 'alt',
    captionDelay: 250,
};

let gallery = new SimpleLightbox('.gallery a', options);

gallery.on('show.simplelightbox', function () {
    // do something…
});

options.captionsData;
options.captionDelay;

gallery.on('error.simplelightbox', function (e) {
    console.log(e); // some usefull information
});
