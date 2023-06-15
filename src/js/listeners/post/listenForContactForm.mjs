import { postContactForm } from "../../api/index.mjs";
import { formValidation } from "../validation/formValidation.mjs";

export async function listenForContactForm(){
    const form = document.querySelector('#contact-form');
    
    if(form){
        formValidation();
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const formObject = Object.fromEntries(formData.entries());
            
            postContactForm(formObject);
        })
    }
}