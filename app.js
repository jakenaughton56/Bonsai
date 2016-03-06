var main = function() {
  $('#top-text').keyup(function() {
    var top = $(this).val();
  	$('.top-caption').text(top);
  });
  
  $('#bottom-text').keyup(function() {
    var bottom = $(this).val();
    $('.bottom-caption').text(bottom);
  });
  
  $('#image-url').keyup(function() {
    var img = $(this).val();
    $('.main div img').attr('src',img);
  });
}
 
$(document).ready(main);