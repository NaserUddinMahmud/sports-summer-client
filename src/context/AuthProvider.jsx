import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

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

    const updateUserProfile = ( name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
        }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            setUser(currentUser);
            // console.log('current user', currentUser);

            // JWT token set
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email: currentUser.email})
                .then(data =>{
                    // console.log(data.data);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

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
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;