import { createContext } from "react";
import all_products  from '../Assets/all_product.js'

export const MainCollections=createContext(null);
console.log(MainCollections);

const MainCollectionProvider=(props)=>{

    const ContextValue={all_products}
    return(
        
       <MainCollections.Provider value={ContextValue}>{props.children}</MainCollections.Provider>

    )


}

export default MainCollectionProvider;