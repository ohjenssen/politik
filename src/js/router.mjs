import * as listeners from './listeners/index.mjs';

export function setRouter(path){
    switch(path){

        case '/index.html':
            listeners.listenForPolitikPosts();
            listeners.listenForMaerkesager();
            listeners.listenForFooter();
            listeners.listenForForside();
            break;

        case '/':
            listeners.listenForPolitikPosts();
            listeners.listenForMaerkesager();
            listeners.listenForFooter();
            listeners.listenForForside();
            break;

        case '/pages/om/':
            listeners.listenForOm();
            listeners.listenForFooter();
            break;

        case '/pages/kontakt/':
            listeners.listenForFooter();
            listeners.listenForContactForm();
            break;

        case '/pages/maerkesag/': 
            listeners.listenForSpecificMaerkesag();
            listeners.listenForFooter();
    }
}