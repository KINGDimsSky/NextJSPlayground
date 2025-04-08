import { getFirestore,  getDoc, getDocs, collection, doc, addDoc, where, query } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcryptjs";

interface Users {
    fullname : string,
    email : string,
    password : string,
    role: string | "user",
    confirmpassword ?: string
}

const firestore = getFirestore(app);

export async function RetrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    return data;
}

export async function RetrieveDataByID (collectionName: string, id: string){
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}



export async function Register (data : Users){
    const q = query(collection(firestore, 'users'), where("email", "==" , data.email));
    const snapshot = await getDocs(q);
    if (snapshot.empty){
        await addDoc(collection(firestore, 'users'), {
            name: data.fullname,
            email: data.email,
            password: await bcrypt.hash(data.password, 10),
            role : data.role ?? "admin" 
        })
        return {status: 200, message: "Success Adding Data!"}
    }

    return {status: 400, message: "Email Already Exist"}
}   