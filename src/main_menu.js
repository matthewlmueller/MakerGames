var menu_state = {
	create: function (){
		$("#game_canvas").hide();
		$("#presentation_prep_time_div").hide();
		$("#presentation_prep_time_div").hide();
		$("#presentation_time_div").hide();
	},

	update: function () {
		turn_length       = $("#turn_length_selection").val();
		number_teams      = $("#number_teams_selection").val();
		number_dice_sides = $("#number_dice_sides_selection").val();
		
		if(turn_length != 0 && number_teams != 0 && number_dice_sides != 0){
			game.state.start('board')				
		}
	}	
}