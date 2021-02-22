// переменные
const galleryRef = document.querySelector('.gallery');
const lightboxRef = document.querySelector('.lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');

const refs = {
   images: document.querySelector('.js-gallery'),
}
refs.images.addEventListener('click',imageClick);

function imageClick(event) {
    if (event.target.nodeName !=='IMG'){
        return;
    };
  openLightbox (); 
};

function openLightbox () {
    
}