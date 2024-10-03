document.getElementById("menuToggle").addEventListener("click", function () {
  const navbarNav = document.getElementById("navbarNav");
  navbarNav.classList.toggle("active");

  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    if (navbarNav.classList.contains("active")) {
      if (index === 0) {
        bar.style.transform = "rotate(-45deg) translate(-6px, 11px)";
      } else if (index === 1) {
        bar.style.opacity = "0";
      } else {
        bar.style.transform = "rotate(45deg) translate(-4px, -9px)";
      }
    } else {
      bar.style.transform = "none";
      bars[1].style.opacity = "1";
    }
  });
});
const awanContainer = document.getElementById("awan");
const ukuranAwan = 150; // Ukuran tetap untuk setiap gambar awan (150px x 150px)

// Dapatkan ukuran layar
const screenWidth = window.innerWidth;

// Hitung berapa banyak awan yang bisa ditampilkan dalam satu baris (tanpa overflow)
const awanPerBaris = Math.floor(screenWidth / ukuranAwan);

// Bersihkan container sebelum menambahkan awan baru
awanContainer.innerHTML = "";

// Tambahkan gambar awan ke dalam satu baris
for (let i = 1; i <= awanPerBaris; i++) {
  // Buat elemen gambar baru
  const imgAwan = document.createElement("img");

  // Tentukan atribut untuk gambar
  imgAwan.src = "./img/awan.png";
  imgAwan.width = ukuranAwan;
  imgAwan.height = ukuranAwan;
  imgAwan.alt = `awan${i}`;

  // Tambahkan gambar ke dalam container
  awanContainer.appendChild(imgAwan);
}
