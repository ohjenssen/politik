import * as api from '../../api/index.mjs';
import * as constants from '../../api/constants/index.mjs';
import { maerkesagerComponent, specificMaerkesag } from '../../components/maerkesager.mjs';

export async function listenForSpecificMaerkesag(){
    const url = constants.url_base + constants.categories.maerkesager;
    const posts = await api.getData(url);

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const queryID = params.get("id");
    const specificPostIndex = posts.findIndex(post => post.id === parseInt(queryID));

    const specificPost = posts[specificPostIndex];
    const otherPosts = posts.filter((post, index) => index !== specificPostIndex);

    document.querySelector('.hero').appendChild(specificMaerkesag(specificPost));

    for(let i = 0; i < otherPosts.length; i++){
        document.querySelector('#maerkesager').appendChild(maerkesagerComponent(otherPosts[i]));
    }
}