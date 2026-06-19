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
        videoId: "nwBsdOXIGyI",
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
        videoId: "3o2jkh7FVpw",
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
        videoId: "IInPxe9bJeg",
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
                <a href="https://www.youtube.com/watch?v=${service.videoId}"
                target="_blank">

                    <img src="https://img.youtube.com/vi/${service.videoId}/maxresdefault.jpg">

                    <div class="play-button">▶</div>

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

