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

export default showPageInfo;