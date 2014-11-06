$('#contrastSensitivitySolo > div').hide();
$('#contrastSensitivitySolo #contrastSoloDemo1').show();
$('input[disabled]').parent().css('color','#DCDCDC');
var stepCounter;
var content;
var stepperContrastSolo;
var timeToBlank;
var timeToNext;
if(debug){
	timeToBlank = 500;
	timeToNext = 1000;
}else{
	timeToBlank = 5000;
	timeToNext = 7000;
}

$('#contrastSensitivitySolo #contrastSoloDemo1 button.continue').click(function(){
	$('#contrastSensitivitySolo #contrastSoloDemo1').hide();
	$('#contrastSensitivitySolo #contrastSoloDemo2').show();
	$('#contrastSoloDemo2 input')[$('#contrastSoloDemo1 input:checked').val() - 1].checked = true;
});
$('#contrastSensitivitySolo #contrastSoloDemo2 button.continue').click(function(){
	$('#contrastSensitivitySolo #contrastSoloDemo2').hide();
	$('#contrastSensitivitySolo #contrastSoloStart').show();
	var blank = function(){
		setTimeout(function(){
			$('#contrastSolo' + stepCounter + ' img').attr('src','assets/images/contrastSolo/blankWide.png');
			$('#contrastSolo' + stepCounter + ' input').attr('disabled', true).parent().css('color','#DCDCDC');
		}, timeToBlank);
	}
	stepperContrastSolo = setInterval(function(){
	    if (stepCounter==0){
	    	$('#contrastSensitivitySolo #contrastSoloStart').hide();
	    	$('#contrastSoloQuestions').show();
			$('#contrastSensitivitySolo #contrastSolo1').show();
			stepCounter++;
			blank();
	    }else if (stepCounter==25){
	    	$('#contrastSensitivitySolo #contrastSolo' + stepCounter).hide();
	    	$('#contrastSoloQuestions').hide();
			$('#contrastSensitivitySolo #contrastSoloFinish').show();
			stepCounter++;
			blank();
			clearInterval(stepperContrastSolo);
	    }else{
	    	$('#contrastSensitivitySolo #contrastSolo' + stepCounter).hide();
			$('#contrastSensitivitySolo #contrastSolo' + (stepCounter+1)).show();
			stepCounter++;
			blank();
	    }
	}, timeToNext);
});
var contrastSoloReset = function(){
	clearInterval(stepperContrastSolo);
	$('#contrastSensitivitySolo input').removeAttr('checked');
	stepCounter = 0;
	$('#contrastSoloQuestions').empty();
	for(var x = 1; x <= 25; x++ ){
		content = '<div id="contrastSolo' + x + '" style="display: none;"><div class="meaningPicture"><img src="assets/images/contrastSolo/' + x + '.png"/></div><hr/><br/><div class="meaningInstruction" style="width: 700px"><p>Is there more white area or black area in the above pattern? Click one:</p></div><div class="meaningButtons"><div class="meaningInputs"><label><input type="radio" name="contrastSolo' + x + '" value="1"/>More White Area</label><label><input type="radio" name="contrastSolo' + x + '" value="2"/>More Black Area</label></div></div></div>';
		$('#contrastSoloQuestions').append(content);
	}
	$('#contrastSensitivitySolo #contrastSoloDemo1').show();
}