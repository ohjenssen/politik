export function forside(data){
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-6 hero-content">
                    <h1 class="hero-title">Michael Rugaard</h1>
                    <div class="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div class="col-md-6 hero-img-container">
                    <img class="hero-img" src="./assets/images/portrett-MichaelRugaard.png" alt="Portrait Image">
                </div>
            </div>
        </div>
    `;

    container.querySelector('.hero-title').innerText = data.title.rendered;
    container.querySelector('.hero-text').innerHTML = data.content.rendered;
    container.querySelector('.hero-img').src = data._embedded['wp:featuredmedia'][0]['source_url'];

    return container;
}