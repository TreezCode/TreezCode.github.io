import createImageElement from './utils/createImageElement.js';
import updateButtons from './utils/updatePaginationButtons.js';
import showPageInfo from './utils/showPageInfo.js';

const galleryGrid = document.querySelector('.gallery-grid');

const showPage = (pageNumber, images, itemsPerPage, currentPage, filteredImages) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  galleryGrid.innerHTML = '';
  currentImages.forEach((image) => createImageElement(image, galleryGrid));
  updateButtons(currentPage, itemsPerPage, images);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
}

export default showPage;