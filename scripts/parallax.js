history.scrollRestoration = "manual";
window.location.hash='';

let banner = document.querySelector(".banner");
let bannerContent = document.querySelector(".main-title");

function parallax() {
    let offset = (window.scrollY / 2).toString() + "px";
    banner.style.backgroundPositionY = "-" + offset;
    bannerContent.style.transform = `translate3d(0, ${offset}, 0) translateY(-50%)`;
}

// https://since1979.dev/respecting-prefers-reduced-motion-with-javascript-and-react/
// Grab the prefers reduced media query.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!window.mobileCheck() && !mediaQuery.matches) {
    // banner.style.height = "calc(100% - 45pt)";
    banner.classList.add("parallax");
    bannerContent.classList.add("parallax");
    document.addEventListener("scroll", parallax, { passive: true });
} else if (mediaQuery.matches) {
    document.documentElement.style.scrollBehavior = "initial";
}