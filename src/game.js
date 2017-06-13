var game_info         = new Game_info();
var game              = new Phaser.Game(game_info.board_x_size, game_info.board_y_size, Phaser.AUTO, 'game_canvas');

var turn_length       = 0;
var number_teams      = 0;
var number_dice_sides = 0;

var piece_controlers = [];
var pieces           = [];

var current_turn     = 0;
var current_piece_x;
var current_piece_y;

var turn_in_progress = 0;
var timer;
var timer_event;

var board;
var timer;
var timer_text;
var suprise_text;
var logo;
var roll_button;

var presentation_time = 0;

game.state.add('load',    load_state);
game.state.add('menu',    menu_state);
game.state.add('board',   board_state);
game.state.add('presentation_menu', presentation_menu_state);
game.state.add('presentation', presentation_state);

game.state.start('load');