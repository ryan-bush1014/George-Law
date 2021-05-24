history.scrollRestoration = "manual";

let banner = document.querySelector(".banner");
let bannerContent = document.querySelector(".main-title");

function parallax() {
    let offset = (window.scrollY / 2).toString() + "px";
    banner.style.backgroundPositionY = "-" + offset;
    bannerContent.style.transform = `translate3d(-50%, ${offset}, 0)`;
}

if (!window.mobileCheck()) {
    // banner.style.height = "calc(100% - 45pt)";
    banner.style.position = "absolute";
    bannerContent.style.position = "relative";
    banner.style.backgroundAttachment = "fixed";
    document.addEventListener("scroll", parallax, { passive: true });
} else {
    bannerContent.style.marginTop = "-40pt";
    bannerContent.style.fontSize = "18pt";
}
