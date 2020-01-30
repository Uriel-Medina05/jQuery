/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function(){

	$("#dialog").dialog(
		{
			autoOpen: false,
			modal: true,
			resizable: false,
			draggable: false,
			position: "top",
			buttons: {
				"Yes, I do!": function(){
					$('#dialog').dialog('close');
					$('#dialogDecision').text("Yes I did!!");
				 },
				"No": function() { }
			}

		}
	);


	$('#openDialog').click(function() {
		$('#dialog').dialog('open');
	});

	// $('#progress').progressbar({value: 60});

	$('#progress').progressbar({value: 100});

	var value = 100;

	countdown();

	function countdown(){
		value--;
		$('#progress').progressbar("option", "value", value);
		

		if (value > 0) {
			setTimeout(countdown, 100);
			$('#countdown').text(value);
		}
		else{
			$('#countdown').text('Completed..!');
			// $('#progress').hide();
			$('#progress').disable();
		}
	}
	
});