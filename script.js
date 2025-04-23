function initSlider(wrapperSelector, prevButtonId, nextButtonId) {
    const wrapper = document.querySelector(wrapperSelector);
    const imageList = wrapper.querySelector(".image_list");
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);
    const slideButtons = [prevButton, nextButton];

    const imageWidth = 325;
    const gap = 18;

    const updateButtons = () => {
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        prevButton.style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display = imageList.scrollLeft >= maxScrollLeft - 5 ? "none" : "block"; // small buffer
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const scrollAmount = button.id.includes("next") ? imageWidth + gap : -(imageWidth + gap);
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    imageList.addEventListener("scroll", updateButtons);

    updateButtons(); // initial check
}

// Initialize all sliders
document.addEventListener("DOMContentLoaded", () => {
    initSlider(".slider_wrapper", "prev-slide", "next-slide");
    initSlider(".slider_wrapper2", "prev-slide2", "next-slide2");
    initSlider(".slider_wrapper3", "prev-slide3", "next-slide3");
    initSlider(".slider_wrapper4", "prev-slide4", "next-slide4");
    initSlider(".slider_wrapper5", "prev-slide5", "next-slide5");
    initSlider(".slider_wrapper6", "prev-slide6", "next-slide6");
});














































document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".before-after-container .slider");
    const beforeImage = document.querySelector(".before-after-container .before-image");

    slider.addEventListener("input", function () {
        beforeImage.style.width = `${this.value}%`;
    });
});
