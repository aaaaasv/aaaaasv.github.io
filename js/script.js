$(document).ready(function() {
  var filterBlock = $('.filter');
  var filterExtended = $('.filter-extended')
  var filterShown = false;

  function hoverFunction() {
    if (!filterShown) {
      return;
      filterBlock.hide();
      filterExtended.show();
      filterShown = true;
    } else {
      return;
      filterBlock.show();
      filterExtended.hide();
      filterShown = false;
    }
  }
  filterBlock.on('mouseover', hoverFunction);
  filterExtended.on('mouseleave', hoverFunction);


  function removeFilter() {
    $('.design-item').addClass('carousel-item').show();
    $('.backend-item').addClass('carousel-item').show();
  }
  $('.design-filter').click(function() {
    if ($(this).text() === "X") {
      $('.design-filter').text("DESIGN");
      removeFilter();
      return;
    }
    $('.backend-item').removeClass('carousel-item').hide();
    $('.design-item').addClass('carousel-item').show();
    $(this).text("X");
  })

  $('.backend-filter').click(function() {
    if ($(this).text() === "X") {
      $(this).text("BACKEND");
      removeFilter();
      return;
    }
    $('.backend-item').addClass('carousel-item').show();
    $('.design-item').removeClass('carousel-item').hide();
    $(this).text("X");


  })

const patternAnimationSpeed = 100
var mathBrainPattern = $('.math-brain-section');
var designBrainPattern = $('.design-brain-section');

function activateDesignBrain() {
  designBrainPattern.show("scale",{},patternAnimationSpeed);
  $('.glasses-inner').css("fill", "rgba(255, 255, 255, .3)");
}
function deactivateDesignBrain() {
  designBrainPattern.hide("scale", {}, patternAnimationSpeed);
  $('body').css("background-color", "");
  $('.glasses-inner').css("fill", "");

}

$('.design-brain').on('mouseenter', activateDesignBrain);
$('.design-brain').on('mouseleave', deactivateDesignBrain);


function activateMathBrain() {
  mathBrainPattern.show("scale",{},patternAnimationSpeed);
  $('.glasses-inner').css("fill", "rgba(0, 0, 0, .2)");

}
function deactivateMathBrain() {
  mathBrainPattern.hide("scale", {}, patternAnimationSpeed);
  $('.glasses-inner').css("fill", "")

}

$('.math-brain').on('mouseenter', activateMathBrain);
$('.math-brain').on('mouseleave', deactivateMathBrain);



})
