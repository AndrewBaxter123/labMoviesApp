import React, {useContext,useState,useEffect} from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => { //needs to be in useEffect so only 
        setCurrentUser(user)
    })

    return unsubscribe
}, [])

    const value = { // to be used anywhere in the app
        currentUser,
        signup
    }
  return (
    <div>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
