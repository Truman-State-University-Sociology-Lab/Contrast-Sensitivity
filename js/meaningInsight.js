$('#meaningInsight > div').hide();
$('#meaningInsight #meaningDemo1').show();
$('input[disabled]').parent().css('color','#DCDCDC');
var stepCounter;
var content;
var stepperMeaning;

$('#meaningInsight #meaningDemo1 button.continue').click(function(){
	$('#meaningInsight #meaningDemo1').hide();
	$('#meaningInsight #meaningDemo2').show();
	$('#meaningDemo2 input')[$('#meaningDemo1 input:checked').val() - 1].checked = true;
});
$('#meaningInsight #meaningDemo2 button.continue').click(function(){
	$('#meaningInsight #meaningDemo2').hide();
	$('#meaningInsight #meaningStart').show();
	var blank = function(){
		setTimeout(function(){
			$('#meaning' + stepCounter + ' img').attr('src','assets/images/meaning/blank.png');
			$('#meaning' + stepCounter + ' input').attr('disabled', true).parent().css('color','#DCDCDC');
		}, 500);
	}
	stepperMeaning = setInterval(function(){
	    if (stepCounter==0){
	    	$('#meaningInsight #meaningStart').hide();
	    	$('#meaningQuestions').show();
			$('#meaningInsight #meaning1').show();
			stepCounter++;
			blank();
	    }else if (stepCounter==25){
	    	$('#meaningInsight #meaning' + stepCounter).hide();
	    	$('#meaningQuestions').hide();
			$('#meaningInsight #meaningFinish').show();
			stepCounter++;
			blank();
			clearInterval(stepperMeaning);
	    }else{
	    	$('#meaningInsight #meaning' + stepCounter).hide();
			$('#meaningInsight #meaning' + (stepCounter+1)).show();
			stepCounter++;
			blank();
	    }
	}, 1000);
});
var meaningReset = function(){
	clearInterval(stepperMeaning);
	$('#meaningInsight input').removeAttr('checked');
	stepCounter = 0;
	$('#meaningQuestions').empty();
	for(var x = 1; x <= 25; x++ ){
		content = '<div id="meaning' + x + '" style="display: none;"><div class="meaningPicture"><img src="assets/images/meaning/' + x + '.png"/></div><hr/><br/><div class="meaningInstruction" style="width: 670px"><p>Does word #1 or word #2 correspond to the English word? Click on one:</p></div><div class="meaningButtons"><div class="meaningInputs"><label><input type="radio" name="meaning' + x + '" value="1"/>Word #1</label><label><input type="radio" name="meaning' + x + '" value="2"/>Word #2</label></div></div></div>';
		$('#meaningQuestions').append(content);
	}
}