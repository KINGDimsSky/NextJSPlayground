import { getFirestore,  getDoc, getDocs, collection, doc } from "firebase/firestore";
import app from "./init";

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