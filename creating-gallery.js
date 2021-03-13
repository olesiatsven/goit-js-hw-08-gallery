import images from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

function createGalleryElements (element) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.setAttribute('href',element.original);
    galleryItem.append(galleryLink);

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.setAttribute('src',element.preview);
    galleryImage.setAttribute('data-source',element.original);
    galleryImage.setAttribute('alt',element.description);
    galleryLink.append(galleryImage);

    return galleryItem;
};

const createListGallery = images.map(image => createGalleryElements(image));
galleryRef.append(...createListGallery);




// function addGallery(array, parent) {
//     const createItem = images.map((image) => {
//         arrayOfImages.push(element.original);
//         return createGalleryElements(element);
//     });
    
//     parent.append(...createItem);
    
// }
// const galleryItems = images.default;

// addGallery(galleryItems,galleryRef)