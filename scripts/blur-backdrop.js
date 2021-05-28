if (CSS.supports('backdrop-filter', 'blur(10px)')) {
    console.log("CSS \'backdrop-filter\' supported - upgraded styles implemented");
    document.querySelector(".hamburger-container").classList.add("blur");
    document.querySelector(".links").classList.add("blur");
}