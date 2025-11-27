import { createContext, useState } from "react";
import { food_list } from "../assets/assets/frontend_assets/assets";    

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {

    const [food_list, setFoodList] = useState([]);

    const value = {
        food_list,
        setFoodList,
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};
