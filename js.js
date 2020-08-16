
$(function(){
	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    // $('#navbar').toggle();
		return false;
	});
  // $('.navbar-toggler').click(function(e){
  //   // e.preventDefoult();
  //   $('#navbar').toggle();
  // })

  $(function() {
    $('.navbar-nav a').on('click', function(){ 
        if($('.navbar-toggler').css('display') !='none'){
            $(".navbar-toggler").trigger( "click" );
        }
    });
});




  	var btn = $('#button');  
  	$(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });

	setInterval(arrow_move, 2500);

});


function arrow_move() {
  $('.fa-angle-down').animate({
  	 'margin-top': '+=10'
  }, 500);
  $('.fa-angle-down').animate({
  	 'margin-top': '-=10'
  }, 500);
}