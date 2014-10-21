var opts;
var target;
var spinner;
var pageView;
var bannerHeight;
var load = function(current,next,isShortcut){
	var afterSpin = function(){
		if(pageView == 'startScreen'){
			$('#bannerContainer').height(bannerHeight).find('img').show();
		}else{
			$('#bannerContainer').height(0).find('img').hide();
			if(pageView == 'meaningInsight'){
				meaningReset();
				$('#meaningInsight > div').hide();
				$('#meaningInsight #meaningDemo1').show();
			}else if(pageView == 'contrastSensitivity'){
				//meaningReset();
				$('#contrastSensitivity > div').hide();
				$('#contrastSensitivity #contrast1').show();
			}
		}
		updateLocation(pageView);
	}
	//$('#' + current).hide();
	$('#content > div').hide();
	pageView = next;
	if(isShortcut){
		afterSpin();
	}else{
		$('#spinner').show();
		setTimeout(function(){
			$('#spinner').hide();
			afterSpin();
		}, 5000);
	}
}
var updateLocation = function(newLocation){
	$('.navItem').removeClass('currentLocation');
	$('a[href *= ' + newLocation + ']').parent().addClass('currentLocation');
	$('#' + newLocation).show();
	window.scrollTo(0,0);
}
var report = function(){
		$('input:checked').each(function(){console.log(this.name + ": " + this.value)})
	}
$(function(){
	opts = {
	  lines: 13, // The number of lines to draw
	  length: 20, // The length of each line
	  width: 10, // The line thickness
	  radius: 30, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#000', // #rgb or #rrggbb or array of colors
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: '50%', // Top position relative to parent
	  left: '50%' // Left position relative to parent
	};
	pageView = 'startScreen';
	target = $('#spinner')[0];
	spinner = new Spinner(opts).spin(target);
	bannerHeight = $('#bannerContainer').height();

	$('#content > div').each(function(){
		$('#navBar').append("<li class='navItem'><a href='" + this.id + "'>" + this.id + "</a></li>");
	});
	$('.navItem').click(function(e){
		e.preventDefault();
		var current = pageView;
		var next = e.target.text||e.target.children[0].text;
		console.log('navigating to: ' + next);
		load(current, next, true);
	});
	$('#start').click(function(){
		load('startScreen', 'meaningInsight', false);
	});
	$("#meaningInsight").load( "html/meaningInsight.html", function(){
		meaningReset();
		$("#meaningFinish").load( "html/waitForAssistant.html", function(){
			$('#meaningFinish button.waitForAssistantButton').click(function(){
				load('meaningInsight', 'survey1', false);
			});
		});
	});
	$("#survey1").load( "html/survey1.html", function() {
		$('#survey1 button.submit').click(function(){
			load('survey1', 'contrastSensitivity', false);
		});
	});
	$("#contrastSensitivity").load( "html/contrastSensitivity.html", function() {
		$('#contrastSensitivity button.submit').click(function(){
			load('contrastSensitivity', 'survey2', false);
		});
	});
	$("#survey2").load( "html/survey2.html", function() {
		$('#survey2 button.submit').click(function(){
			load('survey2', 'survey3', false);
		});
	});
	$("#survey3").load( "html/survey3.html", function() {
		$('#survey3 button.submit').click(function(){
			load('survey3', 'startScreen', false);
		});
	});
	
	$('#content > div').hide();
	updateLocation(pageView);
});