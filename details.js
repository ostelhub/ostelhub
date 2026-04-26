const hostels = [
  {
    name: "Anieu Girls PG",
    price: 3000,
    images: [
      "hostel1.jpg",
      "hostel1b.jpg",
      "hostel1c.jpg"
    ],
    desc: "₹4500",
    amenities: [
      "Single And Double Room",
      "Water Supply",
      "Electricity",
      "WiFi",
      "Security"
    ],
    rules: "No loud noise after 10PM",
    contact: "**********"
  },
  {
    name: "Hill Boys Hostel",
    price: 6000,
    images: [
      "hill1.jpg",
      "hill2.jpg",
      "hill3.jpg"
    ],
    desc: "₹5000",
    amenities: [
      "Single And Double Room",
      "Study Table",
      "WiFi",
      "Electricity",
      "Water Supply",
      "Cupboard",
      "Attached Bathroom"
    ],
    rules: "Maintain cleanliness",
    contact: "**********"
  },
  {
    name: "Jeremy Boys Hostel",
    price: 8500,
    images: [
      "ost1.jpg",
      "ost2.jpg",
      "ost3.jpg"
    ],
    desc: "₹5000",
    amenities: [
      "Parking",
      "Security",
      "WiFi",
      "24/7 Water",
      "Electricity",
      "Garden Area",
      "Power Backup"
    ],
    rules: "Gate closes at 9PM",
    contact: "**********"
  }
   {
    name: "Jenesis Boys Hostel",
    price: 6000,
    images: [
      "jen3.jpg",
      "jen2.jpg",
      "jen1.jpg"
    ],
    desc: "₹5000",
    amenities: [
      "Single And Double Room",
      "Study Table",
      "WiFi",
      "Electricity",
      "Water Supply",
      "Cupboard"
    ],
    rules: "Gate Closed After 8PM",
    contact: "**********"
  },
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const hostel = hostels[id];

// FILL DATA
document.getElementById("detailName").innerText = hostel.name;
document.getElementById("detailPrice").innerText = `₹${hostel.price}/month`;
document.getElementById("detailDesc").innerText = hostel.desc;
const amenitiesContainer = document.getElementById("detailAmenities");

function getIcon(name) {
  if (name.toLowerCase().includes("wifi")) return "📶";
  if (name.toLowerCase().includes("ac")) return "❄️";
  if (name.toLowerCase().includes("water")) return "🚿";
  if (name.toLowerCase().includes("electricity")) return "⚡";
  if (name.toLowerCase().includes("bed")) return "🛏️";
  if (name.toLowerCase().includes("security")) return "🔒";
  if (name.toLowerCase().includes("parking")) return "🚗";
  if (name.toLowerCase().includes("bathroom")) return "🛁";
  return "✔️";
}

amenitiesContainer.innerHTML = hostel.amenities
  .map(item => `
    <div class="amenity">
      <span class="amenity-icon">${getIcon(item)}</span>
      <span>${item}</span>
    </div>
  `)
  .join("");
document.getElementById("detailRules").innerText = hostel.rules;
document.getElementById("detailContact").innerText = hostel.contact;

// IMAGE SLIDER
const track = document.getElementById("imageTrack");
let current = 0;

hostel.images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  track.appendChild(img);
});

function updateSlide() {
  track.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector(".next").onclick = () => {
  current = (current + 1) % hostel.images.length;
  updateSlide();
};

document.querySelector(".prev").onclick = () => {
  current = (current - 1 + hostel.images.length) % hostel.images.length;
  updateSlide();
};
