var button = document.querySelector(".page-header__toggle");
var nav = document.querySelector(".main-nav");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (nav.classList.contains("main-nav-inactive") != true ) {
        nav.classList.toggle("main-nav-inactive");
    } else {
        nav.classList.toggle("main-nav-active");
    }
})
