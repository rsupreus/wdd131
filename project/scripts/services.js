const services = [
    {
        name: "Fitness",
        description: "Personalized training programs designed to improve strength, mobility, endurance, and overall wellness.",
        tiers: [
            { name: "Starter", price: "$49 / Session" },
            { name: "Growth", price: "$179 / Month" },
            { name: "Transformation", price: "$349 / Month" }
        ]
    },

    {
        name: "Nutrition",
        description: "Customized nutrition coaching and wellness planning tailored to your goals and lifestyle.",
        tiers: [
            { name: "Starter", price: "$59 Consultation" },
            { name: "Wellness Plan", price: "$199 Package" },
            { name: "Complete Coaching", price: "$399 Package" }
        ]
    },

    {
        name: "Holistic Health",
        description: "Mind-body wellness services focused on balance, stress reduction, and personal growth.",
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

            ${tierHTML}

            <a href="contact.html" class="book-btn">
                Book Now
            </a>
        `;

        container.appendChild(card);

    });
}

displayServices();

