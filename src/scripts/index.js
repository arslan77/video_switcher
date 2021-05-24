import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"


var url = new URL(window.location.href);
let level = url.searchParams.get("level");
let user = url.searchParams.get("user");
let activity = url.searchParams.get("activity");
let file = url.searchParams.get("file");

level === null ? level = 1 : level;
user === null ? user = "temp" : user;
activity === null ? activity = "HTML" : activity;
file === null ? file = "index" : file;

let iframeLinks = [];

for (var i = 1; i <= level; i++) {
    iframeLinks.push(
        {
            "url": "https://school.robotwala.app/static/apps/liveeditor/" + file + ".html?level=" + i + "&user=" + user + "&activity=" + activity,
            "title": "CAD"
        }
    )
}

Activity.init(iframeLinks);

let iframe = $('#iframe')
let loadIframe = (index) => {
    iframe.attr('src', iframeLinks[index].url);
    $("#title").text((index + 1) + " - " + iframeLinks[index].title);
}

let index = 0;
loadIframe(index);
