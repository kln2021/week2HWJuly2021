let position = 0;
function previousImage() {
    const slider = document.getElementById("slider");
    if ( position < 0) {
        position += 300;
    }
    slider.style.transform = `translateX(${position}px)`;
}
function nextImage () {
    const slider = document.getElementById('slider');
    if (position > -2400) {
        position -= 300;
    }
        slider.style.transform = `translateX(${position}px)`;
}
