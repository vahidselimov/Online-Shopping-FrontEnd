$('.icones-carousel').slick({
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    autoplay: false,
    autoplaySpeed: 2500,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 700,
        settings: {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
const div = document.getElementById('offline');
const div2 = document.getElementById('online');



window.addEventListener('online', () => {
    div.style.display = 'none'
    setTimeout(() => {
        div2.style.display = 'block'
    }, 1000);
    setTimeout(() => {
        div2.style.display = 'none'
    }, 3000);
}
);
window.addEventListener('offline', () => {
    div2.style.display = 'none'
    setTimeout(() => {
        div.style.display = 'block'
    }, 1000);
    setTimeout(() => {
        div.style.display = 'none'
    }, 8000);
});
