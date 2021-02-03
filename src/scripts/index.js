import videojs from 'video.js'
import videojscss from "video.js/dist/video-js.min.css";
import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"

import main from "../styles/main.css"
import Communication from "../../js/lib-communication";
import $ from "jquery/src/jquery"
import Activity from "../../js/lib-activity";
// Communication.init();
// Communication.setupHeader(1, 5, false);
let lectures = [
    {
        "url": "assets/videos/What is Word Online-.mp4",
        "subtitle": "assets/videos/What is Word Online-.mp4",
        "title": "What is Word Online"
    },
    {
        "url": "assets/videos/What you need for this course.mp4",
        "subtitle": "assets/videos/What you need for this course.mp4",
        "title": "What you need for this course"
    },
    {
        "url": "assets/videos/Sign in and create a new document.mp4",
        "subtitle": "assets/videos/Sign in and create a new document.mp4",
        "title": "Sign in and create a new document"
    },
    {
        "url": "assets/videos/Save a document.mp4",
        "subtitle": "assets/videos/Save a document.mp4",
        "title": "Save a document"
    }, {
        "url": "assets/videos/Get the power of Word in your browser.mp4",
        "subtitle": "assets/videos/Get the power of Word in your browser.mp4",
        "title": "Get the power of Word in your browser"
    }, {
        "url": "assets/videos/Close, open, and manage documents.mp4",
        "subtitle": "assets/videos/Close, open, and manage documents.mp4",
        "title": "Close, open, and manage documents"
    }
]
Activity.init(lectures);

let video = videojs('myvideo')
let loadVideo = (index) => {
    video.src({"type": "video/mp4", "src": lectures[index].url});
    video.play();
    $("#title").text((index + 1) + " - " + lectures[index].title);
}

let index = 0;
$("#next").on('click', () => {
    index++;
    if (index >= lectures.length) {
        index = 0;
    }
    loadVideo(index);
})

$("#prev").on('click', () => {
    index--;
    if (index < 0) {
        index = lectures.length - 1;
    }
    loadVideo(index);
})
loadVideo(index);


var changeLevel = (index) => {
    alert(index);
}
