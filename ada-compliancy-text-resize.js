$('.change-font').on('click', 'a', function (e) {
		e.preventDefault();
		if ($(this).hasClass('font-size-1')) {
			$('body').removeClass('text-size2 text-size3');
		} else if ($(this).hasClass('font-size-2')) {
			$('body').removeClass('text-size3').addClass('text-size2');
		} else if ($(this).hasClass('font-size-3')) {
			$('body').removeClass('text-size2').addClass('text-size3');
		}
	});