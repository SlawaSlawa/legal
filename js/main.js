$(document).ready(function(){
	// Слайдеры
  $(".header-slider").owlCarousel({
  	items: 1,
  	nav: true,
  	navText: ["<img src='img/arrow-left.png'>",
  	 "<img src='img/arrow-right.png'>"],
  	 loop: true,
  	 dots: false,
  	 autoplay: true,
  	 autoplayTimeout: 3000,
  	 smartSpeed: 1000,
     responsive:{
      0:{
            nav: false
        },
        600:{
            nav: true
        }
    }
  });

    $(".historys-slider").owlCarousel({
  	items: 2,
  	nav: true,
  	navText: ["<img src='img/arrow-left-historys.png'>",
  	 "<img src='img/arrow-right-historys.png'>"],
  	 loop: true,
  	 dots: false,
  	 autoplay: true,
  	 autoplayTimeout: 3000,
  	 smartSpeed: 1000,
       responsive:{
      0:{
            items: 1,
            nav: false
        },
      600:{
            items: 1,
            nav: false
        },
      800:{
          items: 1,
          nav: true
        },
      1150:{
          items: 2,
          nav: true
        }
    }
  });

// Ховер картинок

$('.services__item').hover(function(){
	let img = $(this).find('.services__img');
	let imgHoverSrc = img.data('img-hover-src');
	img.attr('src', imgHoverSrc);
},function(){
	let img = $(this).find('.services__img');
	let imgSrc = img.data('img-src');
	img.attr('src', imgSrc);
});


// Модалка
let modal = $(".modal");
let form = $(".form-callback");

$('.header__callback-btn').on('click', function(){
	$(modal).toggleClass('db');
});

$('.modal-close').on('click', function(){
	$(modal).toggleClass('db');
});

$(modal).on('click', function(e){
	if(e.target != form[0] && form.has(e.target).length === 0){
		modal.toggleClass('db');
	}
});

// Выпадающий текст

$('.services__link').on('click', function(e){
	e.preventDefault();
	let linkActive = $(this);
	let textMore = $(this).next();
	$(textMore).toggleClass('db');
	$(linkActive).toggleClass('active__link');
});
// Выпадающий текст новостей
$('.news__read-more').on('click', function(e){
	let linkActive = $(this);
	let textMore = $(this).prev('.news_text');
	let textMoreFinalBlock = $(textMore).find('.news__readmore-text');

	$(textMoreFinalBlock).toggleClass('db');
});

// Кнопка наверх

$(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });


// Переход по якорям

 $("a[href^='#']").click(function(){
    let _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
	return false;
});

// Burger btn

$('.burger-btn').on('click', function(){
  $(this).toggleClass('burger-active');
  $('.nav-wrap').toggleClass('db');
});





});


