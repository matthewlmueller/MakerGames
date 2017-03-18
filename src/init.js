window.onload = function() {
        number_pieces            = 6;
        var game_info            = new Game_info();
        var piece_controlers     = [];
        var pieces               = [];

        for(var i = 0; i < number_pieces; i++){
                piece_controlers.push(new Piece_controler());
        }

        var game                 = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });
        var current_teams_turn   = 1;

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
                        current_piece       = 'piece_'+ (i+1) + '_';
                        current_piece_x     = current_piece + 'x';
                        current_piece_y     = current_piece + 'y';
                        current_piece_image = current_piece + 'image';  
                        
                        pieces[i] = game.add.sprite(game_info.board_tiles[piece_controlers[i].current_tile][current_piece_x], game_info.board_tiles[piece_controlers[i].current_tile][current_piece_y], current_piece_image);                        
                }

                board.anchor.setTo(0.5, 0.5);
                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        }

        function update () {
                if(leftKey.isDown){
                        piece_controlers[0].current_tile++;
                        pieces[0].x = game_info.board_tiles[piece_controlers[0].current_tile].piece_1_x;
                        pieces[0].y = game_info.board_tiles[piece_controlers[0].current_tile].piece_1_y;
                }
        }
};
