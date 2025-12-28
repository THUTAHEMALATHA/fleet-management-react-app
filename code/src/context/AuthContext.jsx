import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext();

function AuthProvider({children}){
    
    const [isAuth ,setIsAuth] = useState(false);
    const login = () => setIsAuth(true);
    const logout = () => setIsAuth(false);

    return(
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}

        </AuthContext.Provider>
    );
 

    function useAuth(){
        return useContext(AuthContext);
    }
}
    export {AuthProvider, useAuth};
