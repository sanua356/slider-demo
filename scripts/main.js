//Импортирован Swiper и facts(массив объектов) из сторонних файлов

const sliderMain = new Swiper(".slider__main", {
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
        sensitivity: 5,
    },
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        },
    },
});

const sliderBackground = new Swiper(".slider__background", {
    centeredSlides: true,
    spaceBetween: 60,
    parallax: true,
    slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBackground;

const items = document.querySelectorAll(".slide__item");
const slider = document.querySelector(".slider__main");

const factArea = document.querySelector(".fact-area");

factArea.onclick = () => {
    factArea.classList.add("disable");
};

const factTitle = document.querySelector(".fact__title"),
    factAnswer = document.querySelector(".fact__answer"),
    factDescription = document.querySelector(".fact__description"),
    fact__img = document.querySelector(".fact__img");

items.forEach((item) => {
    item.onclick = () => {
        factArea.classList.remove("disable");
        factTitle.innerHTML = facts[sliderMain.clickedIndex].title;
        factAnswer.innerHTML = facts[sliderMain.clickedIndex].answer;
        factDescription.innerHTML = facts[sliderMain.clickedIndex].description;
        fact__img.src = `./assets/${+sliderMain.clickedIndex + 1}.jpg`;
    };
});

let mainText = document.querySelector(".mainText");

sliderMain.on("slideChange", () => {
    if (sliderMain.activeIndex === 0) {
        mainText.classList.remove("hide");
    } else {
        mainText.classList.add("hide");
    }
});
