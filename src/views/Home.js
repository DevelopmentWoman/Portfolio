import { Title } from "../components/Title.js";

export function Home(){
    const $homeMain = document.createElement('section');
    $homeMain.classList.add('container-home');
    $homeMain.id = 'home';
    $homeMain.innerHTML = `
     <div class="container-img-home">
    </div>
     `
    const $pagMain = document.createElement('div');
    $pagMain.classList.add('pag-main');
    $pagMain.appendChild(Title());
    $homeMain.appendChild($pagMain);      
           
    return $homeMain;

}