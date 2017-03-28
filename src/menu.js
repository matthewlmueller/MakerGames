var menu_state = {
	create: function () {

		while (turn_length <= 0){
			turn_length = prompt(game_info.turn_length_prompt_text);
		} 

		while (number_teams <= 0){
			number_teams = prompt(game_info.number_teams_primpt_text);
			if(number_teams > 6){
				number_teams = 0;
			}
		}

		game.state.start('board')	
	}
	
}