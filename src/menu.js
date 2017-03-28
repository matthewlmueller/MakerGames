var menu_state = {
	create: function () {

		while (turn_length <= 0){
			turn_length = prompt(game_info.turn_length_prompt_text);
		} 

		while (number_teams <= 0){
			number_teams = prompt(game_info.number_teams_prompt_text);
			if(number_teams > 6){
				number_teams = 0;
			}
		}

		while (number_dice_sides <= 0){
			number_dice_sides = prompt(game_info.number_dice_sides_prompt_text)
		}

		game.state.start('board')	
	}
	
}