export function omComponentHero(post){
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
        <div class="row">
            <div class="col-md-6 hero-content">
                <h1 class="hero-title"></h1>
                <div class="hero-text text-black"></div>
            </div>
            <div class="col-md-6 hero-img-container">
                <img class="hero-img" src="../../assets/images/No_image_available.svg.png" alt="No image available">
            </div>
        </div>
    `;

    container.querySelector('.hero-title').innerText = post.title.rendered;
    container.querySelector('.hero-text').innerHTML = post.content.rendered;
    container.querySelector('.hero-img').src = post._embedded['wp:featuredmedia'][0]['source_url'];

    return container;
}

export function omComponentSection(post){
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `    
        <div class="row">
            <div class="col-lg">
                <div class="section-content">
                    <h2 class="politik"></h2>
                    <div class="section-text"></div>
                </div>
            </div>
        </div>`;

    container.querySelector('.politik').innerText = post.title.rendered;
    container.querySelector('.section-text').innerHTML = post.content.rendered;

    return container;
}