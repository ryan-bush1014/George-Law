// https://stackoverflow.com/questions/36191797/how-to-check-if-css-value-is-supported-by-the-browser
function cssPropertyValueSupported(prop, value) {
    var d = document.createElement('div');
    d.style[prop] = value;
    return d.style[prop] === value;
}

if (CSS.supports('backdrop-filter', 'blur(10px)')) {
    console.log("CSS \'backdrop-filter\' supported - upgraded styles implemented");
    document.querySelector(".hamburger-container").classList.add("blur");
    document.querySelector(".links").classList.add("blur");
}