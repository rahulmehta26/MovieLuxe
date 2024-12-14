import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from "../firebase/firebase"; 
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

export const signUp = async(name, email, password) => {

    try {

    const res =  await createUserWithEmailAndPassword(auth, email, password);

    const userInfo = res.user;

    await addDoc(collection(db, "users"),{
        uid: userInfo.uid,
        name,
        authProvider: 'local',
        email,
        createdAt: new Date()
    })

    toast.success("Successfully Signed Up");

    return userInfo;
        
    } catch (error) {
        console.log(error)
        toast.error(error.code);
    }
}

export const signIn = async(email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password)

        toast.success("Successfully Logged In");

    } catch (error) {
               console.log(error)
               toast.error(error.code, " Invalid credentials ");
    }
};

export const logOut = () => {
    signOut(auth)
};