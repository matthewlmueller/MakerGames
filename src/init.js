window.onload = function() {
        var game = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create });


        function preload () {
                game.load.image('board_image', 'assets/board.jpg');
                game.load.image('piece1_image', 'assets/pieces/piece1.png');
        }

        function create () {
                var board  = game.add.sprite(game.world.centerX, game.world.centerY, 'board_image');
                var piece1 = game.add.sprite(900, 900, 'piece1_image'); 
                board.anchor.setTo(0.5, 0.5);
        }

};
