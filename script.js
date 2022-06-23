$(function(){
    let hea = $('.header');
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 1) {
            hea.addClass('header_fixed');
        } else {
            hea.removeClass('header_fixed');
        }
    });
    });
    
    $(function() {
        let hea = $('.header');
        let hederHeight = hea.height();
         
        $(window).scroll(function() {
          if($(this).scrollTop() > 1) {
           hea.addClass('header_fixed');
           $('body').css({
              'paddingTop': hederHeight+'px' 
           });
          } else {
           hea.removeClass('header_fixed');
           $('body').css({
            'paddingTop': 0 
           })
          }
        });
       });

$(function(){
    let menu = $('.menu');

    $(window).scroll(function(){
        if($(this).scrollTop() > 1) {
            menu.addClass('ul_none');
        } else {
            menu.removeClass('ul_none');
        }
});
});

$(function(){
    let menu2 = $('.menu_novis');

    $(window).scroll(function(){
        if($(this).scrollTop() > 1) {
            menu2.addClass('menu_vis');
        } else {
            menu2.removeClass('menu_vis');
        }
});
});

var slideIndex = 1;
showSlides(slideIndex);

function next() {
    showSlides(slideIndex += 1);
}
function previous() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("prog1");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top}, 1500);
    return false;
});