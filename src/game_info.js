/*
        John Gallagher
        Feb 2017
        game_info.js
        The "Game" object contains all of the information about game
        assets, e.g. the images files used for each piece, the size of the
        board. If you want to make changes, this is where to start
*/

// Constructor for game_info object
function Game_info () {
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
                        "piece_6_y":925,

                        "tile_text":"Frame Problem / Start / continue"
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
                        "piece_6_y":925,

                        "tile_text":"Describe Your Client"

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
                        "piece_6_y":925,

                        "tile_text":"Brainstorm Similar Things Already Made"

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
                        "piece_6_y":925,

                        "tile_text":"List Design Constraints"

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
                        "piece_6_y":925,

                        "tile_text":"Measure Success of Your Solution"

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
                        "piece_6_y":925,

                        "tile_text":"Make"

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
                        "piece_6_y":770,

                        "tile_text":"Identify Strengths and Weakness of Materials"

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
                        "piece_6_y":615,

                        "tile_text":"Identify Natural Resources that are in the Materials"


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
                        "piece_6_y":460,

                        "tile_text":"Surprise!"

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
                        "piece_6_y":300,

                        "tile_text":"Imagine if There Were no Constraints"

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
                        "piece_6_y":150,

                        "tile_text":"Evaluate"
                        

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
                        "piece_6_y":100,

                        "tile_text":"Act Out Client's Response to Your Prototype"
                       
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
                        "piece_6_y":100,

                        "tile_text":"List Ways to Evaluate Your Prototype with Numbers"
                       

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
                        "piece_6_y":100,

                        "tile_text":"Identify Different Parts of Your Prototype To Test"
                       
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
                        "piece_6_y":100,

                        "tile_text":"List Your Prototype's Best & Worst Features"
                        

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
                        "piece_6_y":100,

                        "tile_text":"Share"
                        

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
                        "piece_6_y":300,

                        "tile_text":"Name Your Product"
                        

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
                        "piece_6_y":525,

                        "tile_text":"Design an Adjective for Your Product"
                        

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
                        "piece_6_y":615,

                        "tile_text":"Surprise!"
                        


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
                        "piece_6_y":770,

                        "tile_text":"Identify Your Product's Selling Point in a Few Words"

                },
        ]

        // Piece Images
        this.piece_1_image = "/assets/images/pieces/piece1.png";
        this.piece_2_image = "/assets/images/pieces/piece2.png";
        this.piece_3_image = "/assets/images/pieces/piece3.png";
        this.piece_4_image = "/assets/images/pieces/piece4.png";
        this.piece_5_image = "/assets/images/pieces/piece5.png";
        this.piece_6_image = "/assets/images/pieces/piece6.png";

        // Other Images
        this.logo_image             = "/assets/images/logo.png";
        this.dice_roll_button_image = "/assets/images/popup/roll_button.png"; 
        this.popup_background_image = "/assets/images/popup/popup_background.png"
        
        //Surprise Card Text
        this.surprise_card_descriptions = [
                "Build Different - Replace the materials you are using in (part of) your design with other materials, and rebuild",
                "Build more - Grab one handful of additional materials and add them to your design",
                "Upside Down - Turn your design upside down. Design a way you could make the prototype work from this orientation.",
                "Sideways - Turn your design on its side. Design a way you could make the prototype work from this orientation",
                "Constructive Compliments - Go around to every group and identify one part of their design that you like and why you like it. Tell the team what you like and your reasoning.",
                "Drop Test - Drop your prototype from one foot off the ground.",
                "Ad Jingle - Write an advertising jingle about your design.",
                "One Hand - For the next round of building, each player on the team can contribute only one hand to your prototyping.",
                "Budget Cuts - Change your design so you can build it for ½ the original costs or amount of materials.",
                "Storytelling - Write a short story, 3-4 sentences in length, about a potential end-user of your design. (Retain a copy of this story because it may help you write an ad, design a logo, or during presentations)",
                'One More Thing - Identify the coolest feature of your design.  Create a 30 second pitch for your prototype that convincingly describes your product without mentioning it, then add, “and one more thing . . .”',
                "Logo - Design and sketch "
        ];

        this.surprise_card_text_box_style = {font:"14px Arial"};

}
