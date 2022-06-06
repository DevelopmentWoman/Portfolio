import { ProjectsContainerCards } from "./ProjectsContainerCard.js";

export function ProjectsGridCards(){
    const $containerCards = document.createElement('div');  
    $containerCards.classList.add("cont-gen-cards");
    $containerCards.appendChild(ProjectsContainerCards())
    return $containerCards;
}