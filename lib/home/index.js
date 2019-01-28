$(function () {
	$(".homepage .leftbar .date").datepicker();
	$('.homepage .burger').on('click', function () {
		$('.homepage .leftbar').toggleClass('active');
	})
});
