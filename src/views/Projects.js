import { ProjectsGridCards } from "../components/ProjectsGridCards.js";
import { SvgProject } from "../components/SvgProject.js";

export function Projects(){
    const $projectsMain = document.createElement('section');
    const $contImg = document.createElement('div');
    $projectsMain.classList.add('container-projects','update-bg');
    $projectsMain.innerHTML = `${SvgProject()}`
    $contImg.classList.add("cont-img")
    $projectsMain.id = 'projects';
    $projectsMain.appendChild($contImg);
    $projectsMain.appendChild(ProjectsGridCards());
    return $projectsMain;
}