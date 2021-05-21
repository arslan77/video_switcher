import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let iframeLinks = [
    {
        "url": "https://school.robotwala.app/static/apps/liveeditor/intorduction-to-html-canvas-5-levels.html?level=1",
        "title": "Activity"
    },
    {
        "url": "https://school.robotwala.app/static/apps/liveeditor/intorduction-to-html-canvas-5-levels.html?level=2",
        "title": "Activity"
    },
    {
        "url": "https://school.robotwala.app/static/apps/liveeditor/intorduction-to-html-canvas-5-levels.html?level=3",
        "title": "Activity"
    },
    {
        "url": "https://school.robotwala.app/static/apps/liveeditor/intorduction-to-html-canvas-5-levels.html?level=4",
        "title": "Activity"
    },
    {
        "url": "https://school.robotwala.app/static/apps/liveeditor/intorduction-to-html-canvas-5-levels.html?level=5",
        "title": "Activity"
    }
]
Activity.init(iframeLinks);

let iframe = $('#iframe')
let loadIframe = (index) =>{
    iframe.attr('src', iframeLinks[index].url);
    $("#title").text((index+1)+" - "+iframeLinks[index].title);
}

let index = 0;
loadIframe(index);
