var Car = function(game,x,y){

var self = this;

Phaser.Sprite.call(this,game,x,y,'car');
self.anchor.setTo(0.5,0.5);

//todo replace phaser physics with custom physics 
game.physics.enable(self, Phaser.Physics.ARCADE);

self.props = {
  speed:100
};

self.props.update = function(){
self.body.velocity.x = 0;
self.body.velocity.y = 10;
self.body.angularVelocity = 0;

game.physics.arcade.velocityFromAngle(self.angle, self.props.speed, self.body.velocity);


};

self.props.onSlow = function(){


};

self.props.onOutSlow = function(){
var a = game.physics.arcade.angleToPointer(self);

game.add.tween(self).to({rotation:a},700,Phaser.Easing.Linear.None,true);

};




game.add.existing(self);
};

Car.prototype = Object.create(Phaser.Sprite.prototype);
Car.constructor = Car;