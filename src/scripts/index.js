import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"

var url = new URL(window.location.href);
let level = url.searchParams.get("level");
let maxLevel = url.searchParams.get("maxLevel");
let user = url.searchParams.get("user");
let activity = url.searchParams.get("activityId");

level === null ? level = 1 : level;
maxLevel === null ? maxLevel = 1 : maxLevel;
user === null ? user = "temp" : user;
activity === null ? activity = "ES" : activity;

let iframeLinks = [];

for (var i = 1; i <= maxLevel; i++) {
    iframeLinks.push(
        {
            "url": "https://testgame2.robotwala.app?level=" + i + "&user=" + user + "&activityId=" + activity,
            "title": "ES"
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
