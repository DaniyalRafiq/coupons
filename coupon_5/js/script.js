$(document).ready(function () {
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".menu").click(function () {
    $(".nav_main").toggleClass("active");
    $("body").toggleClass("active");
  });

  $(".filter_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  var image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image, {
    delay: 0,
  });

  var heroSwiper = new Swiper(".hero_wrapper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
    thumbs: {
      swiper: {
        el: ".hero_thump_main",
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    },
  });
  $(".filter-btn").click(function () {
    $(".filters").toggle();
  });

  $(".filters button").click(function () {
    const filter = $(this).data("filter");
    applyFilter(filter);
  });

  function applyFilter(filter) {
    // Add your logic to apply the selected filter
    console.log(`Filter Applied: ${filter}`);
  }
});
