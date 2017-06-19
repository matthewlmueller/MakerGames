var load_state = {
	preload: function () {
                game.load.image('board_image',      game_info.board_image);
                game.load.image('piece_1_image',    game_info.piece_1_image);
                game.load.image('piece_2_image',    game_info.piece_2_image);
                game.load.image('piece_3_image',    game_info.piece_3_image);
                game.load.image('piece_4_image',    game_info.piece_4_image);
                game.load.image('piece_5_image',    game_info.piece_5_image);
                game.load.image('piece_6_image',    game_info.piece_6_image);
                game.load.image('logo_image',       game_info.logo_image);
                game.load.image('go_to_presentation_button_image',game_info.go_to_presentation_button_image);
                game.load.image('next_round_button_image', game_info.next_round_button_image);
                game.load.image('dice_roll_button_image', game_info.dice_roll_button_image);
                game.load.image('popup_background_image', game_info.popup_background_image);

        },

        create: function () {
        	game.state.start('menu');
        }
};