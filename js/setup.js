var listItem = "";
$('#content > div').each(function(){
	console.log(this.id);
	listItem = "<li class='listItem' name='" + this.id + "'>" + this.id + "</li>";
	$('#available').append(listItem);
});
$('#available .listItem').click(function(){
	var $this = $(this);
	console.log($this.attr('disabled'));
	if($this.attr('disabled') == 'false' || $this.attr('disabled') == undefined){
		$this.clone().appendTo("#using").click(function(){
			$('#available .listItem[name="' + $this.attr("name") + '"]').attr('disabled', false).css('color','black');
			$(this).remove();
		});
		$this.attr('disabled',true).css('color','grey');
	}
});