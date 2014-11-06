$('#demographicSurvey > div').hide();
$('#demographicSurvey #demographicSurvey1').show();

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
	$('#demographicSurvey #demographicSurvey1').show();
}