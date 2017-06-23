var presentation_menu_state = {
	create: function () {
		$("#game_canvas").hide();
		$("#presentation_time_div").show();
	},

	update: function () {
		presentation_time = $("#presentation_time_selection").val();
		if(presentation_time != 0){
			game.state.start("presentation");
		}

	}
}