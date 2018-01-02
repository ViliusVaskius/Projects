$(function() {	
	var $slides = $('.slides');
	var $left = $('.left');
	var $right = $('.right');
	var $container = $('.container');
	var interval_var;

	var width = 720;
	var slide_index = 1;
	var delay = 500;
	var slides_count = $slides.find('.slide').length;
	var clicked = false;
	var slideshow_interval = 2000;

	$left.on('click', function() {
		if (clicked) {
			return false;
		}
		console.log('clicked left');
		console.log(slide_index);
		if (slide_index == 1) {
			clicked = true;
			slide_index = slides_count - 1;
			var margin = slide_index * width;
			$slides.css('margin-left', -margin);
			$slides.animate({
		    'margin-left': '+=720'
		  }, delay, function() {
		  	clicked = false;
		  });
		} else {
			clicked = true;
			$slides.animate({
		    'margin-left': '+=720'
		  }, delay, function() {
		  	clicked = false;
		  	slide_index--;
		  	console.log('po vaziavimo: ' + slide_index);
		  });
		}

	});

	$right.on('click', function() {
		slide_right();
	});

	function interval_function() {
		interval_var = setInterval(function() {
			slide_right();
		}, slideshow_interval);
	}

	function slide_right() {
		if (clicked) {
			return false;
		}
		console.log('clicked right');
		console.log(slide_index);
		if (slide_index == 7) {
			console.log('pries vaziavima: ' + slide_index);
			clicked = true;
			slide_index = 1;
			$slides.css('margin-left', 0);
			$slides.animate({
		    'margin-left': '-=720'
		  }, delay, function() {
		  	clicked = false;
		  	slide_index++;
		  });
		} else {
			clicked = true;
			$slides.animate({
		    'margin-left': '-=720'
		  }, delay, function() {
		  	clicked = false;
		  	slide_index++;
		  	console.log('po vaziavimo: ' + slide_index);
		  });
		}
	}

	$container.on('mouseover', function(){
		console.log('uzvedem pele');
		clearInterval(interval_var);
	});
	$container.on('mouseout', function(){
		console.log('patraukem');
		interval_function();
	});

	interval_function();

});