$('#meaningInsightSolo > div').hide();
$('#meaningInsightSolo #meaningSoloDemo1').show();
$('input[disabled]').parent().css('color','#DCDCDC');
var stepCounter;
var content;
var stepperMeaning;

$('#meaningInsightSolo #meaningSoloDemo1 button.continue').click(function(){
	$('#meaningInsightSolo #meaningSoloDemo1').hide();
	$('#meaningInsightSolo #meaningSoloDemo2').show();
	$('#meaningSoloDemo2 input')[$('#meaningSoloDemo1 input:checked').val() - 1].checked = true;
});
$('#meaningInsightSolo #meaningSoloDemo2 button.continue').click(function(){
	$('#meaningInsightSolo #meaningSoloDemo2').hide();
	$('#meaningInsightSolo #meaningSoloStart').show();
	var blank = function(){
		setTimeout(function(){
			$('#meaningSolo' + stepCounter + ' img').attr('src','assets/images/meaning/blank.png');
			$('#meaningSolo' + stepCounter + ' input').attr('disabled', true).parent().css('color','#DCDCDC');
		}, timeToBlank);
	}
	stepperMeaning = setInterval(function(){
	    if (stepCounter==0){
	    	$('#meaningInsightSolo #meaningSoloStart').hide();
	    	$('#meaningSoloQuestions').show();
			$('#meaningInsightSolo #meaningSolo1').show();
			stepCounter++;
			blank();
	    }else if (stepCounter==25){
	    	$('#meaningInsightSolo #meaningSolo' + stepCounter).hide();
	    	$('#meaningSoloQuestions').hide();
			$('#meaningInsightSolo #meaningSoloFinish').show();
			stepCounter++;
			blank();
			clearInterval(stepperMeaning);
	    }else{
	    	$('#meaningInsightSolo #meaningSolo' + stepCounter).hide();
			$('#meaningInsightSolo #meaningSolo' + (stepCounter+1)).show();
			stepCounter++;
			blank();
	    }
	}, timeToNext);
});
var meaningSoloReset = function(){
	clearInterval(stepperMeaning);
	$('#meaningInsightSolo input').removeAttr('checked');
	stepCounter = 0;
	$('#meaningSoloQuestions').empty();
	for(var x = 1; x <= 25; x++ ){
		content = '<div id="meaningSolo' + x + '" style="display: none;"><div class="meaningPicture"><img src="assets/images/meaning/' + x + '.png"/></div><hr/><br/><div class="meaningInstruction" style="width: 670px"><p>Does word #1 or word #2 correspond to the English word? Click on one:</p></div><div class="meaningButtons"><div class="meaningInputs"><label><input type="radio" name="meaningSolo' + x + '" value="1"/>Word #1</label><label><input type="radio" name="meaningSolo' + x + '" value="2"/>Word #2</label></div></div></div>';
		$('#meaningSoloQuestions').append(content);
	}
}