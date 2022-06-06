import {App} from "./App.js";
import { InfoCard } from "./components/InfCard.js";

document.addEventListener("load", function(){

    document.querySelector(".loader").style.display = "none";

});
document.addEventListener("DOMContentLoaded",e=>{
    App();
});
window.addEventListener('hashchange',App);

document.addEventListener("click", e=>{
    if (e.target.closest(".art-card")){
        let cardId = "";
        cardId = e.target.closest(".art-card").id;
        showInfoCard(cardId)
    }
    if(e.target.closest(".close-inf-card")){
        clearInfoArticle();
    }
    if(e.target.closest("nav")){
        if(screen.width < 768){
            document.querySelector("nav").classList.add("close-nav")
        }
    }
})

document.querySelector(".button-toggle").addEventListener("click",e=> {
    if (!e.target.classList.contains('close')){
        document.querySelector("nav").classList.add("open");
        document.querySelector("nav").classList.remove("close-nav")
       }else{
         document.querySelector("nav").classList.remove("open");
       }
})
 

document.addEventListener("mouseover", e=>{

})




function clearInfoArticle(){
    document.querySelector('.cont-img').style.background = "none";
    if(document.querySelector('.info-card')){
        document.querySelector('.container-projects').removeChild(document.querySelector('.info-card'))
    }
}

function showInfoCard(cardId){
   const $card = InfoCard(dataJson[cardId][0].subtitle, dataJson[cardId][0].description, dataJson[cardId][0].link);
   clearInfoArticle();
   document.querySelector('.cont-img').style.background = ` url(${dataJson[cardId][0].src}) no-repeat center`;
   document.querySelector('.cont-img').style.backgroundSize = "cover";
   document.querySelector('.container-projects').appendChild($card);


}
