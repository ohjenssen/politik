export function maerkesagerComponent(post){
    const container = document.createElement('div');
    container.className = 'col-lg-6';

    container.innerHTML = `
        <div class="section-content d-flex justify-content-center">
            <div class="card">
                <div class="image-container">
                    <img src="https://cm.michaelrugaard.dk/wp-content/uploads/2023/06/Det_Konservative_Folkeparti.png" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Læs mer</a>
                </div>
            </div>
        </div>
    `;

    container.querySelector('.card-title').innerText = post.title.rendered;
    container.querySelector('.card-text').innerHTML = post.excerpt.rendered;
    container.querySelector('.btn').href=`/pages/maerkesag/?id=${post.id}`;
    if (post._embedded['wp:featuredmedia']?.[0]?.source_url) {
        container.querySelector('.card-img-top').src = post._embedded['wp:featuredmedia'][0]['source_url'];
    }

    return container;
}

export function specificMaerkesag(post){
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
    <div class="row">
        <div class="col-md-6 hero-content">
            <h1 class="hero-title"></h1>
            <div class="hero-text text-black"></div>
        </div>
        <div class="col-md-6 hero-img-container">
            <img class="hero-img" src="https://cm.michaelrugaard.dk/wp-content/uploads/2023/06/Det_Konservative_Folkeparti.png" alt="Konservative folkeparti">
        </div>
    </div>
    `;

    container.querySelector('.hero-title').innerText = post.title.rendered;
    container.querySelector('.hero-text').innerHTML = post.excerpt.rendered;
    if (post._embedded['wp:featuredmedia']?.[0]?.source_url) {
        container.querySelector('.hero-img').src = post._embedded['wp:featuredmedia'][0]['source_url'];
        container.querySelector('.hero-img').alt = post._embedded['wp:featuredmedia'][0]['alt_text'];
    }

    const contentContainer = document.querySelector('#maerkesag-content');
    contentContainer.innerHTML = post.content.rendered;

    return container;
}