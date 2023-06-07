import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider =  new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) =>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
    }

    
    const logOut = () => {
        setIsLoading(true);
       return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            setUser(currentUser);
            // console.log('current user', currentUser);
            setIsLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;