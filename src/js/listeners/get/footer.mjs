import * as api from '../../api/index.mjs';
import * as urls from '../../api/constants/index.mjs';


export async function listenForFooter(){
    const url = urls.url_base + urls.categories.footer;
    const posts = await api.getData(url);
    const container = document.querySelector('#footer-info');

    for(let i = 0; i < posts.length; i++){
        container.innerHTML += posts[i].content.rendered;
    }
}