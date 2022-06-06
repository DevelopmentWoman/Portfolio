import { ProjectsCard } from "./ProjectsCard.js";

export function ProjectsContainerCards(){
    let cards = dataJson;
    let i;
 
    const fragment = new DocumentFragment;   
    const $containerCards = document.createElement('div');  
    $containerCards.classList.add('container-cards');

    for (i=0; i< Object.values(cards).length; i++){
        fragment.appendChild(ProjectsCard(Object.values(cards)[i][0]))
    }
    $containerCards.appendChild(fragment)
    
    return $containerCards;
}