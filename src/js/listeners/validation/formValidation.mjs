export function formValidation(){
    const nameInput = document.querySelector('#name');
    const nameCheckIcon = document.querySelector('#name-check');
    const emailInput = document.querySelector('#email')
    const emailCheckIcon = document.querySelector('#email-check');
    const subjectInput = document.querySelector('#subject');
    const subjectCheckIcon = document.querySelector('#subject-check');
    const messageInput = document.querySelector('#message');
    const messageCheckIcon = document.querySelector('#message-check');

    const checkLength = (value, reqLength) => {
        if (value.replace(/\s/g, '').length > reqLength){ // The regex trims away all the spaces between characters
            return true;
        } else {
            return false;
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    nameInput.addEventListener('keyup', () => {
        if (!checkLength(nameInput.value, 2)){
            nameCheckIcon.style.display = 'none';
        } else {
            nameCheckIcon.style.display = 'inline';
        }
    })

    emailInput.addEventListener('keyup', () => {
        if(!validateEmail(emailInput.value)){
            emailCheckIcon.style.display = 'none';
        } else {
            emailCheckIcon.style.display = 'inline';
        }
    })

    subjectInput.addEventListener('keyup', () => {
        if(!checkLength(subjectInput.value, 1)){
            subjectCheckIcon.style.display = 'none';
        } else {
            subjectCheckIcon.style.display = 'inline';
        }
    })

    messageInput.addEventListener('keyup', () => {
        if(!checkLength(messageInput.value, 5)){
            messageCheckIcon.style.display = 'none';
        } else {
            messageCheckIcon.style.display = 'inline';
        }
    })
    
}