import mainPage from "./pages/main.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";

const picoCss = document.createElement("link");
picoCss.rel = "stylesheet";
picoCss.href = "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css";
document.head.appendChild(picoCss);


function changePage(page, url = "test"){
    const newPage = page;
    const newUrl = url;
    return () => {
        contentDiv.innerHTML = "";
        contentDiv.append(newPage);
        // window.history.replaceState(null, document.title, newUrl);
    }
}

const contentDiv = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const homeAction = changePage(mainPage, "home");
const menuButton = document.getElementById("menu-button");
const menuAction = changePage(menuPage, "menu");
const aboutButton = document.getElementById("about-button");
const aboutAction = changePage(aboutPage, "about");

contentDiv.append(mainPage);


homeButton.addEventListener("click", homeAction);
menuButton.addEventListener("click", menuAction);
aboutButton.addEventListener("click", aboutAction);
