import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const imageItem = galleryItems
    .map(
        ({ preview, original, description }) =>
            `
        <div class='gallery__item'>
        <a class='gallery__link' href='${original}'>
        <img class='gallery__image' src='${preview}' data-source='${original}' alt='${description}'/>
        </a>
        </div>
        `
    )
    .join('');

gallery.insertAdjacentHTML('beforeend', imageItem);
gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    const url = evt.target.dataset.source;
    const instance = basicLightbox.create(
        `
	<img src="${url}" alt="">
`
    );
    instance.show();

    const instanceOn = instance.show();

    if (instanceOn) {
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') {
                return;
            }
            instance.close();
        });
    }
}
