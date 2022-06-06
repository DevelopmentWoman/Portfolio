import { ContactForm } from "../components/ContactForm.js";


export function Contact() {
    const $contact = document.createElement("section");
    const $containerForm = document.createElement("Div");
    $containerForm.classList.add("container-form")
    const $img = document.createElement("img");
    $contact.innerHTML = 
    `
    <div class='gith'>
        <a href='https://github.com/DevelopmentWoman' class='ref-gith' target="_blank">            
        </a>
    </div>
    <div class='linkd'>
        <a href='https://www.linkedin.com/in/yelitza-suniaga-464502215/' class='ref-linkd' target="_blank">            
        </a>
    </div>
    
    `

    $img.classList.add("bg-contact");
    $img.src = "./src/assets/bg-about3.svg"
    $contact.classList.add("container-contact");
    $contact.appendChild($img);
    $containerForm.innerHTML= "<h2 class=title-form>Contact Me</h2>";
    $containerForm.appendChild(ContactForm());
    $contact.appendChild($containerForm);
    
    return $contact;
}