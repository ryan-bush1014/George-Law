// https://stackoverflow.com/questions/36191797/how-to-check-if-css-value-is-supported-by-the-browser
function cssPropertyValueSupported(prop, value) {
    var d = document.createElement('div');
    d.style[prop] = value;
    return d.style[prop] === value;
}

if (CSS.supports('backdrop-filter', 'blur(10px)')) {
    console.log("CSS \'backdrop-filter\' supported - upgraded styles implemented");
    document.querySelector(".hamburger-container").style.backgroundColor = "rgba(10, 10, 10, 0.9)";
    let links = document.querySelector(".links").children;
    for (let i = 0; i < links.length; ++i) {
        links[i].style.backgroundColor = "rgba(17, 17, 17, 0.75)";
    }
}