var dialog = document.querySelector("dialog");
var btn_show = document.getElementById("show");
var btn_close = document.getElementById("close");

var CharacterImage = new Array();
var ImageNumber = 0;
CharacterImage[0] = new Image();
CharacterImage[0].src = "picture/mon3/mon_059.gif";
CharacterImage[1] = new Image();
CharacterImage[1].src = "picture/mon3/mon_052.gif";
CharacterImage[2] = new Image();
CharacterImage[2].src=  "picture/mon3/mon_054.gif";
CharacterImage[3] = new Image();
CharacterImage[3].src = "picture/mon3/mon_051.gif";
CharacterImage[4] = new Image();
CharacterImage[4].src = "picture/mon23/mon_255.gif";
CharacterImage[5] = new Image();
CharacterImage[5].src=  "picture/mon23/mon_256.gif";

// var BackgroundImage = new Array();
// var BackgroundImageNumber = 0;
// BackgroundImage[0] = new Image();
// BackgroundImage[0].src = "picture/map.png";
// BackgroundImage[1] = new Image();
// BackgroundImage[1].src = "picture/map2.jpg";

btn_show.addEventListener("click", function (){dialog.show()}, false);
btn_close.addEventListener("click", function (){dialog.close()}, false);

function changeCharacterImage(){
    //画像番号を進める
    if (ImageNumber == 5){ImageNumber=0;}
    else{ImageNumber++;}

    //画像を切り替える
    document.getElementById("MonsterImage").src=CharacterImage[ImageNumber].src;
}

// function changeBackgroundImage(){
//     if(BackgroundImageNumber == 1){BackgroundImageNumber=0; alert("BackgroundImageNumber=0")}
//     else{BackgroundImageNumber++; alert("BackgroundImageNumber=1")}

//     document.getElementsByTagName("body").url=BackgroundImage[BackgroundImageNumber].url;
// }