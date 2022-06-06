export function Title(){
    const $title = document.createElement('div');
    $title.classList.add('container-title');
    $title.innerHTML = `

        <h1 class="title">
            <span class="my-name">Yelitza Suniaga</span> <span class="subtitle">Front-end Developer</span>
        </h1>

    `
    return $title
}