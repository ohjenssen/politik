import * as api from '../../api/index.mjs';
import * as urls from '../../api/constants//index.mjs';
import { politikComponent } from '../../components//index.mjs';

export async function listenForPolitikPosts(){
    const url = urls.url_base + urls.categories.politik;
    const posts = await api.getData(url);
    const politikContainer = document.querySelector('#politik');

    for(let i = 0; i < posts.length; i++){
        politikContainer.appendChild(politikComponent(posts[i]))
    }
}