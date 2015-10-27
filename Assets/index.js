$(document).on('ready', function() {

	//Callbacks
	var example = function() {
		console.log("Greetings!");
	};

	example();

	var doSomething = function(say, ask) {
		console.log(say);
		ask();
	};

	doSomething('Hello', example);

	doSomething('How are you?', function() {
		console.log("Fine, thank you.");
	});

	//jQuery callback
	$("#animate").show( function(){
		$("#animate").animate({opacity: 0.25});
	});

	//fading in and out
	$("#fademein").fadeOut();
	$("#fademein").fadeIn();
	$("#slow").fadeOut(3000);

	//slide up and down
	$("#up").slideUp(3000);
	$("#up").slideDown(3000);

	//animate
	$("#lastline").animate( {
		opacity: 0.25,
		width: "70%"
	} , 2000 );

	//click
	//slideToggle on click
	function toggleButton() {
		$('#byebye').slideToggle();
	}

	$('#byebye').click(toggleButton);

	//dropdown
	$('.dropdown').hide();
	$('.dropmedown').hover(
		function () {
			$('.dropdown').show();
		},
		function () {
			$('.dropdown').hide();
		}
	);
});
