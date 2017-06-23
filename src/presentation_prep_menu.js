var presentation_prep_menu_state = {
	create: function () {
		$("#game_canvas").hide();
		$("#turn_length_div").hide();
		$("#number_teams_div").hide();
		$("#number_dice_sides_div").hide();
		$("#logo_div").show();
		$("#presentation_prep_time_div").show();
	},

	update: function () {
		presentation_prep_time = $("#presentation_prep_time_selection").val();
		
		if(presentation_prep_time != 0){
			game.state.start('presentation_prep');				
		}

	}
}