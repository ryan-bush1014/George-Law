var figs = document.getElementsByTagName("figure");
var secs = document.getElementsByClassName("section");
var lines = document.getElementsByTagName("hr");

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
}

var callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("invis");
        }
    });
};



var observer = new IntersectionObserver(callback, options);

function addObserver(elems) {
    for (var i = 0; i < elems.length; ++i) {
        elems[i].classList.add("invis");
        observer.observe(elems[i]);
    }
}

// Check if the media query matches or is not available.
if (!mediaQuery.matches) {
    if (!window.mobileCheck()) {
        addObserver(figs);
    }
    addObserver(secs);
    addObserver(lines);
}
