export function InfoCard(subtitle, description, link){
    const $infoCard = document.createElement("article");
    $infoCard.classList.add("info-card");
    $infoCard.innerHTML = `
        <input type="button" class="close-inf-card">
        <h2>${subtitle}</h2>
        <p>${description}</p>
        <a href=${link} target="_blank">Demo</a>
    `
    return $infoCard;
}