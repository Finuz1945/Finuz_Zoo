// Menu toggle functionality
document.getElementById("menuToggle").addEventListener("click", function () {
  const navbarNav = document.getElementById("navbarNav");
  navbarNav.classList.toggle("active");

  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    if (navbarNav.classList.contains("active")) {
      if (index === 0) {
        bar.style.transform = "rotate(-45deg) translate(-7px, 7px)";
      } else if (index === 1) {
        bar.style.opacity = "0";
      } else {
        bar.style.transform = "rotate(45deg) translate(-8px, -8px)";
      }
    } else {
      bar.style.transform = "none";
      bar.style.opacity = "1";
    }
  });
});

// Add scene elements (clouds, ground)
const awanContainer = document.getElementById("langit");
const tanahContainer = document.getElementById("tanah");
const ukuranAwan = 80;

const screenWidth = window.innerWidth;
const awanPerBaris = Math.ceil(screenWidth / ukuranAwan);
const tanahPerBaris = Math.ceil(screenWidth / ukuranAwan);

// Add clouds
for (let i = 1; i <= awanPerBaris; i++) {
  const imgAwan = document.createElement("img");
  imgAwan.src = "./img/awan.png";
  imgAwan.height = ukuranAwan;
  imgAwan.alt = `awan${i}`;
  imgAwan.style.transform = `translateY(${Math.random() * 10}px)`;
  awanContainer.appendChild(imgAwan);
}

// Add ground elements
for (let i = 1; i <= tanahPerBaris; i++) {
  const imgTanah = document.createElement("img");
  imgTanah.src = "./img/tanah.png";
  imgTanah.height = ukuranAwan;
  imgTanah.alt = `tanah${i}`;
  tanahContainer.appendChild(imgTanah);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    const navbar = document.getElementById("beranda");

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navbar.offsetHeight,
        behavior: "smooth",
      });
    }
  });
});

// Sticky navbar
window.onscroll = function () {
  makeNavbarSticky();
};

const navbar = document.getElementById("beranda");
const sticky = navbar.offsetTop;

function makeNavbarSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    document.body.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.remove("sticky");
    document.body.style.paddingTop = "0";
  }
}
