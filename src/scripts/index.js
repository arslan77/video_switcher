import videojs from 'video.js'
import videojscss from "video.js/dist/video-js.min.css";
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let lectures = [
    {
        "url": "assets/videos/Working with computers to create opportunity.mp4",
        "title": "Working with computers to create opportunity"
    },
    {
        "url": "assets/videos/What%20is%20a%20computer-.mp4",
        "title": "What is a computer"
    },
    {
        "url": "assets/videos/What parts make up a computer-.mp4",
        "title": "What parts make up a computer"
    },
    {
        "url": "assets/videos/Understand types of computers.mp4",
        "title": "Understand types of computers"
    },{
        "url": "assets/videos/Add%20external%20storage%20to%20a%20computer.mp4",
        "title": "Add External Storage"
    },{
        "url": "assets/videos/Connect to Bluetooth devices.mp4",
        "title": "Connect to Bluetooth devices"
    }
]
Activity.init(lectures);

let video = videojs('myvideo')
let loadVideo = (index) =>{
    video.src({"type":"video/mp4", "src":lectures[index].url});
    video.play();
    $("#title").text((index+1)+" - "+lectures[index].title);
}

let index = 0;
$("#next").on('click', ()=>{
    index++;
    if(index >=  lectures.length){
        index = 0;
    }
    loadVideo(index);
})

$("#prev").on('click', ()=>{
    index--;
    if(index < 0 ){
        index = lectures.length - 1;
    }
    loadVideo(index);
})
loadVideo(index);
