jQuery(function($){

	$('.count').each(function () {
		$(this).prop('counter', 0).animate({
			counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

   $("#phone").mask("+38 (999) 999-99-99");
});

