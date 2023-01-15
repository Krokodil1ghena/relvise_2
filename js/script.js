$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .menu').toggleClass('active');
		$('.page').toggleClass('page_active');
			$('body').toggleClass('body_active');
	});
});

