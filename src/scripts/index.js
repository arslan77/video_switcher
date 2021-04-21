import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let iframeLinks = [
    {
        "url": "https://scratch.robotwala.app/?id=28",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=29",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=30",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=31",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=32",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=33",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=34",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=35",
        "title": "Scratch"
    },
    {
        "url": "https://scratch.robotwala.app/?id=36",
        "title": "Scratch"
    },
]
Activity.init(iframeLinks);

let iframe = $('#iframe')
let loadIframe = (index) =>{
    iframe.attr('src', iframeLinks[index].url);
    $("#title").text((index+1)+" - "+iframeLinks[index].title);
}

let index = 0;
loadIframe(index);
