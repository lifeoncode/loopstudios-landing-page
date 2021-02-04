window.addEventListener('DOMContentLoaded', function(e){
    // add a background color to the header when scrolling
    window.addEventListener('scroll', scrollEvent);
    function scrollEvent(e){
        const header = document.querySelector('header');
        header.classList.add('scrolled');
    }

    // menu toggle
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
    function openMenu(e){
        menu.classList.add('open');
    }
    function closeMenu(e){
        menu.classList.remove('open');
    }

})