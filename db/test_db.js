import { db } from './firestore.js';
import { collection, getDocs, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


async function testDb(){
    try{
    const snapshot = await getDocs(collection(db, "expense-tracker"));
    console.log("Read success ✅"+snapshot);
    }catch(e){
        console.log("error"+ e);
    }
}
testDb();