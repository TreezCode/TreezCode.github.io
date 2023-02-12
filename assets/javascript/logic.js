// Sticky header on scroll
// ==========================================================
var header = document.getElementById('header');
var sticky = header.offsetTop;
var upArrow = document.getElementById('up-arrow');

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    upArrow.style.display = 'block';
  } else {
    header.classList.remove('sticky');
    upArrow.style.display = 'none';
  }
}

window.onscroll = function () {
  stickyHeader(); // Call sticky header function on scroll
};

// Define function to add offset to link scrolling
function scrollToElementWithOffset(elementId, offset) {
  var element = document.getElementById(elementId);
  window.scrollTo({
    top: element.offsetTop - offset,
    behavior: 'smooth',
  });
}

// Handle scrolling offset to counter navbar
var scrollLinks = document.querySelectorAll('.scroll-link');
for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', function (event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    var elementId = href.substr(1);
    var offset = 150;
    scrollToElementWithOffset(elementId, offset);
  });
}

// prevents CSS transitions until the page is fully loaded
// ==========================================================
var body = document.querySelector('body');
window.onload = function () {
  body.classList.remove('preload');
};




// ==========================================================
// Store images in an array of objects
const images = [
  {
    src: 'assets/images/website-gallery/owl_03-04.png',
    alt: 'Owl Wall Art Fractal Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 1,
    category: 'Fractal-Owl',
    title: 'Cosmic Companion',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/owl_00-02.png',
    alt: 'Owl Wall Art Fractal Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 2,
    category: 'Fractal-Owl',
    title: 'Fractal Feathered Friend',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/owl_01-02.png',
    alt: 'Owl Wall Art Fractal Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 3,
    category: 'Fractal-Owl',
    title: 'Artistic Avian',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/owl_04-05.png',
    alt: 'Owl Wall Art Fractal Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 4,
    category: 'Fractal-Owl',
    title: 'Nebula Night Owl',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/owl_02-00.png',
    alt: 'Owl Wall Art Fractal Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 5,
    category: 'Fractal-Owl',
    title: 'Fractured Fascination',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/splash_silhouette-07_CLEAN.png',
    alt: 'Watercolor Wall Art Splash Silhouette Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 6,
    category: 'Splash-Silhouette',
    title: 'Watercolor Waltz',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/splash_silhouette-20_CLEAN.png',
    alt: 'Watercolor Wall Art Splash Silhouette Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 7,
    category: 'Splash-Silhouette',
    title: 'Brushstroke Ballet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/splash_silhouette-25_CLEAN.png',
    alt: 'Watercolor Wall Art Splash Silhouette Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 8,
    category: 'Splash-Silhouette',
    title: 'Effervescent Expression',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    src: 'assets/images/website-gallery/splash_silhouette-26_00_CLEAN.png',
    alt: 'Watercolor Wall Art Splash Silhouette Digital Print',
    href: 'https://www.etsy.com/shop/TranscendentTreez',
    id: 9,
    category: 'Splash-Silhouette',
    title: 'Painted Passion',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
];

// Store elements to render the gallery
const galleryGrid = document.querySelector('.gallery-grid');
const prevButton = document.querySelector('.page-item.disabled');
const nextButton = document.querySelector('.page-item:not(.disabled)');

let filteredImages = [...images];
let previousSearchValue = '';
let itemsPerPage = 6;
let currentPage = 1;

/**
 * Updates the content of the gallery based on the page number
 * @param {number} pageNumber - The number of the current page
 * @param {string} zoom - An array of image data
 * @returns {void}
 */
const showPage = (pageNumber, images) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  galleryGrid.innerHTML = '';
  currentImages.forEach((image) => createImageElement(image));
  updateButtons(currentPage, itemsPerPage, images);
};

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

/**
 * Creates an image element to be rendered in the gallery grid
 * @param {Object} image - An object representing an image, with properties href, src, alt, category, title, and desc
 * @returns {HTMLDivElement} - A div element that represents the wrapped image and its associated elements, such as the link, title, description, and show description button
 */
const createImageElement = (image) => {
  // Create a div to wrap the image
  const imageWrap = document.createElement('div');
  imageWrap.classList.add('image-wrap', 'col-sm-6', 'col-md-4', 'col-lg-3');

  // Create a link element
  const link = document.createElement('a');
  link.href = image.href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.classList.add('img-link');

  // Create an image element
  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  img.id = `${image.category}_${image.id}`;
  img.setAttribute('data-category', image.category);
  img.setAttribute('data-title', image.title);
  img.setAttribute('data-desc', image.desc);
  img.classList.add('gallery-img', 'img-fluid');
  img.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Create a title element
  const title = document.createElement('h5');
  title.textContent = image.title;
  title.classList.add('image-title', 'text-center');

  // Create a description element
  const category = document.createElement('p');
  category.textContent = `${image.category}`;
  category.classList.add('image-category', 'text-center');

  // Create a description element
  const description = document.createElement('p');
  description.textContent = image.desc;
  description.classList.add('image-desc', 'text-center');

  // Create a button to show the description
  const showDescriptionButton = document.createElement('button');
  showDescriptionButton.textContent = 'Show Description';
  showDescriptionButton.classList.add('btn', 'btn-show-description');
  showDescriptionButton.id = 'showDescriptionBtn';
  showDescriptionButton.addEventListener('click', function () {
    showDescriptionButton.classList.toggle('active');
    description.classList.toggle('active');
    if (showDescriptionButton.classList.contains('active')) {
      showDescriptionButton.textContent = 'Hide Description';
    } else {
      showDescriptionButton.textContent = 'Show Description';
    }
  });

  // Append the elements to the image wrap
  imageWrap.appendChild(title);
  imageWrap.appendChild(category);
  imageWrap.appendChild(link);
  imageWrap.appendChild(showDescriptionButton);
  imageWrap.appendChild(description);

  // Append the image to the link and the image wrap to the gallery grid
  link.appendChild(img);
  galleryGrid.appendChild(imageWrap);
  return imageWrap;
};

/**
 * Updates the state of the prev and next buttons based on the current page and number of images
 * @param {number} currentPage - The number of the current page
 * @param {number} itemsPerPage - The number of items to display per page
 * @param {Array} filteredImages - An array of image data
 * @returns {void}
 */
const updateButtons = (currentPage, itemsPerPage, currentImages) => {
  const nextButtonClass =
    currentPage * itemsPerPage >= currentImages.length ? 'add' : 'remove';
  nextButton.classList[nextButtonClass]('disabled');

  const prevButtonClass = currentPage === 1 ? 'add' : 'remove';
  prevButton.classList[prevButtonClass]('disabled');

  if (currentImages.length === 0) {
    galleryGrid.innerHTML = '<p>No images to display</p>';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    return;
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};

/**
 * Shows the current page and total number of pages on the webpage
 * @param {number} currentPage - The number of the current page
 * @param {number} itemsPerPage - The number of items to display per page
 * @param {Array} currentImages - An array of image data
 * @returns {void}
 */
const showPageInfo = (currentPage, itemsPerPage, currentImages) => {
  const totalPages = Math.ceil(currentImages.length / itemsPerPage);
  const pageInfoElement = document.getElementById('pageNumber');

  let pageInfo = `Page ${currentPage} of ${totalPages}`;

  if (currentImages.length === 0) {
    pageInfo = `Page 0 of 0`;
    pageInfoElement.innerHTML = pageInfo;
  } else {
    pageInfoElement.innerHTML = pageInfo;
  }
};
showPageInfo(currentPage, itemsPerPage, filteredImages);

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

// Call the main function to display page
showPage(currentPage, filteredImages);

// Add event listeners to the pagination elements
nextButton.addEventListener('click', function (event) {
  event.preventDefault();
  handlePagination('next');
});
prevButton.addEventListener('click', function (event) {
  event.preventDefault();
  handlePagination('prev');
});
// Add event listener to the filter select and search input elements
document
  .querySelector('.form-control')
  .addEventListener('change', filterImages);
document
  .querySelector('.search-input')
  .addEventListener('input', handleSearchInput);

// Handle magnifying glass for art gallery
let mouseInsideImage = false;
let magnifierEnabled = false;
let magnification = 2;
/**
 * Creates a magnifying glass effect for a given image element
 * @param {string} imgID - The ID of the image element to magnify
 * @param {number} zoom - The zoom level for the magnifying glass (e.g. 2x, 4x, etc.)
 * @returns {void}
 */
const magnify = (imgID, zoom) => {
  // If the magnifier is not enabled, return
  if (!magnifierEnabled) return;

  // Get the image element with the given ID
  const img = document.getElementById(imgID);

  // Remove any existing magnifying glasses to avoid duplicates
  const glasses = document.querySelectorAll('.img-magnifier-glass');
  glasses.forEach((glass) => glass.remove());

  // Create magnifier glass
  const glass = document.createElement('DIV');
  glass.setAttribute('class', 'img-magnifier-glass');

  // Insert the magnifier glass into the image's parent element
  img.parentElement.insertBefore(glass, img);

  // Set the background properties for the magnifier glass
  glass.style.backgroundImage = `url('${img.src}')`;
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

  // Variables to set the border width and half the width and height of the magnifier glass
  const bw = 3; // Border width
  const w = glass.offsetWidth / 2; // Half of the width of the magnifier glass
  const h = glass.offsetHeight / 2; // Half of the height of the magnifier glass

  const createMagnifier = (e) => {
    e.preventDefault();
    magnify(imgID, zoom);
  };

  /**
   * Get the cursor position relative to the image element
   * @param {Event} e - The mouse or touch event
   * @returns {Object} - An object with x and y properties representing the cursor position
   */
  const getCursorPos = (e) => {
    let x = 0,
      y = 0;
    e = e || window.event;

    const a = img.getBoundingClientRect();

    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x, y };
  };

  /**
   * Move the magnifier glass as the mouse/finger moves over the image/glass
   * @param {Event} e - The mouse or touch event
   * @returns {void}
   */
  const moveMagnifier = (e) => {

    e.preventDefault();

    // Initialize x and y coordinates
    let x = 0,
      y = 0;

    // Check if event is a touch event or mouse event
    if (e.touches) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      // Get cursor position for mouse event
      const pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
    }

    // Check if cursor position is outside of image
    if (x > img.width || x < 0 || y > img.height || y < 0) {
      if (mouseInsideImage) {
        // Remove magnifier glass if cursor is outside of image
        glass.remove();
        mouseInsideImage = false;
      }
      return;
    }
    // Set flag to true if cursor is inside image
    if (!mouseInsideImage) mouseInsideImage = true;

    // Limit x and y coordinates to within the bounds of the image
    x = Math.min(Math.max(x, w / zoom), img.width - w / zoom);
    y = Math.min(Math.max(y, h / zoom), img.height - h / zoom);

    // Set the position of magnifier glass
    glass.style.left = `${x - w + 10}px`;
    glass.style.top = `${y - h + 50}px`;

    // Set the background position of magnifier glass
    glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${y * zoom - h + bw}px`;
  };

  // Add event listeners to the magnifier glass and the image
  img.addEventListener('touchstart', createMagnifier);
  img.addEventListener('touchmove', moveMagnifier);
  glass.addEventListener('touchmove', moveMagnifier);
  glass.addEventListener('touchend', glass.remove);
  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);
};

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
document.querySelector('.gallery-grid').addEventListener('mouseover', function (e) {
    if (e.target.matches('.gallery-img')) {
      magnify(e.target.id, magnification);
    }
});

const toggleMagnifierBtn = document.querySelector('.toggle-magnifier');
const toggleMagnifierText = toggleMagnifierBtn.querySelector('.toggle-magnifier-text');
const buttonBody = document.getElementById('toggleMagnifier');

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
