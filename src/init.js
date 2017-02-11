window.onload = function() {
        var game = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create });


        function preload () {
                game.load.image('board', 'assets/board.jpg');
                game.load.image('piece1', 'assets/pieces/piece1.png')
        }

        function create () {
                var board = game.add.sprite(game.world.centerX, game.world.centerY, 'board');
                board.anchor.setTo(0.5, 0.5);
        }

};
