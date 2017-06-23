function next_presentation (){ 
	timer.destroy();

	console.log(current_turn);
	console.log(number_teams);

	if(current_turn+1 == number_teams) {
		return;
	}

	current_turn++;
	update_popup();
	timer = game.time.create(false);
        timer.loop(duration_of_each_presentation, next_presentation, this);
        timer.start();
}


function update_popup () {
        var current_piece_image = 'piece_'+ (current_turn+1) + '_image';
        var current_team_piece = game.add.sprite(235, 240, current_piece_image);
        var text = "Team " + (current_turn+1);
        current_team_text.setText(text);
}

var presentation_state = {
	create: function () {
		current_turn = 0; 
		$("#presentation_time_div").hide();
		$("#game_canvas").show();

		board                         = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                logo                          = game.add.sprite(275, 35,'logo_image');
                popup_background              = game.add.sprite(220, 220,'popup_background_image');

                logo.scale.setTo(0.3,0.3);
                board.anchor.setTo(0.5, 0.5);

                current_team_text             = game.add.text(300, 250, "");
                duration_of_each_presentation = presentation_time*60000;
                timer_text                = game.add.text(400,  650, "");

                timer                     = game.time.create(false);
                timer.loop(duration_of_each_presentation, next_presentation, this);
                timer.start();

                update_popup();

	},

	update: function () {
		time_string = format_time(timer_event.delay - timer.ms);
                timer_text.setText("Time Left: " + time_string);

	}
}