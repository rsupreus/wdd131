// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert(
        "Thank you for contacting Providential Fortitude. We will be in touch soon."
    );

    form.reset();
});