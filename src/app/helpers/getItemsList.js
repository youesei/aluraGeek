import { products } from "../data/products"


export const getItemsList = (typeProduct) => {

    const validEntries = ['figures', 'consoles', 'others'];

    if ( !validEntries.includes(typeProduct) ) {
        throw new Error (`${ typeProduct } is not a valid entrie`);
    }
     
    return Object.entries( products ) 
        .filter( ([ product ,_ ]) => product === typeProduct )
        .map( ([ _, product ]) => product)
        .flat();
}
