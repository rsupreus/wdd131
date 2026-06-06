
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45813.jpg"
  }
    {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-11086.jpg"
},
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495.jpg"
},
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-26454.jpg"
},
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721.jpg"
},
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4058.jpg"
},
  {
    templeName: "Las Vegas Nevada",
    location: "Las Vegas, Nevada",
    dedicated: "1989, December, 16",
    area: 80350,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-69889.jpg"
  },
  {
    templeName: "Port-Au-Prince Haiti",
    location: "Petion-Ville, Haiti",
    dedicated: "2019, September, 1",
    area: 10396,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-51484.jpg"
  },
  {
    templeName: "Fort Lauderdale Florida",
    location: "Davie, Florida",
    dedicated: "2014, May, 4",
    area: 30500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-55220.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas",
    dedicated: "1989, March, 5",
    area: 44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67245.jpg"
  }
];


// Display Function

const container = document.querySelector(".temples");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templeList) {

    container.innerHTML = "";

    templeList.forEach(temple => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        area.innerHTML =
            `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}


// Home 

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Home";
    displayTemples(temples);
});


// Old 

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(temple =>
        parseInt(temple.dedicated) < 1900
    );

    displayTemples(oldTemples);
});


// New 

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(temple =>
        parseInt(temple.dedicated) > 2000
    );

    displayTemples(newTemples);
});


// Large 

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(temple =>
        temple.area > 90000
    );

    displayTemples(largeTemples);
});


//  Small 

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter(temple =>
        temple.area < 10000
    );

    displayTemples(smallTemples);
});


// Initial Page Load 

displayTemples(temples);






// Display current year

document.getElementById("currentyear").innerHTML =
new Date().getFullYear();


// Display last modified date

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }

});