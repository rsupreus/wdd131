// Display current year

document.getElementById("currentyear").innerHTML =
new Date().getFullYear();


// Display last modified date

document.getElementById("lastModified").innerHTML =
`Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});