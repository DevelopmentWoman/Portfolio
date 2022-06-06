export function AboutDescription(){
    const $aboutDescription = document.createElement("div");
    const $contParag = document.createElement("div");
    $aboutDescription.classList.add("about-description");
    $aboutDescription.innerHTML = `
        <article>
            <p>
            I'm a systems engineer, and I'm currently venturing into the area of ​​front-end web development. I am a person super committed to my work.
            Together we can carry out great projects.
             </p>
            <button id="download">CV <a id="ref-download" href="./src/assets/Curriculum.pdf" target="_blank" download="Curriculum"></a></button>
        </article>
    `

    return $aboutDescription;
}