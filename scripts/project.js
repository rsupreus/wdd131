const services = [
{
    number: "01",
    name: "Fitness",
    items: [
        "Personal Training",
        "Guided Outdoor Activities",
        "Body Scanning"
    ]
},
{
    number: "02",
    name: "Nutrition",
    items: [
        "Nutrition Coaching",
        "Wellness Planning",
        "Protein & Supplement Line"
    ]
},
{
    number: "03",
    name: "Holistic Health",
    items: [
        "Foot Reflexology",
        "Breathwork & Guided Meditation",
        "Cognitive Behavior Therapy"
    ]
}
];

const quotes = [

"With God all things are possible.",
"Faith and wellness go hand in hand.",
"Strength grows through perseverance.",
"Care for your body and spirit."
];


// Footer

const year = document.querySelector("#year");

if (year){
    year.textContent = new Date().getFullYear();
}

const modified = document.querySelector("#lastModified");

if (modified){
    modified.textContent =
    `Last Modified: ${document.lastModified}`;
}


// Quote Generator

const quoteBox = document.querySelector("#dailyQuote");

if (quoteBox){

    const random =
    quotes[Math.floor(Math.random() * quotes.length)];

    quoteBox.textContent = random;
}


// Services Page

const container =
document.querySelector("#servicesContainer");

if (container){

    services.forEach(service => {

        container.innerHTML += `
        <div class="card">
            <h3>${service.name}</h3>
        </div>
        `;
    });
}


// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


// Contact Form + localStorage

const form =
document.querySelector("#contactForm");

if(form){

    form.addEventListener("submit", (event)=>{

        event.preventDefault();

        const name =
        document.querySelector("#name").value;

        localStorage.setItem(
            "visitorName",
            name
        );

        document.querySelector("#confirmation")
        .innerHTML =
        `<p>Thank you ${name}! We will contact you soon.</p>`;
    });
}