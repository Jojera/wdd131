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

const products = [
    { id: "product1", name: "TAMA drumkit" },
    { id: "product2", name: "Meinl Cymbals"},
    { id: "product3", name: "Promark drumsticks" },
    { id: "product4", name: "Drum Keys" }
  ];
  
  window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });

window.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
});  