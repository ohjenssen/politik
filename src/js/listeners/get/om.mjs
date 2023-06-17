import * as api from '../../api/index.mjs';
import * as urls from '../../api/constants/index.mjs';
import { omComponentHero, omComponentSection } from '../../components/index.mjs';


export async function listenForOm(){
    const url = urls.url_base + urls.categories.om;
    const posts = await api.getData(url);
    const heroContainer = document.querySelector('.hero');
    const omContainer = document.querySelector('#om');

    if(heroContainer){
        for (let i = 0; i < posts.length; i++){
            if (posts[i].tags[0] === 8){
                heroContainer.appendChild(omComponentHero(posts[i]));
            } else {
                console.log('Nothing found')
            }
        }
    }

    if(omContainer){
        for (let i = 0; i < posts.length; i++){
            if (posts[i].tags[0] !== 8){
                omContainer.appendChild(omComponentSection(posts[i]));
            } else {
                console.log('Nothing found')
            }
        }
    }

}