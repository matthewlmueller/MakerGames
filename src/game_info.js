/*
        John Gallagher
        Feb 2017
        game_info.js
        The "Game" object contains all of the information about game
        assets, e.g. the images files used for each piece, the size of the
        board. If you want to make changes, this is where to start
*/

// Constructor for game_info object
function Game_info (data) {
        this.board_image   = "/assets/images/board.jpg";
        this.board_x_size  = 1000;
        this.board_y_size  = 1000;
        this.board_tiles   = [
        // First Row
                // Tile 1
                {
                        "piece_1_x":830,
                        "piece_1_y":825
                },
                // Tile 2
                {
                        "piece_1_x":680,
                        "piece_1_y":825
                },
                // Tile 3
                {
                        "piece_1_x":520,
                        "piece_1_y":825
                },
                // Tile 4
                {
                        "piece_1_x":360,
                        "piece_1_y":825
                },
                // Tile 5
                {
                        "piece_1_x":210,
                        "piece_1_y":825
                },
                // Tile 6
                {
                        "piece_1_x":50,
                        "piece_1_y":825
                },
        // First Column
                // Tile 7
                {
                        "piece_1_x":50,
                        "piece_1_y":675
                },
                // Tile 8
                {
                        "piece_1_x":50,
                        "piece_1_y":525
                },
                // Tile 9
                {
                        "piece_1_x":50,
                        "piece_1_y":360
                },
                // Tile 10
                {
                        "piece_1_x":50,
                        "piece_1_y":200
                },
                // Tile 11
                {
                        "piece_1_x":50,
                        "piece_1_y":50
                },
        // Second Row
                // Tile 12
                {
                        "piece_1_x":225,
                        "piece_1_y":50
                },
                // Tile 13
                {
                        "piece_1_x":375,
                        "piece_1_y":50
                },
                // Tile 14
                {
                        "piece_1_x":525,
                        "piece_1_y":50
                },
                // Tile 15
                {
                        "piece_1_x":675,
                        "piece_1_y":50
                },
                // Tile 16
                {
                        "piece_1_x":850,
                        "piece_1_y":50
                },
        // Second Column
                // Tile 17
                {
                        "piece_1_x":835,
                        "piece_1_y":200
                },
                // Tile 18
                {
                        "piece_1_x":835,
                        "piece_1_y":360
                },
                // Tile 19
                {
                        "piece_1_x":835,
                        "piece_1_y":520
                },
                // Tile 20
                {
                        "piece_1_x":835,
                        "piece_1_y":680
                },
        ]

        // Piece Images
        this.piece_1_image = "/assets/images/pieces/piece1.png";
        this.piece_2_image = "/assets/images/pieces/piece2.png";
        this.piece_3_image = "/assets/images/pieces/piece3.png";
        this.piece_4_image = "/assets/images/pieces/piece4.png";
        this.piece_5_image = "/assets/images/pieces/piece5.png";
        this.piece_6_image = "/assets/images/pieces/piece6.png";
}
