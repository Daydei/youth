$(document).ready(function(){

  setTimeout(function(){
    $('.load').removeClass('load__from');
  }, 1000);

  $('.load__enter').on('click', function(){
    $('.load').addClass('load__from');
    setTimeout(function(){
      $('.load').fadeOut();
    }, 2000);
    setTimeout(function(){
      $('body').css('overflow', 'auto');
    }, 2000)
  })

	$('.text__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear'
});
$('.prev').click(function(){
  $('.text__slider').slick('slickPrev');
})

$('.next').click(function(){
  $('.text__slider').slick('slickNext');
});
mapInfo = $('.map__wrapper');
// Создаем маркер на карте
var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 54.31278386444832, lng: 48.40201979246524},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Конференция',
    icon: '../img/icon_map.png'
});
google.maps.event.addListener(marker, 'click', function() {
   mapInfo.css({
    'width':'auto',
    'visibility':'visible',
    'opacity':'1'
   })
});
$('.icon-cross').on('click', function(){
  mapInfo.css({
    'width':'0',
    'visibility':'hidden',
    'opacity':'0'
   })
})

var tl = new TimelineMax({});
  tl 
    .from($('.hero__content--text'),1,{
      opacity: "0",
      y: "200px"
    })
    .from($('.header__logo--img'),1,{
      opacity: "0",
      x: "-100px", ease:Bounce.easeOut
    })
    .staggerFromTo($('.header__nav--link'),1,{opacity: "0",x: "200px"},{opacity: "1", x: "0px"}, 0.3)
    .from($('.hero__footer--text'),1,{
      opacity: "0"
    })
});