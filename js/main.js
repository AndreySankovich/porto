$(function () {
  $('.menu__btn').on('click', function () {
    $('.header').toggleClass('header--active');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup('.portfolio__content');

});
