$('#contrastSensitivity > div').hide();
//$('#contrastSensitivity #contrastInstruction1').show();
$('#contrastSensitivity #contrastInstruction5').show();

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
			}, 15000);
		}, 5000);
	}, 5000);
});
$('#contrastSensitivity #contrastDemo1 button.continue').click(function(){
	$('#contrastSensitivity #contrastDemo1').hide();
	$('#contrastSensitivity #contrastDemo2').show();
});