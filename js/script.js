console.log('Hello Gaël-Freddy GAGOUDE');

/* Header section */
const menu = document.querySelector('.toggleMenu');
const navigationMenu = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    navigationMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

/* Testimonial section */
$('.testimonial-dot img').click(function(){
    $(".testimonial-dot img").removeClass("active");
    $(this).addClass("active");
    
    $(".testimonial").removeClass("active");
    $("#"+$(this).attr("alt")).addClass("active");
});