import "./home.css";

function renderHome() {
	const section = document.createElement("section");
	section.classList.add("hero");
	const heading = document.createElement("h2");
	heading.innerText = "Welcome to Divine Biryani";
	const para = document.createElement("p");
	para.innerText =
		"Authentic flavors from Hyderabad. One bite, and you're home.";
	const orderBtn = document.createElement("button");
	orderBtn.classList.add("order-btn");
	orderBtn.innerText = "Order Now";

	section.appendChild(heading);
	section.appendChild(para);
	section.appendChild(orderBtn);

	return section;
}

export default renderHome;
