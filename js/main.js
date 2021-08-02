$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu-btn').on('click', function () {
    $('.menu-btn').toggleClass('menu-btn--active');
  });

  $('.menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu-btn').on('click', function () {
    $('body').toggleClass('body-hidden')
  })

  var mixer = mixitup('.portfolio__content');

});
