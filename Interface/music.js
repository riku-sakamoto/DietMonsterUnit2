"use strict";

var as = audiojs.createAll();
var audio = as[0];

document.getElementById("MusicStart").addEventListener('click',function(){
  audio.play();
});

document.getElementById("MusicStop").addEventListener('click',function(){
  audio.pause();
});