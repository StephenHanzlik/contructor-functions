'use strict';


function Cup(contents, temp, color){
  this.contents = contents;
  this.temp = temp;
  this.color = color;
  this.full = false;
}

Cup.prototype.fill = function (){
   this.full = true;
}


var teaCup = new Cup("tea", "hot", "green");
var coffeeCup = new Cup("coffee", "hot", "white");
var mateCup = new Cup("mate", "cold", "clear")

teaCup.fill();
console.log(teaCup);
