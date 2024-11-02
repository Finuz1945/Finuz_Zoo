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
const tanahContainer = document.getElementById("tanah");
const ukuranAwan = 150;

const screenWidth = window.innerWidth;

const awanPerBaris = Math.floor(screenWidth / ukuranAwan);
const tanahPerBaris = Math.floor(screenWidth / ukuranAwan);

awanContainer.innerHTML = "";
tanahContainer.innerHTML = "";

for (let i = 1; i <= awanPerBaris; i++) {
  const imgAwan = document.createElement("img");

  imgAwan.src = "./img/awan.png";
  imgAwan.width = ukuranAwan;
  imgAwan.height = ukuranAwan;
  imgAwan.alt = `awan${i}`;

  awanContainer.appendChild(imgAwan);
}
for (let i = 1; i <= tanahPerBaris; i++) {
  const imgTanah = document.createElement("img");

  imgTanah.src = "./img/tanah.png";
  imgTanah.width = ukuranAwan;
  imgTanah.height = ukuranAwan;
  imgTanah.alt = `tanah${i}`;

  tanahContainer.appendChild(imgTanah);
}

document.querySelector("a[href='#tanah']").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah aksi default agar kita bisa mengontrol scroll
  const tanah = document.getElementById("tanah");

  // Scroll dengan offset untuk memperhitungkan tinggi navbar
  window.scrollTo({
    top: tanah.offsetTop - navbar.offsetHeight,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("beranda");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    document.body.style.paddingTop = "0";
  }
}
