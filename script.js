// переменные
const refs = {
  galleryRef: document.querySelector('.gallery'),
  lightboxRef: document.querySelector('.lightbox'),
  lightboxOverlayRef: document.querySelector('.lightbox__overlay'),
  lightboxImageRef: document.querySelector('.lightbox__image'),
  btnModal : document.querySelector('button[data-action="close-lightbox"]'
)

};

const arrayOfImages = [];
let index;

// функции
function openModal(event) {
  event.preventDefault();
    if (event.target.nodeName !=='IMG'){
        return;
  };
  // const largeImageRef = event.target.dataset.sourse
 refs.lightboxImageRef.setAttribute("src", event.target.dataset.source);
  refs.lightboxRef.classList.add('is-open');

  window.addEventListener('keydown', closeModalEscPress);
  // window.addEventListener('keydown', arrowToLeft);
  // window.addEventListener('keydown', arrowToRight);
};



function closeModal(event) {
  refs.lightboxRef.classList.remove('is-open');
  refs.lightboxImageRef.setAttribute("src", "");
  window.removeEventListener('keydown', closeModalEscPress);
  // window.removeEventListener('keydown', arrowToLeft);
  // window.removeEventListener('keydown', arrowToRight);
};

function closeModalEscPress (event) {
  if (event.key === 'Escape') {
    closeModal(event);
  }
};

// function arrowToLeft(event) {
//   if (event.key === 'ArrowLeft') {
//     getIndex(arrayOfImages);
//     let result = index !== 0
//       ? refs.lightboxImageRef.setAttribute("src", arrayOfImages[index - 1])
//       : refs.lightboxImageRef.setAttribute('src',arrayOfImages[arrayOfImages.length - 1])
    
//     return result;
//   }

// };

// function arrowToRight(event) {
//   if (event.key === 'ArrowRight') {
//     getIndex(arrayOfImages);
//     let result = index !== arrayOfImages.length - 1
//       ? refs.lightboxImageRef.setAttribute("src", arrayOfImages[index + 1])
//       : refs.lightboxImageRef.setAttribute("src", arrayOfImages[0]);
//     return result;   
      
//   }
  
// }

// function getIndex(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === refs.lightboxImageRef.getAttribute('src')) {
//       index = i;
//     }
//   }
//   return index;
// }

// обработчики
refs.galleryRef.addEventListener('click', openModal);
refs.btnModal.addEventListener('click', closeModal);
refs.lightboxOverlayRef.addEventListener('click', closeModal);
