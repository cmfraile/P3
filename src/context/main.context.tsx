import { createContext } from "react";
import sliderHook from "../hooks/slider.hook";

export const mainContext = createContext<any>({});
export const mainProvider = ({children}:any) => {
    return(
        <mainContext.Provider value={{
            sliderHook:sliderHook()
        }}>{children}</mainContext.Provider>
    )
}