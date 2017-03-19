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
                        "piece_1_y":825,

                        "piece_2_x":875,
                        "piece_2_y":825,

                        "piece_3_x":915,
                        "piece_3_y":830,

                        "piece_4_x":830,
                        "piece_4_y":925,

                        "piece_5_x":875,
                        "piece_5_y":925,

                        "piece_6_x":925,
                        "piece_6_y":925
                },
                // Tile 2
                {
                        "piece_1_x":680,
                        "piece_1_y":825,

                        "piece_2_x":725,
                        "piece_2_y":825,

                        "piece_3_x":770,
                        "piece_3_y":825,

                        "piece_4_x":680,
                        "piece_4_y":925,

                        "piece_5_x":725,
                        "piece_5_y":925,

                        "piece_6_x":785,
                        "piece_6_y":925

                },
                // Tile 3
                {
                        "piece_1_x":520,
                        "piece_1_y":825,

                        "piece_2_x":570,
                        "piece_2_y":825,

                        "piece_3_x":615,
                        "piece_3_y":825,

                        "piece_4_x":520,
                        "piece_4_y":925,

                        "piece_5_x":570,
                        "piece_5_y":925,

                        "piece_6_x":615,
                        "piece_6_y":925

                },
                // Tile 4
                {
                        "piece_1_x":360,
                        "piece_1_y":825,

                        "piece_2_x":410,
                        "piece_2_y":825,

                        "piece_3_x":455,
                        "piece_3_y":825,

                        "piece_4_x":360,
                        "piece_4_y":925,

                        "piece_5_x":410,
                        "piece_5_y":925,

                        "piece_6_x":455,
                        "piece_6_y":925

                },
                // Tile 5
                {
                        "piece_1_x":215,
                        "piece_1_y":825,

                        "piece_2_x":260,
                        "piece_2_y":825,

                        "piece_3_x":305,
                        "piece_3_y":825,

                        "piece_4_x":215,
                        "piece_4_y":925,

                        "piece_5_x":410,
                        "piece_5_y":925,

                        "piece_6_x":455,
                        "piece_6_y":925

                },
                // Tile 6
                {
                        "piece_1_x":50,
                        "piece_1_y":825,

                        "piece_2_x":100,
                        "piece_2_y":825,

                        "piece_3_x":150,
                        "piece_3_y":825,

                        "piece_4_x":50,
                        "piece_4_y":925,

                        "piece_5_x":100,
                        "piece_5_y":925,

                        "piece_6_x":150,
                        "piece_6_y":925

                },
        // First Column
                // Tile 7
                {
                        "piece_1_x":50,
                        "piece_1_y":675,        

                        "piece_2_x":50,
                        "piece_2_y":725,

                        "piece_3_x":50,
                        "piece_3_y":770,

                        "piece_4_x":100,
                        "piece_4_y":675,

                        "piece_5_x":100,
                        "piece_5_y":725,

                        "piece_6_x":100,
                        "piece_6_y":770

                },
                // Tile 8
                {
                        "piece_1_x":50,
                        "piece_1_y":525,

                        "piece_2_x":50,
                        "piece_2_y":575,

                        "piece_3_x":50,
                        "piece_3_y":615,

                        "piece_4_x":100,
                        "piece_4_y":525,

                        "piece_5_x":100,
                        "piece_5_y":575,

                        "piece_6_x":100,
                        "piece_6_y":615


                },
                // Tile 9
                {
                        "piece_1_x":50,
                        "piece_1_y":360,

                        "piece_2_x":50,
                        "piece_2_y":410,

                        "piece_3_x":50,
                        "piece_3_y":460,

                        "piece_4_x":100,
                        "piece_4_y":360,

                        "piece_5_x":100,
                        "piece_5_y":410,

                        "piece_6_x":100,
                        "piece_6_y":460

                },
                // Tile 10
                {
                        "piece_1_x":50,
                        "piece_1_y":200,

                        "piece_2_x":50,
                        "piece_2_y":250,

                        "piece_3_x":50,
                        "piece_3_y":300,

                        "piece_4_x":100,
                        "piece_4_y":200,

                        "piece_5_x":100,
                        "piece_5_y":250,

                        "piece_6_x":100,
                        "piece_6_y":300

                },
                // Tile 11
                {
                        "piece_1_x":50,
                        "piece_1_y":50,

                        "piece_2_x":50,
                        "piece_2_y":100,

                        "piece_3_x":50,
                        "piece_3_y":150,

                        "piece_4_x":100,
                        "piece_4_y":50,

                        "piece_5_x":100,
                        "piece_5_y":100,

                        "piece_6_x":100,
                        "piece_6_y":150

                },
        // Second Row
                // Tile 12
                {
                        "piece_1_x":225,
                        "piece_1_y":50,

                        "piece_2_x":275,
                        "piece_2_y":50,

                        "piece_3_x":325,
                        "piece_3_y":50,

                        "piece_4_x":225,
                        "piece_4_y":100,

                        "piece_5_x":275,
                        "piece_5_y":100,

                        "piece_6_x":325,
                        "piece_6_y":100
                },
                // Tile 13
                {
                        "piece_1_x":375,
                        "piece_1_y":50,

                        "piece_2_x":425,
                        "piece_2_y":50,

                        "piece_3_x":450,
                        "piece_3_y":50,

                        "piece_4_x":375,
                        "piece_4_y":100,

                        "piece_5_x":425,
                        "piece_5_y":100,

                        "piece_6_x":450,
                        "piece_6_y":100

                },
                // Tile 14
                {
                        "piece_1_x":525,
                        "piece_1_y":50,

                        "piece_2_x":575,
                        "piece_2_y":50,

                        "piece_3_x":620,
                        "piece_3_y":50,

                        "piece_4_x":525,
                        "piece_4_y":100,

                        "piece_5_x":575,
                        "piece_5_y":100,

                        "piece_6_x":620,
                        "piece_6_y":100

                },
                // Tile 15
                {
                        "piece_1_x":675,
                        "piece_1_y":50,

                        "piece_2_x":725,
                        "piece_2_y":50,

                        "piece_3_x":770,
                        "piece_3_y":50,

                        "piece_4_x":675,
                        "piece_4_y":100,

                        "piece_5_x":725,
                        "piece_5_y":100,

                        "piece_6_x":770,
                        "piece_6_y":100

                },
                // Tile 16
                {
                        "piece_1_x":850,
                        "piece_1_y":50,

                        "piece_2_x":900,
                        "piece_2_y":50,

                        "piece_3_x":930,
                        "piece_3_y":50,

                        "piece_4_x":850,
                        "piece_4_y":100,

                        "piece_5_x":900,
                        "piece_5_y":100,

                        "piece_6_x":930,
                        "piece_6_y":100

                },
        // Second Column
                // Tile 17
                {
                        "piece_1_x":835,
                        "piece_1_y":200,

                        "piece_2_x":835,
                        "piece_2_y":250,

                        "piece_3_x":835,
                        "piece_3_y":300,

                        "piece_4_x":935,
                        "piece_4_y":200,

                        "piece_5_x":935,
                        "piece_5_y":250,

                        "piece_6_x":935,
                        "piece_6_y":300

                },
                // Tile 18
                {
                        "piece_1_x":835,
                        "piece_1_y":360,

                        "piece_2_x":835,
                        "piece_2_y":410,

                        "piece_3_x":835,
                        "piece_3_y":525,

                        "piece_4_x":935,
                        "piece_4_y":360,

                        "piece_5_x":935,
                        "piece_5_y":410,

                        "piece_6_x":935,
                        "piece_6_y":525

                },
                // Tile 19
                {
                        "piece_1_x":835,
                        "piece_1_y":520,

                        "piece_2_x":835,
                        "piece_2_y":570,

                        "piece_3_x":835,
                        "piece_3_y":615,

                        "piece_4_x":935,
                        "piece_4_y":520,

                        "piece_5_x":935,
                        "piece_5_y":570,

                        "piece_6_x":935,
                        "piece_6_y":615


                },
                // Tile 20
                {
                        "piece_1_x":835,
                        "piece_1_y":680,

                        "piece_2_x":835,
                        "piece_2_y":730,

                        "piece_3_x":835,
                        "piece_3_y":770,

                        "piece_4_x":935,
                        "piece_4_y":680,

                        "piece_5_x":935,
                        "piece_5_y":730,

                        "piece_6_x":935,
                        "piece_6_y":770

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
