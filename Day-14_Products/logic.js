import { fetchapi } from "./api.js";

export const apiData = async () => {
    let response = await fetchapi();
    let {products} = await response.json();    
    return products;
}