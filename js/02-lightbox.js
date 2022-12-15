import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');

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

galleryUl.insertAdjacentHTML('beforeend', imageItem);
// galleryUl.addEventListener('click', onClick);

const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
};

let gallery = new SimpleLightbox('.gallery a', options);

gallery.on('show.simplelightbox', function () {
    // do something…
});
options.captions;
options.captionSelector;
options.captionType;
options.captionsData;
options.captionPosition;
options.captionDelay;

gallery.on('error.simplelightbox', function (e) {
    console.log(e); // some usefull information
});
