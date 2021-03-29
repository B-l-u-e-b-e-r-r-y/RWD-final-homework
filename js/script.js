$(document).ready(function () {
    $('.showmenu').on('click', () => {
        $('.wrap').toggleClass('menu-show');
    });

    const nav = document.querySelector('.header');
    const navHeight = nav.offsetTop;
    $(window).on('scroll', () => {
        if (window.scrollY > navHeight) {
            $('.header').css('background-color', '#3d1101');
        } else {
            $('.header').css('background-color', 'rgba(0, 0, 0, 0.75)');
        }
    });
});