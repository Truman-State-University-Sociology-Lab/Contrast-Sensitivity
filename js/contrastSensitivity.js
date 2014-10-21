$('#contrastSensitivity > div').hide();
$('#contrastSensitivity #contrastInstruction1').show();

$('#contrastSensitivity #contrastInstruction1 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction1').hide();
	$('#contrastSensitivity #contrastInstruction2').show();
});
$('#contrastSensitivity #contrastInstruction2 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction2').hide();
	$('#contrastSensitivity #contrastInstruction3').show();
});
$('#contrastSensitivity #contrastInstruction3 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction3').hide();
	$('#contrastSensitivity #contrastInstruction4').show();
});
$('#contrastSensitivity #contrastInstruction4 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction4').hide();
	$('#contrastSensitivity #contrastInstruction5').show();
});
$('#contrastSensitivity #contrastInstruction5 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction5').hide();
	$('#contrastSensitivity #contrastInstruction6').show();
});
$('#contrastSensitivity #contrastInstruction6 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction6').hide();
	$('#contrastSensitivity #contrastInstruction7').show();
});
$('#contrastSensitivity #contrastInstruction7 button.continue').click(function(){
	$('#contrastSensitivity #contrastInstruction7').hide();
	$('#contrastSensitivity #contrastInstruction8').show();
	setTimeout(function(){
		$('#spinner').show();
		setTimeout(function(){
			$('#spinner').hide();
			$('#contrastSensitivity #contrastInstruction8').hide();
			$('#contrastSensitivity #contrastDemo1').show();
			setTimeout(function(){
				$('#contrastSensitivity #contrastDemo1').hide();
				$('#contrastSensitivity #contrastDemo2').show();
			}, 5000);
		}, 2000);
	}, 2000);
});
$('#contrastSensitivity #contrastDemo1 button.continue').click(function(){
	$('#contrastSensitivity #contrastDemo1').hide();
	$('#contrastSensitivity #contrastDemo2').show();
});
$('#contrastSensitivity #contrastDemo2 .yourChoice .bottom.choice input:radio').first().click(function(){
	setTimeout(function(){
		$('#contrastSensitivity #contrastDemo2').hide();
		$('#contrastSensitivity #contrastDemo3').show();
		$('#contrastSensitivity #contrastDemo3 .bottom input:radio[value="bottom"]')[0].checked = true;
	}, 2000);
});
$('#contrastSensitivity #contrastDemo3 button.continue').click(function(){
	$('#contrastSensitivity #contrastDemo3').hide();
	$('#contrastSensitivity #contrastDemo4').show();
	$('#contrastSensitivity #contrastDemo4 .bottom input:radio[value="bottom"]')[0].checked = true;
});
$('#contrastSensitivity #contrastDemo4 button.continue').click(function(){
	$('#contrastSensitivity #contrastDemo4').hide();
	$('#contrastSensitivity #contrastDemo5').show();
	$('#contrastSensitivity #contrastDemo5 .bottom input:radio[value="bottom"]')[0].checked = true;
});
$('#contrastSensitivity #contrastDemo5 .yourChoice .choice input:radio').click(function(){
	setTimeout(function(){
		$('#contrastSensitivity #contrastDemo5').hide();
		$('#contrastSensitivity #contrastDemo6').show();
		$('#contrastSensitivity #contrastDemo6 .bottom input:radio[value="bottom"]')[0].checked = true;
		$('#contrastDemo6 .yourChoice input:radio[name="contrastDemo1Final"][value="' + $('#contrastDemo5 .yourChoice input:radio[name="contrastDemo1Final"]:checked').val() + '"]').attr('checked', true)
	}, 2000);
});
$('#contrastSensitivity #contrastDemo6 button.continue').click(function(){
	$('#contrastSensitivity #contrastDemo6').hide();
	$('#contrastSensitivity #contrastScoring1').show();
});
$('#contrastSensitivity #contrastScoring1 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring1').hide();
	$('#contrastSensitivity #contrastScoring2').show();
});
$('#contrastSensitivity #contrastScoring2 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring2').hide();
	$('#contrastSensitivity #contrastScoring3').show();
});
$('#contrastSensitivity #contrastScoring3 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring3').hide();
	$('#contrastSensitivity #contrastScoring4').show();
});
$('#contrastSensitivity #contrastScoring4 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring4').hide();
	$('#contrastSensitivity #contrastScoring5').show();
});
$('#contrastSensitivity #contrastScoring5 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring5').hide();
	$('#contrastSensitivity #contrastScoring6').show();
});
$('#contrastSensitivity #contrastScoring6 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring6').hide();
	$('#contrastSensitivity #contrastScoring7').show();
});
$('#contrastSensitivity #contrastScoring7 button.continue').click(function(){
	$('#contrastSensitivity #contrastScoring7').hide();
	$('#contrastSensitivity #contrastScoring8').show();
	setTimeout(function(){
		$('#spinner').show();
		setTimeout(function(){
			$('#spinner').hide();
			$('#contrastSensitivity #contrastScoring8').hide();
			$('#contrastSensitivity #contrast1').show();
		}, 2000);
	}, 2000);
});



// $('#contrastSensitivity #contrastDemo1 button.continue').click(function(){
// 	$('#contrastSensitivity #contrastDemo1').hide();
// 	$('#contrastSensitivity #contrastDemo2').show();
// 	$('#contrastDemo2 input')[$('#contrastDemo1 input:checked').val() - 1].checked = true;
// });
// $('#contrastSensitivity #contrastDemo2 button.continue').click(function(){
// 	$('#contrastSensitivity #contrastDemo2').hide();
// 	$('#contrastSensitivity #meaningStart').show();
	// var blank = function(){
	// 	setTimeout(function(){
	// 		$('#meaning' + stepCounter + ' img').attr('src','assets/images/meaning/blank.png');
	// 		$('#meaning' + stepCounter + ' input').attr('disabled', true).parent().css('color','#DCDCDC');
	// 	}, 500);
	// }
// 	stepper = setInterval(function(){
// 	    if (stepCounter==0){
// 	    	$('#contrastSensitivity #meaningStart').hide();
// 	    	$('#meaningQuestions').show();
// 			$('#contrastSensitivity #meaning1').show();
// 			stepCounter++;
// 			blank();
// 	    }else if (stepCounter==25){
// 	    	$('#contrastSensitivity #meaning' + stepCounter).hide();
// 	    	$('#meaningQuestions').hide();
// 			$('#contrastSensitivity #meaningFinish').show();
// 			stepCounter++;
// 			blank();
// 			clearInterval(stepper);
// 	    }else{
// 	    	$('#contrastSensitivity #meaning' + stepCounter).hide();
// 			$('#contrastSensitivity #meaning' + (stepCounter+1)).show();
// 			stepCounter++;
// 			blank();
// 	    }
// 	}, 1000);
// });
// var meaningReset = function(){
// 	clearInterval(stepper);
// 	$('#contrastSensitivity input').removeAttr('checked');
// 	stepCounter = 0;
// 	$('#meaningQuestions').empty();
// 	for(var x = 1; x <= 25; x++ ){
// 		content = '<div id="meaning' + x + '" style="display: none;"><div class="meaningPicture"><img src="assets/images/meaning/' + x + '.png"/></div><hr/><br/><div class="meaningInstruction" style="width: 670px"><p>Does word #1 or word #2 correspond to the English word? Click on one:</p></div><div class="meaningButtons"><div class="meaningInputs"><label><input type="radio" name="meaning' + x + '" value="1"/>Word #1</label><label><input type="radio" name="meaning' + x + '" value="2"/>Word #2</label></div></div></div>';
// 		$('#meaningQuestions').append(content);
// 	}
// }