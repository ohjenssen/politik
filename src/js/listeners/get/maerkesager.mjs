import * as api from '../../api/index.mjs';
import * as urls from '../../api/constants/index.mjs';
import { maerkesagerComponent } from '../../components/index.mjs';


export async function listenForMaerkesager(){
    const url = urls.url_base + urls.categories.maerkesager;
    const posts = await api.getData(url);
    const container = document.querySelector('#maerkesager');

    for(let i = 0; i < posts.length; i++){
        container.appendChild(maerkesagerComponent(posts[i]));
    }
}