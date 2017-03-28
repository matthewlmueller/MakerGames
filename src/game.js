var game       = new Phaser.Game(1000, 1000, Phaser.AUTO, '');
var game_info  = new Game_info();

var turn_length       = 0;
var number_teams      = 0;
var number_dice_sides = 0;

var piece_controlers = [];
var pieces           = [];

var current_turn     = 0;
var current_piece_x;
var current_piece_y;

var board;
var timer_text;
var suprise_text;
var logo;
var roll_button;

game.state.add('load',    load_state);
game.state.add('menu',    menu_state);
game.state.add('board',   board_state);
//game.state.add('present', present_state);

game.state.start('load');