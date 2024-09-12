import { createContext } from "react";
import all_products  from '../Assets/all_product'

export const StoreCollection=createContext();

const StoreCollectionProvider=(props)=>{

    const ContextValue={all_products}
    return(
        <StoreCollection.Provider value={ContextValue}>{props.children} </StoreCollection.Provider>

    )


}

export default StoreCollectionProvider;