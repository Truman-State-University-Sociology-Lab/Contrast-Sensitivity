$('#using').sortable();
var listItem = "";
var order = [];
var d = new Date();
var dateCode = ('' + d.getFullYear() + (d.getMonth() + 1) + d.getDate()).substring(2);
$('#options input[name="date"]').val(dateCode);
$('#content > div').each(function(){
	if(this.id !="setup" && this.id !="startScreen"){
		listItem = "<li class='listItem' name='" + this.id + "'>" + this.id + "</li>";
		$('#available').append(listItem);
	}
});
$('#using').height($('#available').height())
$('#options').css('min-height',$('#available').height())
$('#available .listItem').click(function(){
	var $this = $(this);
	if($this.attr('disabled') == 'false' || $this.attr('disabled') == undefined){
		$this.clone().append( "<img class='closeButton' src='assets/images/close.png'/>" ).appendTo("#using").find('.closeButton').click(function(){
			$('#available .listItem[name="' + $this.attr("name") + '"]').attr('disabled', false).css('color','black');
			$(this).parent().remove();
			$('#options div[name="' + $this.attr("name") + '"]').remove();
		});
		$this.attr('disabled',true).css('color','grey');
		addOption($this.text());
	}
});
var addOption = function(id){
	if(id == "meaningInsight" || id == "contrastSensitivity"){
		$('#options').append('<div name="' + id + '"><h4>' + id + '</h4>Agree with (comma separated): <input type="text" name="' + id + 'Agree"><br><input type="number" min="1" max="25" name="' + id + '" style="float:none; width: 40px;"><button onclick="randomNumbers(' + id + ')">Random numbers</button> (up to 25)<br></div>');
		$('#options input[name="' + id + '"]').val('3');
	}
}
var randomNumbers = function(val){
	var quantity = parseInt($('#options input[name="' + val.id + '"]').val());
	var potentials = [];
	var numberList = [];
	var number;
	if(quantity > 25){quantity = 25;}
	for(var i = 0; i < 25; i++){
		potentials[i] = i + 1;
	}
	for(var i = 0; i < quantity; i++){
		number = potentials.splice(Math.floor(Math.random() * (24 - i)), 1);
		numberList.push(number);
	}
	numberList.sort(function(a,b){return a-b})
	$('#options input[name="' + val.id + 'Agree"]').val(numberList.toString());
}

var loadSections = function(){
	console.log('loading sections');
	console.log(order);
	$('#using li').each(function(){
		order.push($(this).attr('name'))
	});
	for(i=0;i<order.length;i++){
		eval(order[i] + 'Load("' + order[i + 1] + '")');
	}
}
var callLoad = function(next){
	if(next != "undefined"){
		load(next, false);
	}
	else{
		load('startScreen', false);
	}
}

var meaningInsightLoad = function(next){
	$("#meaningInsight").load( "html/meaningInsight.html", function(){
		console.log('meaningInsight loaded');
		$("#meaningInsightFinish").load( "html/waitForAssistant.html", function(){
			$('#meaningInsightFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
	});
}
var meaningInsightSoloLoad = function(next){
	$("#meaningInsightSolo").load( "html/meaningInsightSolo.html", function(){
		console.log('meaningInsightSolo loaded');
		$("#meaningSoloFinish").load( "html/waitForAssistant.html", function(){
			$('#meaningSoloFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
	});
}
var contrastSensitivityLoad = function(next){
	$("#contrastSensitivity").load( "html/contrastSensitivity.html", function() {
		console.log('contrastSensitivity loaded');
		$("#contrastFinish").load( "html/waitForAssistant.html", function(){
			$('#contrastFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
		// var tempAgree = $('#options input[name="contrastSensitivityAgree"]').val().split(',');
		// while(agreeQuestions.length > 0) {
		//     agreeQuestions.pop();
		// }
		// for(var i = 0; i<tempAgree.length; i++){
		// 	agreeQuestions.push(parseInt(tempAgree[i]));
		// }
	});
}
var contrastSensitivitySoloLoad = function(next){
	$("#contrastSensitivitySolo").load( "html/contrastSensitivitySolo.html", function(){
		console.log('contrastSensitivitySolo loaded');
		$("#contrastSoloFinish").load( "html/waitForAssistant.html", function(){
			$('#contrastSoloFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
	});
}
var demographicSurveyLoad = function(next){
	$("#demographicSurvey").load( "html/demographicSurvey.html", function() {
		console.log('demographicSurvey loaded');
		$('#demographicSurvey5 button.submit').click(function(){
			callLoad(next);
		});
	});
}
var survey1Load = function(next){
	$("#survey1").load( "html/survey1.html", function() {
		console.log('survey1 loaded');
		$('#survey1 button.submit').click(function(){
			callLoad(next);
		});
	});
}
var survey2Load = function(next){
	$("#survey2").load( "html/survey2.html", function() {
		console.log('survey2 loaded');
		$('#survey2 button.submit').click(function(){
			callLoad(next);
		});
	});
}
var survey3Load = function(next){
	$("#survey3").load( "html/survey3.html", function() {
		console.log('survey3 loaded');
		$('#survey3 button.submit').click(function(){
			callLoad(next);
		});
	});
}

$('#start').click(function(){
	load(order[0], false);
});
