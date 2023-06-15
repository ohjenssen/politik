import * as api from '../../api/index.mjs';
import * as urls from '../../api/constants/index.mjs';
import { forside } from '../../components/forside.mjs';

export async function listenForForside(){
    const url = urls.url_base + urls.categories.forside;
    const posts = await api.getData(url);
    const container = document.querySelector('#home');

    container.appendChild(forside(posts[0]));
}