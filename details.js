const hostels = [
  {
    name: "Anieu Girls PG",
    price: 3000,
    images: [
      "hostel1.jpg",
      "hostel1b.jpg",
      "hostel1c.jpg"
    ],
    desc: "Affordable shared living with basic facilities.",
    amenities: [
      "Bed",
      "Water Supply",
      "Electricity",
      "WiFi",
      "Fan",
      "Security"
    ],
    rules: "No loud noise after 10PM",
    contact: "9876543210"
  },
  {
    name: "Hill Boys Hostel",
    price: 6000,
    images: [
      "hill1.jpg",
      "hill2.jpg",
      "hill3.jpg"
    ],
    desc: "Spacious room with study area.",
    amenities: [
      "Bed",
      "Study Table",
      "WiFi",
      "Electricity",
      "Water Supply",
      "Cupboard",
      "Attached Bathroom"
    ],
    rules: "Maintain cleanliness",
    contact: "9123456780"
  },
  {
    name: "OstelHub Campus View",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    desc: "Peaceful environment.",
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
    contact: "9988776655"
  }
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
