import "./menu.css";

export default function menu() {
  const section = document.createElement("section");
  section.classList.add("menu");

  const heading = document.createElement("h2");
  heading.innerText = "Our Menu";
  section.appendChild(heading);

  return section;
}

class menuItem {
  constructor(name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
  }
}
