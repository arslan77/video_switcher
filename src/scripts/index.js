import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"

var url = new URL(window.location.href);
let level = url.searchParams.get("level");
let maxLevel = url.searchParams.get("maxLevel");
let user = url.searchParams.get("user");
let activity = url.searchParams.get("activity");
let file = url.searchParams.get("file");

level === null ? level = 1 : level;
maxLevel === null ? maxLevel = 1 : maxLevel;
user === null ? user = "temp" : user;
activity === null ? activity = "CAD" : activity;
file === null ? file = "python-3.8" : file;

let iframeLinks = [];

for (var i = 1; i <= maxLevel; i++) {
    iframeLinks.push(
        {
            "url": "https://school.robotwala.app/static/apps/ide/ide-master/" + file + ".html?level=" + i + "&user=" + user + "&activity=" + activity,
            "title": "Python"
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
