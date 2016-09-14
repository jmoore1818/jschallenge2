$(function() {

$("h5:odd").hide();})

$('p').not('aside p').text(function () {
return $ (this).text().replace("Bacon", "LASER VISION");
})

$('p img').remove()

$('.post:last-of-type').remove();
$('.post:last-of-type').remove();

$( function() {
  $('h1').click( function() {
  	if($(this).attr('style'))
    $(this).removeAttr('style');
else
	$(this).css('color','red')
  } );
} );

