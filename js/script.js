$(document).ready(function() {

$('#target_color').append(targetColor);

$('div').mouseenter(function() {
  var wacky_size = Math.floor(Math.random()*21);
    $(this).animate({
      height: (wacky_size + 2) + 'em',
      width: (wacky_size + 2) + 'em'
    });
  });

  $('div').mouseleave(function() {
    $(this).animate({
      height: (wacky_size + 2) + 'em',
      width: (wacky_size + 2) + 'em'
    });
  });

  $('div').click(function() {
    $(this).animate({
      height: '0em',
      width: '0em'
    });
  });
});



var randomColor = Math.random();
console.log(randomColor);

if (randomColor >= 0 && randomColor < 0.142) {
    var targetColor = "RED";
} else if (randomColor >= 0.142 && randomColor < 0.284) {
    var targetColor = "YELLOW";
} else if (randomColor >= 0.284 && randomColor <= 0.426) {
    var targetColor = "BLUE";
} else if (randomColor >= 0.426 && randomColor <= 0.568) {
    var targetColor = "PURPLE";
} else if (randomColor >= 0.568 && randomColor <= 0.71) {
    var targetColor = "ORANGE";
} else if (randomColor >= 0.71 && randomColor <= 0.852) {
    var targetColor = "GREEN";
} else if (randomColor >= 0.852 && randomColor <= 1) {
    var targetColor = "BLACK";
};













