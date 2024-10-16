const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
//console.log (adressbtn)
adressbtn.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "flex"

})
adressclose.addEventListener("click", function () {
    document.querySelector('.adress-form').style.display = "none"

})

//#################################################

let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-image");
const dots = document.querySelectorAll(".dot");

function showImage(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active-dot");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active-dot");
}

function autoSlide() {
    let nextSlide = (currentSlide + 1) % slides.length;
    showImage(nextSlide);
}

setInterval(autoSlide, 3000); // Tự động chuyển ảnh sau 3 giây