$(window).load(function(){
	    $('.big-banner').show();
	    $('.big-banner').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 2000,              //  The delay between slide animations (in milliseconds)
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: false   
	    });


});