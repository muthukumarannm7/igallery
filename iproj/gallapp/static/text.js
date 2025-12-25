
const modal = document.getElementById("imageModal");

const fullImage = document.getElementById("fullImage");

const captionText = document.getElementById("caption");

/**
 * Opens the modal and displays the full-size image.
 * @param {HTMLElement} imgElement - The clicked thumbnail image element.
 */
function openModal(imgElement) {
    modal.style.display = "block";
    const fullSrc = imgElement.getAttribute("data-full");
    fullImage.src = fullSrc;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    modal.style.display = "none";

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
}