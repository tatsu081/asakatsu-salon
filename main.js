$(function () {

  // アニメーション
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
        const targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight + 100) {
            $(this).addClass("fadeInDown");
        }
    });
});  
$(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.favorite-anime').each(function () {
        const targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight + 100) {
            $(this).addClass("fadeIn");
        }
    });
});
  
  //ボタン表示
    var pagetop = $('#js-page-top');
      $(window).scroll(function(){
          if($(this).scrollTop() > 200) {
              pagetop.fadeIn();
          } else {
              pagetop.fadeOut();
          }
      });
});

