$(document).ready(function () {
  // $(".search_haader").click(function (e) {
  //   $(this).children().toggleClass('ti-search').addClass("ti-minus") // Toggle the "active" class on the clicked element
  //   $(this).siblings('.navbar_search_main').toggleClass("active");

  // });
  $(".menu").click(function (e) {
    $(".nav_links").toggleClass("active");
    $("body").toggleClass("fixed");
  });
  const $searchInput = $("#searchInput");
  const $searchResult = $(".search_result");
  const $noResults = $("#noResults");
  const $resultCards = $(".search_card");
  const $navbarSearch = $(".navbar_search");

  $searchInput.on("input", handleSearchInput);
  $(document).on("click", handleOutsideClick);

  function handleSearchInput() {
    const searchTerm = $searchInput.val().trim().toLowerCase();

    if (searchTerm === "") {
      // If the search input is empty, hide all search result cards and hide the "No Results Found" message
      $resultCards.css("display", "none");
      $noResults.css("display", "none");
      return;
    }

    let hasResults = false;
    $resultCards.each(function () {
      const cardContent = $(this).text().toLowerCase();
      if (cardContent.includes(searchTerm)) {
        $(this).css("display", "flex");
        hasResults = true;
      } else {
        $(this).css("display", "none");
      }
    });

    $noResults.css("display", hasResults ? "none" : "flex");
    $searchResult.css("display", "flex");
  }

  function handleOutsideClick(event) {
    if (
      !$navbarSearch.is(event.target) &&
      $navbarSearch.has(event.target).length === 0
    ) {
      // If user clicks outside the .navbar_search element, hide the entire .search_result element
      $searchResult.css("display", "none");
    }
  }

  var swiper = new Swiper(".category_home_main", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var $backToTopBtn = $("#backToTopBtn");

  // Initially hide the button using flex
  $backToTopBtn.css("display", "flex");

  // Add a scroll event listener
  $(window).scroll(function () {
    // If the user scrolls down more than 300 pixels, show the button
    if ($(this).scrollTop() > 300) {
      $backToTopBtn.css("display", "flex");
    } else {
      $backToTopBtn.css("display", "none");
    }
  });

  // Add a click event listener to scroll back to the top
  $backToTopBtn.click(function () {
    // Scroll to the top of the page smoothly
    $("html, body").animate({ scrollTop: 0 }, "slow");

    // Set the button's display to flex after clicking
    $backToTopBtn.css("display", "flex");
  });

  var swiper = new Swiper(".latest_home_main", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper(".footer_blog_main", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
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

  const mainAlpha = $(".alphabet");
  for (let index = 0; index < alphabet.length; index++) {
    $(mainAlpha).append(
      ` <a href="#" class="alphabet-item">${alphabet[index]}</a>`
    );
  }
  $(".alphabet-item").first().addClass("active");

  $(".alphabet-item").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".filter_btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });


  $(".arrow").click(function () {
    // Find the parent .main_category of the clicked arrow
    var parentMainCategory = $(this).closest('.main_category');
  
    // Toggle classes within the same .main_category container
    $(this).toggleClass("active")
    parentMainCategory.find('.main_cate').toggleClass("active");
    parentMainCategory.find('.sub_cate_main').toggleClass("active");
  });
});
