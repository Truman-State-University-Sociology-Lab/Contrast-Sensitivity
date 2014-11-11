$('#demographicSurvey > div').hide();
$('#demographicSurvey #demographicSurvey1').show();
$('#demographicSurvey input[value="2"]').prop('checked','true');

$('#demographicSurvey input[value="1"]').click(function(){
	alert("Network Indicates You are Assigned Seat #2, Please Correct");
});

$('#demographicSurvey #demographicSurvey1 button.continue').click(function(){
	$('#demographicSurvey #demographicSurvey1').hide();
	$('#demographicSurvey #demographicSurvey2').show();
});
$('#demographicSurvey #demographicSurvey2 button.continue').click(function(){
	$('#demographicSurvey #demographicSurvey2').hide();
	$('#demographicSurvey #demographicSurvey3').show();
});

var demographicSurveyReset = function(){
	$('#demographicSurvey > div').hide();
	$('#demographicSurvey #demographicSurvey3').show();
}