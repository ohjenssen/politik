import { removeLoader } from "../../listeners/removeLoader.mjs";

export async function getData(url){
    try{
        const response = await fetch(url);
        removeLoader();
        if(response.ok){
            const json = await response.json();
            return json;
        }


    } catch (error){
        return error;
    }
}