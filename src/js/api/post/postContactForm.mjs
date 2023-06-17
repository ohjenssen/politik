export async function postContactForm(data) {
    const url = 'https://cm.michaelrugaard.dk/wp-json/contact-form-7/v1/contact-forms/31/feedback';
    const container = document.querySelector('#contact-form');
    
    container.innerHTML = `
        <div class="d-flex justify-content-center loader">
            <div class="spinner-border" role="status"style="width: 6rem; height: 6rem;" >
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
  
    try {
        const formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key]);
        }
    
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if(response.ok){
            document.querySelector('.section-text').innerHTML = '';
            container.innerHTML = `
            <div>
                <p>${result.message}</p>
                <a href="/">Gå tilbage</a>
            <div>`;
        }

    } catch {
        console.log('Form not working');
    }
  }