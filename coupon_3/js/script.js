$(document).ready(function () {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  $(".alphabet").first().addClass("active");

  $(".alphabet").click(function () {
    $(this).addClass("active");
    $(this).parent("").siblings().find(".alphabet").removeClass("active");
  });

  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }
  $(".menu").click(function () {
    $(".nav_main ul").toggleClass("active");
    $(".menu .ti").toggleClass("ti-pointer-search ti-x");
    $("body").toggleClass("active");
  });

  $(".search_btn").click(function () {
    $(".header_form").toggleClass("active");
    $(".logo_main").toggleClass("active");
  });

  $(".header_form_field").submit(function (e) {
    e.preventDefault();
  });
  var swiper = new Swiper(".filter_main", {
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 10,
    autoplay: {
      delay: 3000, // Time in milliseconds between slides
      disableOnInteraction: false, // Set to true to disable autoplay when user interacts with the slider
    },
  });

  var swiper = new Swiper(".home_popular_store_wrapper", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }

      // Close other open accordion items
      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = 0;
        }
      });
    });
  });

  $("#searchInput").on("focus", function () {
    $(".header_result").slideDown();
  });

  $("#searchInput").on("blur", function () {
    $(".header_result").slideUp();
  });

  var swiper = new Swiper(".hero_store_card_wrapper", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper_hero_store_main > .swiper-button-next",
      prevEl: ".swiper_hero_store_main > .swiper-button-prev",
    },
  });

  var swiper = new Swiper(".hero_coupon_wrapper.swiper", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper_hero_coupon_btn_main > .swiper-button-next",
      prevEl: ".swiper_hero_coupon_btn_main > .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
  });
});
