import { ObjectHome } from "./ObjectHome";
import { Title } from "./Title";

export function HomeMain(){
    const $homeMain = document.createElement('section');
    $homeMain.classList.add('container-home');
    $homeMain.id = 'home';
    $home.innerHTML = `
        <div class="pag-main">
            ${Title()}
            ${ObjectHome()}
        </div>                 
    `
    return $homeMain;
}