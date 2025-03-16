document.getElementById('currentyear').textContent= new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Toggle Hamburger & X Icon
        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖"; // Close icon
        } else {
            hamburger.innerHTML = "☰"; // Hamburger icon
        }
    });
});