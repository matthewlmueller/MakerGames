function format_time (game_time){
        var total_time_seconds = game_time/1000;
        var minutes            = Math.floor(total_time_seconds / 60);
        var seconds            = Math.floor(total_time_seconds) - (60 * minutes);
        var time_string        = (minutes < 10) ? "0" + minutes : minutes; 
        time_string            += (seconds < 10) ? ":0" + seconds : ":" + seconds; 
        return time_string
}

function advance_turn (){
        console.log("omg new turn");
}

// Takes the "size" of the dice (the largest number that can be rolled on it)
function roll_dice (dice_size){
        return Math.floor(Math.random() * (dice_size - 1 + 1)) + 1;
}

window.onload = function() {
        // Will eventually be imported from the main menu
        var number_pieces    = 6; // TODO: change me to a more accurate name
        var length_of_turn   = 0.1; // In minutes

        var game_info        = new Game_info();
        var piece_controlers = [];
        var pieces           = [];
        var game             = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        var current_turn     = 0;
        var current_piece_x;
        var current_piece_y;

        var board;
        var timer_text;
        var logo;

        // Create the correct number of piece controlers
        for(var i = 0; i < number_pieces; i++){
                piece_controlers.push(new Piece_controler());
        }

        function preload () {
                game.load.image('board_image',   game_info.board_image);
                game.load.image('piece_1_image', game_info.piece_1_image);
                game.load.image('piece_2_image', game_info.piece_2_image);
                game.load.image('piece_3_image', game_info.piece_3_image);
                game.load.image('piece_4_image', game_info.piece_4_image);
                game.load.image('piece_5_image', game_info.piece_5_image);
                game.load.image('piece_6_image', game_info.piece_6_image);
                game.load.image('logo_image',    game_info.logo_image);

        }

        function create () {
                board      = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                timer_text = game.add.text(400,  470, "This is where the time remaining in the current turn should be");
                logo       = game.add.sprite(275, 200,'logo_image');

                logo.scale.setTo(0.3,0.3)
                board.anchor.setTo(0.5, 0.5);

                for(var i = 0; i < number_pieces; i++){
                        current_piece_x     = 'piece_'+ (i+1) + '_x';
                        current_piece_y     = 'piece_'+ (i+1) + '_y';
                        current_piece_image = 'piece_'+ (i+1) + '_image';  
                        
                        pieces[i] = game.add.sprite(game_info.board_tiles[piece_controlers[i].current_tile][current_piece_x], game_info.board_tiles[piece_controlers[i].current_tile][current_piece_y], current_piece_image);                        
                }       
                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

                // We need to reset these varibles so that they are correctly initalized for update
                current_piece_x = 'piece_'+ 1 + '_x';
                current_piece_y = 'piece_'+ 1 + '_y';
                game.time.events.add(Phaser.Timer.MINUTE * length_of_turn, advance_turn, this);

        }

        function update () {
                var time_string       = format_time(game.time.events.duration);
                var current_dice_roll;

                if(leftKey.isDown){
                        console.log(current_dice_roll = roll_dice(6))
                        if(piece_controlers[current_turn].current_tile += current_dice_roll < 20){
                                piece_controlers[current_turn].current_tile += current_dice_roll;
                                if(piece_controlers[current_turn].current_tile == 20){ 
                                        console.log(current_turn)
                                        current_turn++;
                                        current_piece_x = 'piece_'+ (current_turn+1) + '_x';
                                        current_piece_y = 'piece_'+ (current_turn+1) + '_y';
                                }
                        }

                                pieces[current_turn].x = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_x];
                                pieces[current_turn].y = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_y];        
                        
                }

                timer_text.setText("Time Left: " + time_string);
        }
}