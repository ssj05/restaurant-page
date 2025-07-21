import "./menu.css";

// Global variables
const grid = document.createElement("div");
grid.classList.add("menu-grid");

class menuItem {
  constructor(name, price, desc) {
    this.name = name;
    this.price = price;
    this.desc = desc;
  }

  buildItem() {
    const item = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");
    const para = document.createElement("p");

    item.classList.add("menu-item");
    span.classList.add("price");

    h3.innerText = this.name;
    span.innerText = this.price;
    para.innerText = this.desc;

    h3.appendChild(span);
    item.appendChild(h3);
    item.appendChild(para);

    return item;
  }
}

export default function menu() {
  const section = document.createElement("section");
  section.classList.add("menu");

  const heading = document.createElement("h2");
  heading.innerText = "Our Menu";
  section.appendChild(heading);
  section.appendChild(grid);

  return section;
}

const item = [];

item.push(
  new menuItem(
    "Chicken Biriyani",
    "₹220",
    "Spicy, fragrant rice cooked with tender chicken and Hyderabadi spices.",
  ),
  new menuItem(
    "Mutton Biryani",
    "₹280",
    "Slow-cooked basmati rice layered with rich mutton gravy and saffron.",
  ),
  new menuItem(
    "Paneer Biryani",
    "₹200",
    "Vegetarian biryani packed with marinated paneer and traditional masala.",
  ),
  new menuItem(
    "Veg Pulao",
    "₹160",
    "Light and aromatic rice dish with seasonal vegetables and herbs.",
  ),
  new menuItem(
    "Raita",
    "₹50",
    "Cooling yogurt-based side with cucumber and mint — perfect with biryani.",
  ),
  new menuItem(
    "Gulab Jamun",
    "₹70",
    "Soft milk dumplings soaked in rose-flavored syrup for a sweet finish.",
  ),
);

item.forEach((element) => grid.appendChild(element.buildItem()));
