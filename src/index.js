import "./styles.css";
import renderHome from "./home";
import menu from "./menu";
import { contact } from "./contact";

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
	loadContact() {
		this.clearContent();
		this.content.appendChild(contact);
	}
	assignEvent() {
		const homeBtn = document.querySelector("#home");
		homeBtn.addEventListener("click", () => this.loadHome());
		const menuBtn = document.querySelector("#menu");
		menuBtn.addEventListener("click", () => this.loadMenu());

		const contactBtn = document.querySelector("#contact");
		contactBtn.addEventListener("click", () => this.loadContact());
	}
}

const page = new loadPage();
page.loadHome();
page.assignEvent();
