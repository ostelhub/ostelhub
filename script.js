const hostels = [
  {
    name: "Anieu Girls PG",
    price: 3000,
    images: [
      "hostel1.jpg",
      "hostel1b.jpg",
      "hostel1c.jpg"
    ],
  },
  {
    name: "Hill Boys Hostel",
    price: 6000,
    images: [
      "hill1.jpg",
      "hill2.jpg",
      "hill3.jpg"
    ],
    desc: "Spacious room with study area and storage."
  },
  {
    name: "Jeremy Boys Hostel",
    price: 6000,
    images: [
      "ost1.jpg",
      "ost2.jpg",
      "ost3.jpg"
    ],
    desc: "Peaceful environment with parking space."
  },
  {
    name: "Jenesis Boys Hostel",
    price: 6000,
    images: [
      "jen3.jpg",
      "jen2.jpg",
      "jen1.jpg"
    ],
    desc: "Peaceful environment with parking space."
  },
  {
    name: "Agape Girls Hostel",
    price: 6000,
    images: [
      "ag1.jpg",
      "ag2.jpg",
      "ag3.jpg"
    ],
    desc: "Peaceful environment with parking space."
  },
  {
    name: "Phezhu Girls Hostel",
    price: 6000,
    images: [
      "phe1.jpg",
      "phe2.jpg",
      "phe3.jpg"
    ],
    desc: "Peaceful environment with parking space."
  }
];

const container = document.getElementById("hostelContainer");

function displayHostels() {
  container.innerHTML = "";

  hostels.forEach((h, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-slider">
        <div class="card-track">
          ${h.images.map(img => `<img src="${img}">`).join("")}
        </div>
        <button class="card-btn prev">❮</button>
        <button class="card-btn next">❯</button>
      </div>

      <div class="card-content">
        <h3>${h.name}</h3>
        <p class="price">₹${h.price}/month</p>
        
      </div>
    `;

    // CLICK → DETAILS PAGE
    card.onclick = () => {
      window.location.href = `details.html?id=${index}`;
    };

    const track = card.querySelector(".card-track");
    let i = 0;

    card.querySelector(".next").onclick = (e) => {
      e.stopPropagation();
      i = (i + 1) % h.images.length;
      track.style.transform = `translateX(-${i * 100}%)`;
    };

    card.querySelector(".prev").onclick = (e) => {
      e.stopPropagation();
      i = (i - 1 + h.images.length) % h.images.length;
      track.style.transform = `translateX(-${i * 100}%)`;
    };

    container.appendChild(card);
  });
}

displayHostels();
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
  navMenu.classList.toggle("active");
};
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
