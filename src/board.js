function hide_menu_show_game() {
        $("#logo_div").hide();
        $("#turn_length_div").hide();
        $("#number_teams_div").hide();
        $("#number_dice_sides_div").hide();
        $("#game_canvas").show();
}



function get_display_tile_text(){

}

function turn(){
        timer       = game.time.create();
        timer_event = timer.add(Phaser.Timer.MINUTE * turn_length, end_of_turn, game);
        turn_in_progress = 1;
        roll_button.visible = false;
        current_dice_roll = roll_dice(number_dice_sides);

        // Check if the current dice roll would move the piece past the end of the board
        // If so - just set the current piece's posistion to the final tile
        if(piece_controlers[current_turn].current_tile + current_dice_roll >= 19){
                piece_controlers[current_turn].current_tile = 1;
        } else {
                piece_controlers[current_turn].current_tile += current_dice_roll;
        }

        

        current_roll_value_text.setText(current_dice_roll);
        current_roll_value_text.visible = true;        

        setTimeout(function() {
                pieces[current_turn].x = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_x];
                pieces[current_turn].y = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_y];
                setTimeout(function() {
                        current_roll_value_text.visible = false;                       
                        current_piece_x = 'piece_'+ (current_turn+2) + '_x';
                        current_piece_y = 'piece_'+ (current_turn+2) + '_y';    
                
                }, 2000)
                
        current_tile_text.text = game_info.board_tiles[piece_controlers[current_turn].current_tile]["tile_text"];
        is_suprise(piece_controlers[current_turn].current_tile);
        timer.start();
        }, 2000);

};


function format_time (game_time){
        var total_time_seconds = game_time/1000;
        var minutes            = Math.floor(total_time_seconds / 60);
        var seconds            = Math.floor(total_time_seconds) - (60 * minutes);
        var time_string        = (minutes < 10) ? "0" + minutes : minutes; 
        time_string            += (seconds < 10) ? ":0" + seconds : ":" + seconds; 
        return time_string
};


// Takes the "size" of the dice (the largest number that can be rolled on it)
function roll_dice (dice_size){
        return Math.floor(Math.random() * (dice_size - 1 + 1)) + 1;
};

function is_suprise (current_piece_posistion) {
        if(game_info.suprise_tile_locations.includes(current_piece_posistion) == true){
                var selected_suprise_card          = roll_dice(game_info.surprise_card_descriptions.length-1);
                var selected_surpise_card_text     = game_info.surprise_card_descriptions[selected_suprise_card];
                current_tile_text.setText(selected_surpise_card_text);
        }    
};


function init_popup(){
    var current_piece_image = 'piece_'+ (current_turn+1) + '_image';
    var current_team_piece = game.add.sprite(235, 240, current_piece_image);
    var text = "Team " + (current_turn+1);
    current_team_text.setText(text);
    current_tile_text.text = game_info.board_tiles[piece_controlers[current_turn].current_tile]["tile_text"]
}

// This should be changed - sprites are currently just being piled on top of each other, could theoretically use too much memory
function update_popup () {
        var current_piece_image = 'piece_'+ (current_turn+1) + '_image';
        var current_team_piece = game.add.sprite(235, 240, current_piece_image);
        var text = "Team " + (current_turn+1);
        current_team_text.setText(text);
}

function end_of_turn (){
        current_turn++;
        timer.stop();
        turn_in_progress = 0;
        timer_text.text  = "Time's Up";
        timer_text.addColor("#ff0000", 0)  
        current_tile_text.text = "";

        

        setTimeout(function() {
                timer_text.text     = "";
                timer_text.addColor("#000000", 0)
                if(current_turn == number_teams){
                        end_of_round();
                        return;    
                    
                    } else {
                            update_popup();    
                    }
                roll_button.visible = true;
        }, 3000) 
        
}

function end_of_round () {
    current_turn = 0;
    presentation_button.visible = true;
    next_round_button.visible   = true;
}


function go_to_presentations(){
        game.state.start('presentation_menu');
}

function next_round () {
    presentation_button.visible = false;
    next_round_button.visible   = false;
    update_popup(); 
    roll_button.visible         = true;
}

var board_state = {
        create: function () {
                hide_menu_show_game();
                board                     = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                popup_background          = game.add.sprite(220, 220,'popup_background_image');
                roll_button               = game.add.button(465, 725, 'dice_roll_button_image', turn, game);
                presentation_button       = game.add.button(400, 500, 'go_to_presentation_button_image', go_to_presentations, game); 
                next_round_button         = game.add.button(430, 600, "next_round_button_image", next_round, game);
                current_team_text         = game.add.text(300, 250, "");
                current_roll_value_text   = game.add.text(500, 500, "");
                current_tile_text         = game.add.text(230,  590, "", game_info.surprise_card_text_box_style);
                timer_text                = game.add.text(400,  650, "");


                presentation_button.visible = false;
                next_round_button.visible   = false;

                board.anchor.setTo(0.5, 0.5);

                // Create the correct number of piece controllers
                for(var i = 0; i < number_teams; i++){
                        piece_controlers.push(new Piece_controler());
                }

                for(var i = 0; i < number_teams; i++){
                        current_piece_x     = 'piece_'+ (i+1) + '_x';
                        current_piece_y     = 'piece_'+ (i+1) + '_y';
                        current_piece_image = 'piece_'+ (i+1) + '_image';  
                        pieces[i] = game.add.sprite(game_info.board_tiles[piece_controlers[i].current_tile][current_piece_x], game_info.board_tiles[piece_controlers[i].current_tile][current_piece_y], current_piece_image);                        
                }     


                // We need to reset these variables so that they are correctly initialized for update
                current_piece_image = 'piece_'+ 1 + '_image';
                current_piece_x = 'piece_'+ 1 + '_x';
                current_piece_y = 'piece_'+ 1 + '_y';

                init_popup();
        },

        update: function  () {
                if(turn_in_progress == 1){
                        if(timer_event.delay - timer.ms == 0){
                                turn_in_progress = 0;
                                timer.destroy();
                                return
                        }

                        time_string = format_time(timer_event.delay - timer.ms);

                        timer_text.setText("Time Left: " + time_string);

                        
                        return
                }  
                return
        }
}
