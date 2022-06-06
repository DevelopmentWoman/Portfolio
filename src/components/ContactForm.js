
export function ContactForm(){
    const $ContactForm = document.createElement("form"); 
    $ContactForm.action = "https://formspree.io/f/xlezzgda";
    $ContactForm.method = "POST"
    $ContactForm.autocomplete = "off"
    $ContactForm.classList.add("contact-form");
    // $ContactForm.onclick = "FormValidation(event)"
    $ContactForm.innerHTML = `
    <input type="text" class="name-contact comun" name="name" placeholder="Enter your name"
    title="* Only letters and blanks" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
    required>
    <input type="email" class="email-contact comun" name="email" placeholder="Enter your email" 
    title="* Wrong email" 
    pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
    required>
    <textarea name="message" class= "area-contact comun" cols="50" row="5" placeholder="Enter your comments"
    title="* The comment doesn't exceed 255 characters" 
    data-pattern="^.{1,255}$"
    required></textarea>
    <input type="submit" class="subm-contact" value="Send">
    ` 

    // $ContactForm.addEventListener("submit", e=>{
    //     console.log(123);
    //     if (e.target.closest('.contact-form')){
    
    //         ;
    //     }
    
    // });

    return $ContactForm;
}

{/* <legend class="legend-contact">Contact Me</legend>
<div class="contact-form-response none">
<p>the data has been sent</p>
</div> */}