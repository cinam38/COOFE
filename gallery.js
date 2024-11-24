// JavaScript for lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get all images in the gallery
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close");

    // Loop through all images to add click event
    images.forEach(img => {
        img.addEventListener("click", function () {
            // When an image is clicked, show the lightbox
            lightbox.style.display = "block";
            // Set the lightbox image source to the clicked image's data-src (full-size image)
            lightboxImg.src = img.getAttribute("data-src");
            // Set the caption to the image's alt text
            lightboxCaption.innerHTML = img.alt;
        });
    });

    // When the user clicks on the close button (x), close the lightbox
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close the lightbox if the user clicks anywhere outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
