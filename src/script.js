document.getElementById("menuToggle").addEventListener("click", function() {
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
