import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState()
    const [loading, setLoading]= useState(true);

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const longIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unscrived = onAuthStateChanged(auth, createUser=>{
            setUser(createUser);
            console.log('create user', createUser);
            setLoading(false)
        })
        return ()=>{
            return unscrived();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        longIn,
        signOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;