var presentation_menu_state = {
	create: function () {
		$("#game_canvas").hide();
		$("#turn_length_div").hide();
		$("#number_teams_div").hide();
		$("#number_dice_sides_div").hide();
		$("#logo_div").show();
		$("#presentation_length_div").show();
	},

	update: function () {
		presentation_time = $("#presentation_length_selection").val();
		
		if(presentation_time != 0){
			game.state.start('presentation');				
		}

	}
}