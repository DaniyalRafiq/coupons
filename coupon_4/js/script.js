$(document).ready(function () {
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
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
    $(".nav_main").toggleClass("active");
    $("body").toggleClass("active");
  });
  var inputField = $(".header_form input");

  // Add an event listener for input change
  inputField.on("input", function () {
    // Check if the input field is empty
    if (inputField.val().trim() !== "") {
      // Slide down the header_form_result
      $(".header_form_result").slideDown();
    } else {
      // Slide up the header_form_result
      $(".header_form_result").slideUp();
    }
  });
  $(".filter_btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  var swiper = new Swiper(".category_main ", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.category_btn_next",
      prevEl: ".swiper-button-prev.category_btn_prev",
    },
    autoplay: {
      delay: 5000, // Adjust the delay (in milliseconds) between slides
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
    },
    speed: 900,
  });

  var swiper = new Swiper(".latest_blog_main", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000, // Adjust the delay (in milliseconds) between slides
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
    },
    speed: 900,
  });
  var swiper = new Swiper(".latest_news_wrapper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next.latest_mews_next",
      prevEl: ".swiper-button-prev.latest_mews_prev",
    },
    autoplay: {
      delay: 7000, // Adjust the delay (in milliseconds) between slides
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 900,
  });

  let questions = document.querySelectorAll(".faq_question");

  questions.forEach((question) => {
    let icon = question.querySelector(".icon-shape");

    question.addEventListener("click", (event) => {
      const active = document.querySelector(".faq_question.active");
      const activeIcon = document.querySelector(".icon-shape.active");
      if (active && active !== question) {
        active.classList.toggle("active");
        activeIcon.classList.toggle("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      question.classList.toggle("active");
      icon.classList.toggle("active");

      const answer = question.nextElementSibling;

      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });

  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".view").click(function () {
    $(this).toggleClass("active");
    $(this).siblings(".category_card_main").toggleClass("open");
    $(this)
      .closest(".category_card_wrapper")
      .find(".category_card_list_main")
      .slideToggle();
  });

  var hero_swiper = new Swiper(".hero_wrapper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000, // Set the delay in milliseconds (e.g., 3000 for 3 seconds)
    },
  });
  
  var hero_thump_swiper = new Swiper(".hero_thump", {
    slidesPerView: "auto",
    spaceBetween: 3,
    direction: 'horizontal',
    allowTouchMove : false ,
    breakpoints: {
      792: {
        direction: 'vertical',
      },
      autoplay: {
        delay: 5000, // Set the delay in milliseconds (e.g., 3000 for 3 seconds)
      },
    }
  });
  hero_swiper.controller.control = hero_thump_swiper;
  hero_thump_swiper.controller.control = hero_swiper;

  $('#input_result').on('focus', function () {
    $('.header_result').slideDown();
});

$('#input_result').on('blur', function () {
    $('.header_result').slideUp();
});


});
