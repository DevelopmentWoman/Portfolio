import { AboutDescription } from "../components/AboutDescription.js";
import { AboutPhoto } from "../components/AboutPhoto.js";

export function About(){
    const $aboutMain = document.createElement('section');
    $aboutMain.classList.add('container-about','update-bg');
    $aboutMain.id = 'about';
    const $img  = document.createElement("img");
    $img.classList.add("bg-about");
    $img.src = "./src/assets/bg-about3.svg"
    const $containerPhoto = document.createElement('div');
    $containerPhoto.classList.add('container-photo');
    $containerPhoto.innerHTML = `
    <div class="greetings">
        <h2 class="name">
            HELLO
        </h2>
    </div>
    `


    $containerPhoto.appendChild(AboutDescription());
    $containerPhoto.appendChild(AboutPhoto());
    $aboutMain.appendChild($img);
    $aboutMain.appendChild($containerPhoto); 
 
    return $aboutMain;
}