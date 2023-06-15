export function politikComponent(posts){
    const container = document.createElement('div');
    container.className = 'row';

    container.innerHTML = `
        <div class="col-lg">
            <div class="section-content">
                <h2 class="politik"></h2>
                <p class="section-text"></p>
            </div>
        </div>
    `;

    container.querySelector('.politik').innerText = posts.title.rendered;
    container.querySelector('.section-text').innerHTML = posts.content.rendered;

    return container;
}