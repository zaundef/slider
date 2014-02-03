$(document).ready(function() {

	var sliderContainer = $('#slider');

	sliderContainer.slider();

	$(document).on('click', '.slider .slide_prev', function() {
		sliderContainer.movePrev();
	});

	$(document).on('click', '.slider .slide_next', function() {
		sliderContainer.moveNext();
	});
});