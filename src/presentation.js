function update_prompt () {
        console.log(current_prompt);
        console.log(game_info.presentation_prompts.length);
        if(current_prompt+1 < game_info.presentation_prompts.length){
                console.log(game_info)
                console.log(current_prompt);
                current_prompt++;
                prompt_text.setText(game_info.presentation_prompts[current_prompt]);
        }
}

var presentation_state = {
	create: function () {
		$("#game_canvas").show();
		$("#logo_div").hide();
		$("#presentation_length_div").hide();
		game.stage.backgroundColor = "#FFFFFF";


		board                     = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                logo                      = game.add.sprite(275, 35,'logo_image');
                popup_background          = game.add.sprite(220, 220,'popup_background_image');
                prompt_text               = game.add.text(350,  500, "");

                

                logo.scale.setTo(0.3,0.3);
                board.anchor.setTo(0.5, 0.5);

                duration_of_each_prompt   = (presentation_time*60000)/5
                current_prompt = 0;

                timer       = game.time.create(false);
                timer.loop(duration_of_each_prompt, update_prompt, this);
                timer.start();

	},

	update: function () {
	}

}