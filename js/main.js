$(document).ready(function () {
  var entries = [
    { label: "Java" },
    { label: "C++" },
    { label: "Python" },
    { label: "Javascript" },
    { label: "Node.js" },
    { label: "Spring" },
    { label: "Spring Boot" },
    { label: "AWS" },
    { label: "REST" },
    { label: "ANdroid Development" },
    { label: "Bootstrap" },
    { label: "JQuery" },
    { label: "Backend Development" },
    { label: "Machine Learning" },
  ];

  var settings = {
    entries: entries,
    width: 480,
    height: 480,
    radius: "65%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "#0a192f",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "15",
    fontColor: "#8892b0",
    fontWeight: "normal", //bold
    fontStyle: "normal", //italic
    fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: "Arial, Helvetica, sans-serif",
    tooltipFontSize: "11",
    tooltipFontColor: "#fff",
    tooltipFontWeight: "normal", //bold
    tooltipFontStyle: "normal", //italic
    tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: "middle",
    tooltipDiffX: 0,
    tooltipDiffY: 20,
  };
  $("#holder").svg3DTagCloud(settings);
});

$(document).ready(function () {
  $("#magic-button-revert").on("click", function (event) {
    $("#normal-list").show("slow");
    $(this).hide("slow");
    $("#magic-button").show("slow");
    $("#holder").hide("slow");
  });
});

$(document).ready(function () {
  $("#magic-button").on("click", function (event) {
    $("#normal-list").hide("slow");
    $(this).hide("slow");
    $("#magic-button-revert").show("slow");
    $("#holder").show("slow");
  });
});

$(window).on("load", function () {
  $("#loader-container").delay(1500).fadeOut("slow");
});



$(document).ready(function () {

  if (screen.width < 576) {
      $("#side-footer").hide();
  }
  else {

      $("#side-footer").show();
  }

});

$(document).ready(function () {

  if (screen.width < 576) {
      $("#side-footer-2").hide();
  }
  else {

      $("#side-footer-2").show();
  }

});

$(document).ready(function () {

  if (screen.width < 576) {
      $(".footer-icon-container").show();
  }
  else {

      $(".footer-icon-container").hide();
  }

});