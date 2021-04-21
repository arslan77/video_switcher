import bootstrapcss from "bootstrap/dist/css/bootstrap.min.css"
import Activity from "../../js/lib-activity";

import main from "../styles/main.css"

import $ from "jquery/src/jquery"
let iframeLinks = [
    {
        "url": "https://school.robotwala.app/testwp2/login-test.php?username=arslan&rand=06a77a9605548fa36fd6803ba3402c9a&redirect=https%3A%2F%2Fschool.robotwala.app%2Ftestwp2%2Fwp-admin%2Fpost.php%3Fpost%3D147%26action%3Delementor",
        "title": "Introduction to Elementor"
    },
    {
        "url": "https://school.robotwala.app/testwp2/login-test.php?username=arslan&rand=06a77a9605548fa36fd6803ba3402c9a&redirect=https%3A%2F%2Fschool.robotwala.app%2Ftestwp2%2Fwp-admin%2Fpost.php%3Fpost%3D320%26action%3Delementor",
        "title": "Edit the About Us page."
    },
    {
        "url": "https://school.robotwala.app/testwp2/login-test.php?username=arslan&rand=06a77a9605548fa36fd6803ba3402c9a&redirect=https%3A%2F%2Fschool.robotwala.app%2Ftestwp2%2Fwp-admin%2Fpost.php%3Fpost%3D320%26action%3Delementor",
        "title": "Text Editor widget"
    },
    {
        "url": "https://school.robotwala.app/testwp2/login-test.php?username=arslan&rand=06a77a9605548fa36fd6803ba3402c9a&redirect=https%3A%2F%2Fschool.robotwala.app%2Ftestwp2%2Fwp-admin%2Fpost.php%3Fpost%3D320%26action%3Delementor",
        "title": "Forms Layout"
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
