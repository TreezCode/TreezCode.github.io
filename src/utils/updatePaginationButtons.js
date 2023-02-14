/**
 * Updates the state of the prev and next buttons based on the current page and number of images
 * @param {number} currentPage - The number of the current page
 * @param {number} itemsPerPage - The number of items to display per page
 * @param {Array} filteredImages - An array of image data
 * @returns {void}
 */

const galleryGrid = document.querySelector('.gallery-grid');
const prevButton = document.querySelector('.page-item.disabled');
const nextButton = document.querySelector('.page-item:not(.disabled)');

const updateButtons = (currentPage, itemsPerPage, currentImages) => {
  const nextButtonClass = currentPage * itemsPerPage >= currentImages.length ? 'add' : 'remove';
  nextButton.classList[nextButtonClass]('disabled');

  const prevButtonClass = currentPage === 1 ? 'add' : 'remove';
  prevButton.classList[prevButtonClass]('disabled');

  if (currentImages.length === 0) {
    galleryGrid.innerHTML = '<p class="gallery-msg">No images to display</p>';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    return;
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

export default updateButtons;
