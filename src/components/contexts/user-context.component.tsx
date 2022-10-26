import { createContext, useState, useEffect, type Dispatch} from 'react';
import { auth,
    // onAuthStateChangedListener,
    createUserDocumentFromAuth, onAuthStateChangeListener,
} from '../../utils/firebase/firebase.utils';
import firebase from "firebase/compat";
import {onAuthStateChanged} from "firebase/auth";
import {User} from '@firebase/auth-types';

type UserType = User | null

interface UserContextType {
    currentUser: UserType
    setCurrentUser: Dispatch<any>
}

export const UserContext = createContext<UserContextType>({
    setCurrentUser: (() => undefined) as Dispatch<any>,
    currentUser: null,
});

interface UserProviderProps {
    children: any
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);

        });

        return () => {
            console.log('unmounted');
            unsubscribe();
        }
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
};