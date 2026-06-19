// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const services = [
    {
        name: "Fitness",
        description: "Personalized fitness coaching designed to improve strength, mobility, endurance, and overall health.",
        benefits: [
            "One-on-one coaching",
            "Customized workout plans",
            "Body composition tracking",
            "Faith-based encouragement"
        ],
        video: "https://www.youtube.com/watch?v=nwBsdOXIGyI",
        thumbnail: "images/fitness-video.jpg",
        tiers: [
            { name: "Starter", price: "$49 / Session" },
            { name: "Growth", price: "$179 / Month" },
            { name: "Transformation", price: "$349 / Month" }
        ]
    },

    {
        name: "Nutrition",
        description: "Practical nutrition guidance that helps you build healthy habits and fuel your body with confidence.",
        benefits: [
            "Nutrition assessments",
            "Meal planning support",
            "Healthy lifestyle coaching",
            "Supplement recommendations"
        ],
        video: "https://www.youtube.com/watch?v=3o2jkh7FVpw",
        thumbnail: "images/nutrition-video.jpg",
        tiers: [
            { name: "Starter", price: "$59 Consultation" },
            { name: "Wellness Plan", price: "$199 Package" },
            { name: "Complete Coaching", price: "$399 Package" }
        ]
    },

    {
        name: "Holistic Health",
        description: "Whole-person wellness support that nurtures the body, mind, and spirit through Christ-centered care.",
        benefits: [
            "Stress management techniques",
            "Breathwork and guided meditation",
            "Spiritual wellness support",
            "Personal growth strategies"
        ],
        video: "https://www.youtube.com/watch?v=IInPxe9bJeg",
        thumbnail: "images/holistic-video.jpg",
        tiers: [
            { name: "Relax", price: "$45 Session" },
            { name: "Renew", price: "$149 Package" },
            { name: "Restore", price: "$299 Package" }
        ]
    }
];


function displayServices() {

    const container =
        document.querySelector("#servicesContainer");

    services.forEach(service => {

        const card =
            document.createElement("div");

        card.classList.add("service-card");

        let benefitsHTML = "";

        service.benefits.forEach(benefit => {
            benefitsHTML += `<li>${benefit}</li>`;
        });

        let tierHTML = "";

        service.tiers.forEach(tier => {
            tierHTML += `
                <div class="pricing-tier">
                    <h4>${tier.name}</h4>
                    <p>${tier.price}</p>
                </div>
            `;
        });

        card.innerHTML = `
            <h3>${service.name}</h3>

            <p>${service.description}</p>

            <ul class="service-benefits">
                ${benefitsHTML}
            </ul>

            <div class="service-video">
                <a href="${service.video}" target="_blank">
                    <img
                        src="${service.thumbnail}"
                        alt="${service.name} video"
                        class="video-thumbnail"
                        loading="lazy"
                        width="400"
                        height="300"
                    >
                    <span class="play-button">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                            <path fill="white" d="M8 5v14l11-7z"/>
                        </svg>
                    </span>
                </a>
            </div>

            ${tierHTML}

            <a href="contact.html" class="book-btn">
                Book Now
            </a>
        `;

        container.appendChild(card);

    });
}

displayServices();

