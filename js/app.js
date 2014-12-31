function playHadouken(){
	var sound = document.getElementById("hadouken-sound");
	sound.volume = 0.5;
	sound.currentTime = 0;
	sound.play();
};

function showRyuPosture(className) {
	var postures = $('.ryu-posture');
	$.each(postures, function (index, value) {
		var ryuPosture = $(value);
		
		if (ryuPosture.hasClass(className)) {
			ryuPosture.show();
		} else {
			ryuPosture.hide();
		};
	});	
};

$(document)
	.ready(function() {	
		$('.hadouken').parent().on('animationend webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd', 
				'.hadouken', function () {
    				$('.hadouken').hide();
			    });

		$('.ryu')			
			.mouseenter(function(){		
				showRyuPosture('ryu-ready');
			})
			.mouseleave(function(){
				showRyuPosture('ryu-still');
			})
			.mousedown(function(){
				playHadouken();
				showRyuPosture('ryu-throwing');
				var hadouken = $('.hadouken').addClass('animate');
				var hadoukenClone = hadouken.clone(true);				
				hadouken.replaceWith(hadoukenClone);
				hadoukenClone.show();
			})
			.mouseup(function(){
				showRyuPosture('ryu-ready');
			});
	})
	.keydown(function(e){
		if (e.keyCode == 88){
			showRyuPosture('ryu-cool');
		}
	})
	.keyup(function(e){
		if (e.keyCode == 88){
			showRyuPosture('ryu-ready');
		}
	})