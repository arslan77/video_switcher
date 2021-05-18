import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let iframeLinks = [
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=1",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=2",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=3",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=4",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=5",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=6",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=7",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=8",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=9",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=10",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=11",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html?level=12",
        "title": "Python Editor"
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
