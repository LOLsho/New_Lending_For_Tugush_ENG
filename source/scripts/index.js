// import '../styles/main.scss'
import { MyMap } from './google-map';
window['myMap'] = null;

window['initMap'] = function(){
  window['myMap'] = new MyMap();
};

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

}



