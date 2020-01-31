/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {

   //  $("#target").click(function() {
   //      $(this).animate({
   //          "width": "+=20",
   //          "height": "+=20",
   //          "background-color": "red"
            
   //      });
   // });

// ************ EXPLODE *************
   // $("#target").click(function() {
   //    $(this).effect("explode", { pieces: 64});
   // });
   

    $("#target")
        .css("position", "relative")
        .click(function () {
            $(this).toggleClass("leftTarget", "slow");
        });

    $("#draggables").children().draggable();

    $("#trash").droppable({
        activeClass: "opaque",
        drop: function (event, ui) {
            ui.draggable.hide("explode");
        }
    });
});


