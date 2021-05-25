let figs = document.getElementsByTagName("figure");
let secs = document.getElementsByClassName("section");
let lines = document.getElementsByTagName("hr");

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("invis");
            entry.target.classList.add("appeared");
        } else if (!entry.isIntersecting) {
            entry.target.classList.remove("appeared");
            entry.target.classList.add("invis");
        }
    });
};



let observer = new IntersectionObserver(callback, options);

function addObserver(elems) {
    for (let i = 0; i < elems.length; ++i) {
        elems[i].classList.add("invis");
        observer.observe(elems[i]);
    }
}

addObserver(figs);
addObserver(secs);
addObserver(lines);
