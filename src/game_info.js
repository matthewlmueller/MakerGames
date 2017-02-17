/*
        John Gallagher
        Feb 2017
        game_info.js
        The "Game" object contains all of the information about game
        assets, e.g. the images files used for each piece, the size of the
        board. If you want to make changes, this is where to start
*/

// Constructor for game_info object
// hello this is a change
function Game_info (data) {
        this.board_image   = "/assets/images/board.jpg"
        this.board_x_size  = 1000
        this.board_y_size  = 1000
        this.board_tiles   = [
                {"piece_1_x":850,"piece_1_y":850},
                {"piece_1_x":700,"piece_1_y":850}
        ]
        this.piece_1_image = "/assets/images/pieces/piece1.png"
        this.piece_2_image = ""
        this.piece_3_image = ""
        this.piece_4_image = ""
        this.piece_5_image = ""
        this.piece_6_image = ""
}
