"use strict";

var page = {
 
  ready : false,
   
  play : function()
  {
    if(page.ready)
    {
      page.wav.play();
    }
  },
   
  stop : function()
  {
    if(page.ready)
    {
      page.wav.stop();
    }
  },
   
  page.onload = function() // body 要素の on_load 属性から呼ばれる
  {
    page.wav = new Audio('music/02_Money,Money,Money.m4a');
    page.wav.onload = function()
    {
      document.getElementById("page_play").disabled=false;
      document.getElementById("page_stop").disabled=false;
      page.ready = true;
    }
  },
   
  };