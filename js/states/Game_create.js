var GameState = function(game) {
};


GameState.prototype.create = function() {

var car = new Car(this.game,this.game.world.centerX,this.game.world.centerY);
g_game.slowMode = false;
g_game.slowFactor = 0;
g_game.car = car;


this.game.input.onTap.add(function(){
g_game.slowMode = g_game.slowMode ? false : true;

if(g_game.slowMode){
g_game.slowFactor = 6;
this.game.time.slowMotion = g_game.slowFactor;
//this.game.time.desiredFps = 60 + (g_game.slowFactor > 1
                             //   ? g_game.slowFactor * 20 : 0);
}else{
g_game.car.props.onOutSlow();
this.game.time.slowMotion = 0;
   this.game.time.slowFactor = 0;
//this.game.time.desiredFps = 60;

}
},this);






};
