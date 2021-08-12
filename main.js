var canvas = new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

width_of_block=30;
height_of_block=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });



}
function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(width_of_block);
        block_object.scaleToWidth(height_of_block);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}