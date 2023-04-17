import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authIno = {
        user, 
        createUser,
        singIn
    }
    return (
        <AuthContext.Provider value={authIno}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;