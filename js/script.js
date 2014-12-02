$(document).ready(function() {
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
      // });
    });
  });
});










