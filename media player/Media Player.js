var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var repeatBtn = document.querySelector("#repeat");
var shuffleBtn = document.querySelector("#shuffle");
var audio = document.querySelector("audio");
var S1Btn = document.querySelector("#song1");
var S2Btn = document.querySelector("#song2");
var S3Btn = document.querySelector("#song3");

let track_index = 0;
let isPlaying = false;
let updateTimer;
let curr_track = document.createElement('audio');

playBtn.addEventListener("click", () => {
  audio.play();
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
});
var count=0;
let track_list = ["song1.mp3", "song2.mp3", "song3.mp3"]

function SongNext(){
count++;
if(count>3){
    count=0;}
var item = track_list[Math.floor(Math.random()*track_list.length)];
var chSong = document.getElementById("MySong").src=item;
}
shuffleBtn.addEventListener("click", SongNext);

function SongRepeat(){
    var RepSong = document.getElementById("MySong").src=track_list[count];
    }
repeatBtn.addEventListener("click", SongRepeat);

function Play_Song1(){
    var Song1 = document.getElementById("MySong").src=track_list[0];
    }
S1Btn.addEventListener("click", Play_Song1);

function Play_Song2(){
    var Song2 = document.getElementById("MySong").src=track_list[1];
    }
S2Btn.addEventListener("click", Play_Song2);

function Play_Song3(){
    var Song3 = document.getElementById("MySong").src=track_list[2];
    }
S3Btn.addEventListener("click", Play_Song3);