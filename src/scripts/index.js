import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let iframeLinks = [
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
        "title": "Python Editor"
    },
    {
        "url": "https://school.robotwala.app/static/apps/ide/ide-master/python-3.8.html",
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
