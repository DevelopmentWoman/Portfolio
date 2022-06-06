export function ProjectsCard (card){
    const $card = document.createElement("article");

    $card.id = card.id;
    $card.classList.add("art-card")
    $card.innerHTML = `
        <img class="img-article" src="${card.src}" alt="">
    `
    return $card;
} 