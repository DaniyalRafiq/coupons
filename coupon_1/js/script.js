
$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".nav_links").slideToggle();
    $(this).find('.ti').toggleClass("ti-x");
  });
  $(".ti-caret-down").click(function () {
    $(this)(".cate_bottom").slideToggle();
    $(this).toggleClass("ti-caret-down").toggleClass('ti-caret-up')
  })
});

var swiper = new Swiper(".cate_silde_main", {
  loop: true,
  slidesPerView: "auto",
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

});


var swiper = new Swiper(".store_swiper", {
  slidesPerView: "auto",
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$('.copy_code').click(function(e) {
  e.preventDefault();
  var copyText = $(this).attr('data-copytext');
  $('.copy_status').text('Text copied to clipboard');
  navigator.clipboard.writeText(copyText);
  
  console.log('Text copied to clipboard: ' + copyText);
  // You can show a success message or perform other actions here
});