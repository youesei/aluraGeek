import { products } from "../data/products"


export const getProduct = (id) => {

    const listProducts = Object.entries( products ) 
        .filter( ([ product ,_ ]) => product )
        .map( ([ _, product ]) => product)
        .flat();

    return listProducts.find( product => product.id == id );
}
