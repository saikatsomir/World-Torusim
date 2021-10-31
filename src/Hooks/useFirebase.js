import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/FireBAse/firebase.init";

initializeAuthentication()
const auth = getAuth();
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [error, setError] = useState('')
    const[isLoading, setIsLoading] = useState(true)

        const signInUsingGoogle = () => {
            const googlePorvider = new GoogleAuthProvider();

            setIsLoading(true)
        return signInWithPopup(auth, googlePorvider)
           
            .finally(() => setIsLoading(false))
            .catch((error) => {
                setError(error.message)
            });

        }

        useEffect(()=>{
          const unSubscribed = onAuthStateChanged(auth, user=>{
                if(user){
                    setUsers(user)
                }
                else{
                    setUsers({})
                }
                setIsLoading(false)
            })

            return ()=> unSubscribed
        },[])


        const logOut = () =>{
            setIsLoading(true)
            signOut(auth)
            .then(()=>{})
            .finally(()=> setIsLoading(false))
        }




    return{
        users,
        error,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}


export default useFirebase