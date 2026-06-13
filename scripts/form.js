// Display current year

document.getElementById("currentyear").innerHTML =
new Date().getFullYear();


// Display last modified date

document.getElementById("lastModified").innerHTML =
`Last Modification: ${document.lastModified}`;

// Count reviews submitted
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {

        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

        reviewCount++;

        localStorage.setItem("reviewCount", reviewCount);
    });
}

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;          
    option.textContent = product.name;  

    productSelect.appendChild(option);
});