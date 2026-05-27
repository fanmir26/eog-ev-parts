const form = document.querySelector("#quoteForm");
const status = document.querySelector("#formStatus");
const mailLink = document.querySelector("#mailLink");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const brand = data.get("brand");
  const model = data.get("model");
  const part = data.get("part");
  const category = data.get("category") || "Not specified";
  const quantity = data.get("quantity") || "Not specified";
  const vin = data.get("vin") || "Not provided";
  const country = data.get("country");
  const contact = data.get("contact");
  const buyer = data.get("buyer");
  const message = data.get("message") || "No additional message.";

  const subject = `Parts quote request: ${brand} ${model} - ${part}`;
  const body = [
    "Hello EOG EV Parts,",
    "",
    "Please quote the following Chinese EV replacement part:",
    "",
    `Brand: ${brand}`,
    `Model and year: ${model}`,
    `Part needed: ${part}`,
    `Part category: ${category}`,
    `Quantity: ${quantity}`,
    `VIN or part number: ${vin}`,
    `Delivery country: ${country}`,
    `Buyer type: ${buyer}`,
    `Contact: ${contact}`,
    "",
    `Message: ${message}`,
    "",
    "Please confirm fitment, lead time, packing, shipping options, and warranty terms.",
  ].join("\n");

  mailLink.href = `mailto:van.fan26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  mailLink.classList.add("is-visible");
  status.textContent = `Quote draft ready: ${brand} ${model} - ${part}, delivery to ${country}.`;
  form.scrollIntoView({ behavior: "smooth", block: "center" });
});
