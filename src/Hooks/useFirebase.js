import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('');


    

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                setAuthError('');


                console.log(user);

                // ei topic ta bujhini
                const newUser = { email, displayName: name };
                console.log(newUser);
                setUser(newUser);

                // save user to database

                saveUser(email, name,"POST");

                // send name firebase after creation

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                history.replace("/");

            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);
                console.log(errorMessage);
            }).finally(() => setIsLoading(false));
    }


    // sign in with email

    const LoginUser = (email, password, location, history) => {

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setAuthError('');

                const destination = location?.state?.from || "/";
                history.replace(destination);



            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage)
            }).finally(() => setIsLoading(false));
    }


    // Observer
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken);
                })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });



    }, []);


    // get admin 

    useEffect(()=>{

    fetch(`https://sleepy-springs-29140.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))


    },[user.email]);



    //logOut

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});

            }).catch((error) => {
                // An error happened.
            }).finally(() => setIsLoading(false));
    }



    // sign in with google

    const signInWithGoogle = (location, history) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setUser(user);
                saveUser(user.email, user.displayName,"PUT");
                setAuthError('');

                const destination = location?.state?.from || "/";

                history.replace(destination);

            }).catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);


            }).finally(() => setIsLoading(false));

    }


    // save user

    const saveUser = (email, displayName,method) => {

        const users = { email, displayName };

        fetch("https://sleepy-springs-29140.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }



  


    return {
        registerUser,
        logOut,
        user,
        admin,
        token,
        LoginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
};

export default useFirebase;