export function Header(){
    const $header = document.createElement('header')
    $header.classList.add("header");
    $header.innerHTML = `
                <div class="button-toggle">
                    <button></button>
                </div>
                <nav>
                    <ul>
                        <li class="ref-header"><a href="#/" id="home">HOME</a></li>
                        <li class="ref-header"><a href="#/about" id="about">ABOUT</a></li>
                        <li class="ref-header"><a href="#/projects" id="projects">PROJECTS</a</li>
                        <li class="ref-header"><a href="#/contact" id="contact">CONTACT</a></li>
                    </ul>
                </nav>
    `
    return $header
}