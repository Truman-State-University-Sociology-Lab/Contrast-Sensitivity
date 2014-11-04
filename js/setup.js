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
		$('#options').append('<div name="' + id + '"><h4>' + id + '</h4>Agree with (comma separated): <input type="text" name="' + id + 'Agree"><br><input type="text" name="' + id + '" style="float:none; width: 30px;"><button onclick="randomNumbers(' + id + ')">Random numbers</button> (up to 25)<br></div>');
		$('#options input[name="' + id + '"]').val('3');
	}
}
var randomNumbers = function(val){
	var quantity = parseInt($('#options input[name="' + val.id + '"]').val());
	var potentials = [];
	var numberList = "";
	var number;
	if(quantity > 25){quantity = 25;}
	for(var i = 0; i < 25; i++){
		potentials[i] = i + 1;
	}
	for(var i = 0; i < quantity; i++){
		number = potentials.splice(Math.floor(Math.random() * (24 - i)), 1);
		numberList += number + ',';
	}
	$('#options input[name="' + val.id + 'Agree"]').val(numberList.substring(0, numberList.length-1));
}

var loadSections = function(){
	$('#using li').each(function(){order.push($(this).attr('name'))});
	for(i=0;i<order.length;i++){
		eval(order[i] + 'Load("' + order[i + 1] + '")');
	}
}
var callLoad = function(next){
	if(next != "undefined"){load(next, false);}
	else{load('startScreen', false);}
}

var meaningInsightLoad = function(next){
	$("#meaningInsight").load( "html/meaningInsight.html", function(){
		$("#meaningFinish").load( "html/waitForAssistant.html", function(){
			$('#meaningFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
	});
}
var contrastSensitivityLoad = function(next){
	$("#contrastSensitivity").load( "html/contrastSensitivity.html", function() {
		$("#contrastFinish").load( "html/waitForAssistant.html", function(){
			$('#contrastFinish button.waitForAssistantButton').click(function(){
				callLoad(next);
			});
		});
	});
}
var survey1Load = function(next){
	$("#survey1").load( "html/survey1.html", function() {
		$('#survey1 button.submit').click(function(){
			callLoad(next);
		});
	});
}
var survey2Load = function(next){
	$("#survey2").load( "html/survey2.html", function() {
		$('#survey2 button.submit').click(function(){
			callLoad(next);
		});
	});
}
var survey3Load = function(next){
	$("#survey3").load( "html/survey3.html", function() {
		$('#survey3 button.submit').click(function(){
			callLoad(next);
		});
	});
}

$('#start').click(function(){
	load(order[0], false);
});
