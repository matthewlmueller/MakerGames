window.onload = function() {
        number_pieces            = 6;
        var game_info            = new Game_info();
        var piece_controlers     = [];
        var pieces               = [];
        var game                 = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        var current_turn         = 0;
        var current_piece_x;
        var current_piece_y;


        for(var i = 0; i < number_pieces; i++){
                piece_controlers.push(new Piece_controler());
        }

        function preload () {
                game.load.image('board_image',  game_info.board_image);
                game.load.image('piece_1_image', game_info.piece_1_image);
                game.load.image('piece_2_image', game_info.piece_2_image);
                game.load.image('piece_3_image', game_info.piece_3_image);
                game.load.image('piece_4_image', game_info.piece_4_image);
                game.load.image('piece_5_image', game_info.piece_5_image);
                game.load.image('piece_6_image', game_info.piece_6_image);
        }

        function create () {
                var board = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');

                for(var i = 0; i < number_pieces; i++){
                        current_piece_x     = 'piece_'+ (i+1) + '_x';
                        current_piece_y     = 'piece_'+ (i+1) + '_y';
                        current_piece_image = 'piece_'+ (i+1) + '_image';  
                        
                        pieces[i] = game.add.sprite(game_info.board_tiles[piece_controlers[i].current_tile][current_piece_x], game_info.board_tiles[piece_controlers[i].current_tile][current_piece_y], current_piece_image);                        
                }

                board.anchor.setTo(0.5, 0.5);
                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

                // We need to reset these varibles so that they are correctly initalized for update
                current_piece_x = 'piece_'+ 1 + '_x';
                current_piece_y = 'piece_'+ 1 + '_y';
        }


        
        function update () {
                if(leftKey.isDown){
                        piece_controlers[current_turn].current_tile++;
                        
                        if(piece_controlers[current_turn].current_tile == 20){
                                console.log("inside the if");
                                current_turn++;
                                current_piece_x = 'piece_'+ (current_turn+1) + '_x';
                                current_piece_y = 'piece_'+ (current_turn+1) + '_y';
                                console.log(current_piece_x);
                                console.log(current_piece_y);
                        }
                        console.log(current_piece_x);
                        console.log(current_piece_y);



                        pieces[current_turn].x = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_x];
                        pieces[current_turn].y = game_info.board_tiles[piece_controlers[current_turn].current_tile][current_piece_y];

                }
        }
};