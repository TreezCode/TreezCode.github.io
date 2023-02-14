import imagesData from './constants/images.js';
import createImageElement from './utils/createImageElement.js';
import updateButtons from './utils/updatePaginationButtons.js';
import showPageInfo from './utils/showPageInfo.js';
import handleMagnify from './utils/handleMagnify.js';
// import showPage from './showPage.js';

// Store elements to render the gallery
const galleryGrid = document.querySelector('.gallery-grid');
const prevButton = document.querySelector('.page-item.disabled');
const nextButton = document.querySelector('.page-item:not(.disabled)');
const toggleMagnifierBtn = document.querySelector('.toggle-magnifier');
const toggleMagnifierText = toggleMagnifierBtn.querySelector('.toggle-magnifier-text');
const buttonBody = document.getElementById('toggleMagnifier');

const images = [
  ...imagesData.fractalOwlImages,
  ...imagesData.splashSilhouetteImages,
];

// Global variables to change state of application
let filteredImages = [...images];
let previousSearchValue = '';
let itemsPerPage = 6;
let currentPage = 1;
let mouseInsideImage = false;
let magnifierEnabled = false;
let magnification = 2;

/**
 * Updates the content of the gallery based on the page number
 * @param {number} currentPage - The number of the current page
 * @param {Array} images - An array of image data
 * @returns {void}
 */
const showPage = (currentPage, filteredImages) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  galleryGrid.innerHTML = '';
  currentImages.forEach((image) => createImageElement(image, galleryGrid));
  updateButtons(currentPage, itemsPerPage, filteredImages);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
};
// Call the main function to display page
showPage(currentPage, filteredImages);

/**
 * Updates the state of the filtered images based on the selected filter value
 * @returns {void}
 */
const filterImages = () => {
  let selectedFilter = document.querySelector('.form-control').value;
  filteredImages = [...images];

  if (selectedFilter !== 'All') {
    const currentImages = document.querySelectorAll('.image-wrap');
    currentImages.forEach((img) => img.remove());
    filteredImages = filteredImages.filter(
      (img) => img.category === selectedFilter
    );
    showPageInfo(currentPage, itemsPerPage, filteredImages);
  }
  currentPage = 1;
  showPage(currentPage, filteredImages);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
};

/**
 * Updates the state of the filtered images based on the search input value
 * @param {Event} event - The event that triggered the function call
 * @returns {void}
 */
const handleSearchInput = (event) => {
  const searchValue = event.target.value.toLowerCase();

  if (searchValue === '') {
    filteredImages = [...images];
  } else if (searchValue !== previousSearchValue) {
    filteredImages = images.filter((image) => {
      return (
        image.title.toLowerCase().includes(searchValue) ||
        image.category.toLowerCase().includes(searchValue)
      );
    });
  }
  previousSearchValue = searchValue;
  currentPage = 1;
  showPage(currentPage, filteredImages);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
};
// Add event listener to the filter select and search input elements
document.querySelector('.form-control').addEventListener('change', filterImages);
document.querySelector('.search-input').addEventListener('input', handleSearchInput);

/**
 * Handles the pagination for the image gallery
 * @param {string} direction - The direction of pagination: either 'next' or 'prev'
 * @returns {void}
 */
const handlePagination = (direction) => {
  if (
    direction === 'next' &&
    currentPage * itemsPerPage < filteredImages.length
  ) {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else {
    return;
  }
  showPage(currentPage, filteredImages);
  updateButtons(currentPage, itemsPerPage, filteredImages);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
  scrollToElementWithOffset('gallery', 150);
};

// Add event listeners to the pagination elements
nextButton.addEventListener('click', function (event) {
  event.preventDefault();
  handlePagination('next');
});
prevButton.addEventListener('click', function (event) {
  event.preventDefault();
  handlePagination('prev');
});

// Prevent clicks from redirecting to link if magnifier is enabled
const imageLinks = document.querySelectorAll('.img-link');
imageLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    if (magnifierEnabled) {
      event.preventDefault();
    }
  });
});

// Event listener for the mouseover event on images within the .gallery-grid container
galleryGrid.addEventListener('mouseover', function (e) {
    if (e.target.matches('.gallery-img')) {
      handleMagnify(e.target.id, magnification, magnifierEnabled, mouseInsideImage);
    }
  });

// Toggles the magnifier functionality and updates the UI to reflect the change
toggleMagnifierBtn.addEventListener('click', function (e) {
  magnifierEnabled = !magnifierEnabled;
  if (magnifierEnabled) {
    toggleMagnifierText.textContent = 'Disable Magnifier';
    e.target.classList.add('active');
    buttonBody.classList.add('active');
  } else {
    toggleMagnifierText.textContent = 'Enable Magnifier';
    e.target.classList.remove('active');
    buttonBody.classList.remove('active');
    // remove any existing magnifying glasses when magnifier is disabled
    const glasses = document.querySelectorAll('.img-magnifier-glass');
    glasses.forEach((glass) => glass.remove());
  }
});

