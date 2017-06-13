var presentation_state = {
	create: function () {
		$("#game_canvas").show();
		$("#logo_div").hide();
		$("#presentation_length_div").hide();
		game.stage.backgroundColor = "#FFFFFF";


		logo                      = game.add.sprite(275, 60,'logo_image');
                popup_background          = game.add.sprite(220, 220,'popup_background_image');
                prompt_text               = game.add.text(350,  500, "");
                logo.scale.setTo(0.3,0.3);
                duration_of_each_prompt   = presentation_time/5
                current_prompt = 0;
	},

	update: function () {
		timer       = game.time.create();
        	timer_event = timer.add(Phaser.Timer.MINUTE * duration_of_each_prompt, end_of_turn, game);
        	prompt_text.setText(game_info.presentation_prompts[current_prompt]);

        	if(timer_event.delay - timer.ms == 0){
                        current_prompt++;
                        timer.destroy();
                        timer = game.time.create();
                        timer_event = timer.add(Phaser.Timer.MINUTE * duration_of_each_prompt, end_of_turn, game);   			
                }
		
	}
}