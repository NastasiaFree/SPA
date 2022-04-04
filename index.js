//import App from './components.app.js'
// let doc = document;
// let head = doc.head;

// doc.querySelector("html").setAttribute("lang", "en");

// let metaCode = doc.createElement("meta");
// metaCode.setAttribute("charset", "UTF-8");

// let metaView = doc.createElement("meta");
// metaView.setAttribute("name", "viewport");
// metaView.setAttribute("content", "width-device-width,initial scale-1.0")

// let title = doc.createElement("title");
// title.innerHTML = "SPA";

// let link = doc.createElement("link");
// link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
// link.setAttribute("rel", "stylesheet");


// let headArray = [metaCode,metaView,title,link];
// for (let i=0; i<headArray.length; i++) {
//     head.appendChild(headArray[i])
// };
import App from "./components/app.js";


new App().init()