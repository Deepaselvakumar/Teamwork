import React, {createContext} from "react";
import Allproduct from "../Components/Assets/Allproduct";


export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const contextValue = {Allproduct};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
