//$.ajaxSetup({});
var opts;
var target;
var spinner;
var pageView;
var bannerHeight;
var queryArray = window.location.search.substring(1).split('&');
var queries = {};
var tenSeconds = 10000;
var fiveSeconds = 5000;
var timeToBlank = 5000;
var timeToNext = 7000;
var agreeMeaning = [1,3,5,7,9,11,13,15,17,19,21,23,25];
var agreeContrast = [1,3,5,7,9,11,13,15,17,19,21,23,25];
var canStart = false;
for(i=0;i<queryArray.length;i++){
	queryArray[i] = queryArray[i].split('=');
	queries[queryArray[i][0]] = queryArray[i][1]
}
var debug = 'debug' in queries && queries['debug'] == 'true';

var load = function(next,isShortcut){
	var afterSpin = function(){
		if(pageView == 'startScreen'){
			$('#bannerContainer').height(bannerHeight).find('img').show();
		}else{
			$('#bannerContainer').height(0).find('img').hide();
			if(pageView == 'meaningInsight'){
				//meaningReset();
				$('#meaningInsight > div').hide();
				$('#meaningInsight #meaningDemo1').show();
			}else if(pageView == 'meaningInsightSolo'){
				meaningSoloReset();
				$('#meaningInsightSolo > div').hide();
				$('#meaningInsightSolo #meaningSoloDemo1').show();
			}else if(pageView == 'contrastSensitivity'){
				contrastReset();
				$('#contrastSensitivity > div').hide();
				$('#contrastSensitivity #contrastInstruction1').show();
			}else if(pageView == 'contrastSensitivitySolo'){
				contrastSoloReset();
				$('#contrastSensitivitySolo > div').hide();
				$('#contrastSensitivitySolo #contrastSoloDemo1').show();
			}
		}
		updateLocation(pageView);
	}
	$('#content > div').hide();
	pageView = next;
	if(isShortcut){
		afterSpin();
	}else{
		$('#spinner').show();
		setTimeout(function(){
			$('#spinner').hide();
			afterSpin();
		}, tenSeconds);
	}
}
var updateLocation = function(newLocation){
	$('.navItem').removeClass('currentLocation');
	$('a[href = ' + newLocation + ']').parent().addClass('currentLocation');
	$('#' + newLocation).show();
	window.scrollTo(0,0);
}
var report = function(){
	$('input:checked').not(".demographicSurvey").each(function(){console.log(this.name + ": " + this.value)});
	$('#demographicSurvey input:checked,#demographicSurvey input[type=text], #demographicSurvey select').each(function(){console.log(this.name + ": " + this.value)});
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
	pageView = 'setup';
	target = $('#spinner')[0];
	spinner = new Spinner(opts).spin(target);
	bannerHeight = $('#bannerContainer').height();
	$('#bannerContainer').height(0).find('img').hide();

	if(debug){
		tenSeconds = 2000;
		fiveSeconds = 1000;
		timeToBlank = 500;
		timeToNext = 1000;
		$('#content > div').each(function(){
			$('#navBar').append("<li class='navItem'><a href='" + this.id + "'>" + this.id + "</a></li>");
		});
		$('.navItem').click(function(e){
			e.preventDefault();
			var next = e.target.text||e.target.children[0].text;
			if(next == 'meaningInsight'){
				//meaningReset();
				console.log('meaning reset');
			}else if(next == 'meaningInsightSolo'){
				meaningSoloReset();
				console.log('meaning solo reset');
			}else if(next == 'contrastSensitivity'){
				contrastReset();
				console.log('contrast reset');
			}else if(next == 'contrastSensitivitySolo'){
				contrastSoloReset();
				console.log('contrast solo reset');
			}else if(next == 'demographicSurvey'){
				demographicSurveyReset();
				console.log('demographic survey reset');
			}
			console.log('navigating to: ' + next);
			load(next, true);
		});
		$("#meaningInsight").load( "html/meaningInsight.html", function(){
			//meaningReset();
			console.log('meaningInsight loaded');
			$("#meaningFinish").load( "html/waitForAssistant.html", function(){
				$('#meaningFinish button.waitForAssistantButton').click(function(){
					load('meaningInsightSolo', false);
				});
			});
		});
		$("#meaningInsightSolo").load( "html/meaningInsightSolo.html", function(){
			meaningSoloReset();
			console.log('meaningInsightSolo loaded');
			$("#meaningSoloFinish").load( "html/waitForAssistant.html", function(){
				$('#meaningSoloFinish button.waitForAssistantButton').click(function(){
					load('contrastSensitivity', false);
				});
			});
		});
		$("#contrastSensitivity").load( "html/contrastSensitivity.html", function() {
			contrastReset();
			console.log('contrastSensitivity loaded');
			$("#contrastFinish").load( "html/waitForAssistant.html", function(){
				$('#contrastFinish button.waitForAssistantButton').click(function(){
					load('contrastSensitivitySolo', false);
				});
			});
		});
		$("#contrastSensitivitySolo").load( "html/contrastSensitivitySolo.html", function(){
			contrastSoloReset();
			console.log('contrastSensitivitySolo loaded');
			$("#contrastSoloFinish").load( "html/waitForAssistant.html", function(){
				$('#contrastSoloFinish button.waitForAssistantButton').click(function(){
					load('demographicSurvey', false);
				});
			});
		});
		$("#demographicSurvey").load( "html/demographicSurvey.html", function() {
			console.log('demographicSurvey loaded');
			$('#demographicSurvey5 button.submit').click(function(){
				load('survey1', false);
			});
		});
		$("#survey1").load( "html/survey1.html", function() {
			console.log('survey1 loaded');
			$('#survey1 button.submit').click(function(){
				load('survey2', false);
			});
		});
		$("#survey2").load( "html/survey2.html", function() {
			console.log('survey2 loaded');
			$('#survey2 button.submit').click(function(){
				load('survey3', false);
			});
		});
		$("#survey3").load( "html/survey3.html", function() {
			console.log('survey3 loaded');
			$('#survey3 button.submit').click(function(){
				load('startScreen', false);
			});
		});
		$('#start').click(function(){
			load('meaningInsight', false);
		});
	}

	$("#setup").load( "html/setup.html", function(){
		$('#setup button.start').click(function(){
			if($('#using li').length == 0){
				alert('Please select at least one section to use');
				canStart = false;
			}else{canStart = true;}
			if(canStart && $('#options div[name="meaningInsight"]').length > 0){
				agreeMeaning = $('#options input[name="meaningInsightAgree"]').val().split(',');
				if(!agreeMeaning.every(function(i){
					agreeMeaning[agreeMeaning.indexOf(i)] = parseInt(i);
					if(typeof agreeMeaning[agreeMeaning.indexOf(parseInt(i))]==='number' && (agreeMeaning[agreeMeaning.indexOf(parseInt(i))]%1)===0){
						return true;
					}else{
						return false;
					}
				})){
					alert('Please select which Meaning Insight questions to agree with');
					agreeMeaning = [1,3,5,7,9,11,13,15,17,19,21,23,25];
					canStart = false;
				}
			}
			if(canStart && $('#options div[name="contrastSensitivity"]').length > 0){
				agreeContrast = $('#options input[name="contrastSensitivityAgree"]').val().split(',');
				if(!agreeContrast.every(function(i){
					agreeContrast[agreeContrast.indexOf(i)] = parseInt(i);
					if(typeof agreeContrast[agreeContrast.indexOf(parseInt(i))]==='number' && (agreeContrast[agreeContrast.indexOf(parseInt(i))]%1)===0){
						return true;
					}else{
						return false;
					}
				})){
					alert('Please select which Contrast Sensitivity questions to agree with');
					agreeContrast = [1,3,5,7,9,11,13,15,17,19,21,23,25];
					canStart = false;
				}
			}
			if(canStart){
				loadSections();
				load('startScreen', true);
			}
		});
		$('#setup button.debug').click(function(){
			if(window.location.toString().substring(window.location.toString().indexOf('?')) == '?debug=true'){
				window.location = window.location.toString().split('?')[0];
			}else{
				window.location = window.location + '?debug=true';
			}
		});
	});
	
	$('#content > div').hide();
	updateLocation(pageView);
});