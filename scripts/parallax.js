history.scrollRestoration = "manual";
window.location.hash='';

var banner = document.querySelector(".banner");
var bannerContent = document.querySelector(".banner-content");

function parallax() {
    var offset = (window.scrollY / 2).toString() + "px";
    var far_offset = (window.scrollY / 3).toString() + "px";
    banner.style.backgroundPositionY = "-" + far_offset;
    bannerContent.style.transform = `translate3d(0, ${offset}, 0) translate(-50%, -50%)`;
}

// https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/
// Grab the prefers reduced media query.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!window.mobileCheck() && !mediaQuery.matches) {
    // banner.style.height = "calc(100% - 45pt)";
    banner.classList.add("parallax");
    bannerContent.classList.add("parallax");
    document.addEventListener("scroll", parallax, { passive: true });
} else if (window.mobileCheck()) {
    bannerContent.style.marginTop = "-5vh";
}