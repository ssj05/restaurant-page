import "./contact.css";
//Main contact section
export const contact = document.createElement("section");
contact.classList.add("contact-page");
//Heading "contact us"
const h2 = document.createElement("h2");
h2.innerText = "Contact Us";

//Container
const container = document.createElement("div");
container.classList.add("contact-container");

//Contact details of the restaurant
const details = document.createElement("div");
details.classList.add("contact-details");

//Address
const address = document.createElement("p");
const addressLabel = document.createElement("strong");
addressLabel.innerText = "📍 Address:  ";
address.appendChild(addressLabel);
address.append("123 Curry Lane, Spice City, India");
details.appendChild(address);

//Phone
const phone = document.createElement("p");
const phoneLabel = document.createElement("strong");
phoneLabel.innerText = "📞 Phone:  ";
phone.appendChild(phoneLabel);
phone.append("+91 98765 43210");
details.appendChild(phone);

//Email
const email = document.createElement("p");
const emailLabel = document.createElement("strong");
emailLabel.innerText = "📧 Email:  ";
email.appendChild(emailLabel);
email.append("info@divinebiriyani.com");
details.appendChild(email);

//Form to collect data from customers
const form = document.createElement("form");
form.classList.add("contact-form");

//Collect name from customer
const customerNameLabel = document.createElement("label");
customerNameLabel.innerText = "Name: ";
const customerName = document.createElement("input");
customerName.setAttribute("type", "text");
customerName.setAttribute("placeholder", "Your Name");
customerName.setAttribute("required", "");

customerNameLabel.appendChild(customerName);
form.appendChild(customerNameLabel);

//Collect email from customer
const customerEmailLabel = document.createElement("label");
customerEmailLabel.innerText = "Email: ";
const customerEmail = document.createElement("input");
customerEmail.setAttribute("type", "email");
customerEmail.setAttribute("placeholder", "example@email.com");
customerEmail.setAttribute("required", "");

customerEmailLabel.appendChild(customerEmail);
form.appendChild(customerEmailLabel);

//Collect message from customer
const customerMessageLabel = document.createElement("label");
customerMessageLabel.innerText = "Email: ";
const customerMessage = document.createElement("textarea");
customerMessage.setAttribute("placeholder", "Your message...");
customerMessage.setAttribute("rows", "4");
customerMessage.setAttribute("required", "");

customerMessageLabel.appendChild(customerMessage);
form.appendChild(customerMessageLabel);

//Submit Button
const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.innerText = "Send Message";

form.appendChild(submit);

container.appendChild(details);
container.appendChild(form);
contact.appendChild(h2);
contact.appendChild(container);
