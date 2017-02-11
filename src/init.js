window.onload = function() {


    var game = new Phaser.Game(1000, 1000, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {

        game.load.image('board', 'assets/board.jpg');

    }

    function create () {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'board');
        logo.anchor.setTo(0.5, 0.5);

    }

};
