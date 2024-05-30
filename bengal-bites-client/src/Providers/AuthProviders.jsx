import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProviders = () => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;