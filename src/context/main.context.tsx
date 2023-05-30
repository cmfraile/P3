import { createContext } from "react";

export const mainContext = createContext<any>({});
export const mainProvider = ({children}:any) => {
    return(
        <mainContext.Provider value={{

        }}>{children}</mainContext.Provider>
    )
}