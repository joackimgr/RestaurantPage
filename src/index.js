import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

const content = document.getElementById("content");
const homeBtn = document.querySelector("nav a:nth-child(1)");
const menuBtn = document.querySelector("nav a:nth-child(2)");
const aboutBtn = document.querySelector("nav a:nth-child(3)");

function clearContent() {
    content.innerHTML = "";
}

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    loadAbout();
})

loadHome();