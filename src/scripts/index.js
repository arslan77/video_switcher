import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// var lang = urlParams.get('lang');
// var url;
//
//  if(lang === 'nl'){
//     url = "https://school.robotwala.app/static/apps/robotics-simulator/nl/index.html";
// }else{
//     url = "https://school.robotwala.app/static/apps/robotics-simulator/index.html";
// }

let iframeLinks = [
    {
        "url": "https://scratch.robotwala.app/",
        "title": "Activity"
    }
]
Activity.init(iframeLinks);

let iframe = $('#iframe')
let loadIframe = (index) => {
    iframe.attr('src', iframeLinks[index].url);
    $("#title").text((index + 1) + " - " + iframeLinks[index].title);
}

let index = 0;
loadIframe(index);
