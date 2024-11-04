// Function to load data from JSON files and display it
function loadData(file, section) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById("product-list");
            const header = document.getElementById("header");
            const recommendationsBtn = document.getElementById("recommendationsBtn");
            const wishlistBtn = document.getElementById("wishlistBtn");

            // Update header
            header.textContent = `Product ${section}`;

            // Highlight active button
            if (section === "Recommendations") {
                recommendationsBtn.classList.add("active");
                wishlistBtn.classList.remove("active");
            } else {
                wishlistBtn.classList.add("active");
                recommendationsBtn.classList.remove("active");
            }

            // Clear existing items
            productList.innerHTML = "";

            // Populate products
            data.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product";
                
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <h2>${product.name}</h2>
                        <p class="description">${product.description}</p>
                        <p class="price">$${product.price}</p>
                        <a href="${product.url}" target="_blank">View Product</a>
                    </div>
                `;
                
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error loading data:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadData('recommendations.json', 'Recommendations');
});
