// Mobile Escort Gallery
$(".m-escort-gallery").owlCarousel({
  margin: 10,
  items: 2,
  dots: false,
  nav: false,
  navText: [
    "<span class='fa fa-angle-left'></span>",
    "<span class='fa fa-angle-right'></span>",
  ],
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  smartSpeed: 2000,
  autoplayTimeout: 4000,
  autoplay: false,
  autoplayHoverPause: true,
  responsiveClass: false,
});

// On Scroll Add Class
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 120) {
    $(".shortcode-one").addClass("sticky");
  } else {
    $(".shortcode-one").removeClass("sticky");
  }
});

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Image Upload Shorting
$(function () {
  $("#image-short-one").sortable();
});

// Select two Class
$(".custom-select").select2({
  selectionCssClass: "custom-select2",
  dropdownCssClass: "custom-dropdown2",
  allowHtml: true,
});
$(".disable-select").prop("disabled", true);

// Graph chart
