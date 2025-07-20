import "./styles.css";
import renderHome from "./home";
import menu from "./menu";

class loadPage {
	content = document.querySelector("#content");

	clearContent() {
		this.content.replaceChildren();
	}

	loadHome() {
		this.clearContent();
		this.content.appendChild(renderHome());
	}

	loadMenu() {
		this.clearContent();
		this.content.appendChild(menu());
	}
	assignEvent() {
		const homeBtn = document.querySelector("#home");
		homeBtn.addEventListener("click", () => this.loadHome());
		const menuBtn = document.querySelector("#menu");
		menuBtn.addEventListener("click", () => this.loadMenu());
	}
}

const page = new loadPage();
page.loadHome();
page.assignEvent();
