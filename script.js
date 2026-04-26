const hostels = [
  {
    name: "Anieu Girls PG",
    price: 3000,
    images: [
      "hostel1.jpg",
      "hostel1b.jpg",
      "hostel1c.jpg"
    ],
    desc: "Affordable shared living with basic facilities."
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
    name: "OstelHub Campus View",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
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
        <p>${h.desc}</p>
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
