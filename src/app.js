import imagesData from './constants/images.js';
import { createImageElement } from './gallery/components/createImageElement.js';
import { updateButtons, showPageInfo } from './gallery/components/updatePageElements.js';
import { magnify } from './gallery/components/handleMagnify.js';

// Store elements to render the gallery
const galleryGrid = document.querySelector('.gallery-grid');
const prevButton = document.querySelector('.page-item.disabled');
const nextButton = document.querySelector('.page-item:not(.disabled)');
const filterSelect = document.querySelector('.form-control');
const searchInput = document.querySelector('.search-input');
const imageLinks = document.querySelectorAll('.img-link');
const toggleMagnifierBtn = document.querySelector('.toggle-magnifier');
const toggleMagnifierText = toggleMagnifierBtn.querySelector('.toggle-magnifier-text');
const magnifierBtnBody = document.getElementById('toggleMagnifier');

// Combine image categories to main image array
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
 * @param {Array} imagesArray - An array of image data
 * @returns {void}
 */
const showPage = (pageNumber, imagesArray) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = imagesArray.slice(startIndex, endIndex);

  galleryGrid.innerHTML = '';
  currentImages.forEach((image) => createImageElement(image, galleryGrid));
  updateButtons(pageNumber, itemsPerPage, imagesArray);
  showPageInfo(pageNumber, itemsPerPage, imagesArray);
};

/**
 * Updates the state of the filtered images based on the selected filter value
 * @returns {void}
 */
const filterImages = () => {
  let selectedFilter = filterSelect.value;
  filteredImages = [...images];

  if (selectedFilter !== 'All') {
    filteredImages = filteredImages.filter(img => img.category === selectedFilter);
    showPageInfo(currentPage, itemsPerPage, filteredImages);
  }
  searchInput.value = '';
  currentPage = 1;
  showPage(currentPage, filteredImages);
  showPageInfo(currentPage, itemsPerPage, filteredImages);
};

/**
 * Updates the state of the filtered images based on the search input value
 * @param {Event} event - The event that triggered the function call
 * @returns {void}
 */
const handleSearchInput = (e) => {
  const searchValue = e.target.value.toLowerCase();

  if (searchValue === '') {
    filteredImages = [...images];
  } else if (searchValue !== previousSearchValue) {
    filteredImages = filteredImages.filter((image) => {
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

/**
 * Handles the pagination for the image gallery
 * @param {string} direction - The direction of pagination: either 'next' or 'prev'
 * @returns {void}
 */
const handlePagination = (direction) => {
  if (direction === 'next' && currentPage * itemsPerPage < filteredImages.length) {
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

// Add event listeners to the filter select and search input elements
filterSelect.addEventListener('change', filterImages);
searchInput.addEventListener('input', handleSearchInput);

// Add event listeners to the next and previous pagination elements
nextButton.addEventListener('click', (e) => {
  e.preventDefault();
  handlePagination('next');
});
prevButton.addEventListener('click', (e) => {
  e.preventDefault();
  handlePagination('prev');
});

// Add event listener to prevent clicks from redirecting to link if magnifier is enabled
imageLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (magnifierEnabled) {
      e.preventDefault();
    }
  });
});

// Add event listener for the mouseover event on images within the .gallery-grid container
galleryGrid.addEventListener('mouseover', (e) => {
    if (e.target.matches('.gallery-img')) {
      magnify(e.target.id, magnification, magnifierEnabled, mouseInsideImage);
    }
  });

// Add event listener to toggle the magnifier functionality and update the UI to reflect the change
toggleMagnifierBtn.addEventListener('click', (e) => {
  magnifierEnabled = !magnifierEnabled;
  if (magnifierEnabled) {
    toggleMagnifierText.textContent = 'Disable Magnifier';
    e.target.classList.add('active');
    magnifierBtnBody.classList.add('active');
  } else {
    toggleMagnifierText.textContent = 'Enable Magnifier';
    e.target.classList.remove('active');
    magnifierBtnBody.classList.remove('active');
  }
});

// Call the main function to render page
showPage(currentPage, filteredImages);