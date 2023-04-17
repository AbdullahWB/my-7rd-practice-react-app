import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    const logOut = () => {
        return signOut(auth)
    }

    //observe changes
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
       })
        // stop observing while unmounting
        return () => {
            return unsubscribe()
        }
    }, [])

    const authIno = {
        user, 
        createUser,
        singIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authIno}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;