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