import { About } from "../views/About.js";
import { Home } from "../views/Home.js";
import { Projects } from "../views/Projects.js";
import { Contact } from "../views/Contact.js";
import { FormValidation } from "../helppers/FormValidation.js";
import { MoveMouseHome } from "../helppers/MoveMouseHome.js";

export function Router(){
    let {hash} = location;
    

    const $general = document.querySelector('.contain-general')
    const $main = document.createElement('main');
    const $layer = document.getElementById("transt");
    $main.id= "main";
    $general.innerHTML = "";
    $layer.style.display = "flex";
    $layer.style.zIndex = 1100;
    setTimeout(()=>{
        $layer.style.display = "none";
    },2000)
    function updateColorRef(section){
        let $section = document.querySelector(`#${section}`);
        const aAll = document.querySelectorAll(".ref-a");
        aAll.forEach(elem =>{
          if(elem.classList.contains("update-color-header")) elem.classList.remove("update-color-header")
        })
        $section.classList.add("update-color-header")
   
    }


    if (!hash || hash ==="#/"){
        updateColorRef("home")
        setTimeout(()=>{
            $main.appendChild(Home());
            $general.appendChild($main);
            MoveMouseHome();

        },1000)


    }else if(hash ==="#/about"){
        updateColorRef("about")
        setTimeout(() => {
            $main.appendChild(About());
            $general.appendChild($main);            
        }, 1000);

    }else if(hash ==="#/projects"){
        updateColorRef("projects")
        setTimeout(()=>{
            $main.appendChild(Projects());
            $general.appendChild($main);
        },1000)

    }
    else if(hash ==="#/contact"){
        updateColorRef("contact")
        setTimeout(()=>{
            $main.appendChild(Contact());
            $general.appendChild($main);            
            FormValidation();
        },1000)


    }


}