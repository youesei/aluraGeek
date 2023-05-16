import { products } from "../data/products";


export const getAllItemList = () => {
    return Object.entries( products ) 
        .filter( ([ product ,_ ]) => product )
        .map( ([ _, product ]) => product)
        .flat();
}