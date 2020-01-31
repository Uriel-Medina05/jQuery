/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function(){
	$("#d1").draggable({ 
		// axis: "x"
		revert: "invalid"
	});

	$("#d2").draggable({ 
		// axis: "y",
		// grid: [50,100],
		snap: "#d1, #d2",
		// helper: "clone"
		helper: function(){
			return "<div>This is a helper</div>"
		}
	});
	
	$("#d3").draggable({ 
		// containment: "#draggables",
		handle: "header"
	});

	$("#d1, #d2, #d3").draggable(
		"option", "stack", ".ui-draggable");

	$("#trash").droppable({
		activeClass: "opaque",
		accept: "#d3",
		drop: function (event, ui){
			// ui.draggable.remove();
			ui.draggable.fadeOut( function() {
				ui.draggable.remove();
			});
		}
	});

	$("#sortable").sortable({ axis: "y", placeholder: "placeholder"});

	$("#d3").resizable({ aspectRatio: true, alsoResize: "#d2"});
})
