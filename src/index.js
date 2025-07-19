import "./styles.css";
import renderHome from "./home";

function clearContent() {
	const content = document.querySelector("#content");
	content.replaceChildren();
}

function loadHome() {
	clearContent();
	const content = document.querySelector("#content");
	content.appendChild(renderHome());
}

loadHome();
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", loadHome);
