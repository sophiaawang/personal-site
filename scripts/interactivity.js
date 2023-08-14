$(function () {
  if ($(window).width() < 600) {
    $("#menu-button").removeClass("hidden")
    $("#dropdown-ul").addClass("hidden")
    $("#close-button").addClass("hidden")
  } else {
    $("#menu-button").addClass("hidden")
    $("#dropdown-ul").removeClass("hidden")
    $("#close-button").addClass("hidden")
  }
});

$(window).on('resize', function () {
  if ($(window).width() < 600) {
    $("#menu-button").removeClass("hidden")
    $("#dropdown-ul").addClass("hidden")
    $("#close-button").addClass("hidden")
  } else {
    $("#menu-button").addClass("hidden")
    $("#dropdown-ul").removeClass("hidden")
    $("#close-button").addClass("hidden")
  }
});

$("#menu-button").on('click', function () {
  $("#dropdown-ul").removeClass("hidden")
  $("#menu-button").addClass("hidden")
  $("#close-button").removeClass("hidden")
});

$("#close-button").on('click', function () {
  $("#dropdown-ul").addClass("hidden")
  $("#menu-button").removeClass("hidden")
  $("#close-button").addClass("hidden")
});

let currentIndex = 0;
let lastIndex = 4;

$("#prev").on("click", function () {
  $("#p" + currentIndex).addClass("hidden");
  let prevI = currentIndex - 1;
  if (currentIndex == 0) {
    prevI = 4;
  }
  $("#p" + prevI).removeClass("hidden")
  currentIndex = prevI
});

$("#next").on("click", function () {
  $("#p" + currentIndex).addClass("hidden");
  let nextI = currentIndex + 1;
  if (currentIndex == lastIndex) {
    nextI = 0;
  }
  $("#p" + nextI).removeClass("hidden")
  currentIndex = nextI
});
