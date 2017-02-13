window.onload = function() {
        var game_info = new Game_info();
        var piece_1_control = new Piece_controler();
        var game = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        function preload () {
                game.load.image('board_image',  game_info.board_image);
                game.load.image('piece_1_image', game_info.piece_1_image);
        }

        function create () {
                board  = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                piece_1 = game.add.sprite(game_info.board_tiles[piece_1_control.current_tile].piece_1_x, game_info.board_tiles[piece_1_control.current_tile].piece_1_y, 'piece_1_image');
                board.anchor.setTo(0.5, 0.5);
                leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        }


        function update () {
                if(leftKey.isDown){
                        piece_1_control.current_tile++;
                        console.log(piece_1)
                        piece_1.x = game_info.board_tiles[piece_1_control.current_tile].piece_1_x;
                        piece_1.y = game_info.board_tiles[piece_1_control.current_tile].piece_1_y;
                }
        }
};
