// const img = document.querySelectorAll('img')[0];
// const img = document.getElementById("image1");
// const img = document.getElementsByClassName("class_image1")[0];
const img = document.querySelectorAll("img")[0];
const img1= document.querySelectorAll("img")[1];

const h1tag = document.getElementById("heading");

var random1 = Math.floor(Math.random()*6)+1;
console.log(random1);

var randomimg = "dice" + random1 + ".png";

var imgsrc = "images/" + randomimg;

img.setAttribute("src", imgsrc);


var random2 = Math.floor(Math.random()*6)+1;
console.log(random2);

var randomimg2 = "dice" + random2 + ".png";

var imgsrc2 = "images/" + randomimg2;

img1.setAttribute("src", imgsrc2);

if(random1 > random2){
    // h1tag.setAttribute("innerHTML","Player1 Wins!!!");
    h1tag.innerHTML = "Player 1 Wins!!!";
}
else if(random1 < random2){
    h1tag.innerHTML = "Player 2 Wins!!";
}
else{
    h1tag.innerHTML = "DRAW!!!";
}

const act_btn = document.getElementById('act_btn');

