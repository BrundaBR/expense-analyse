import { db } from './firestore.js';
import { collection, getDocs, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


function storeData(event){

    console.log("Storing in db!");
    event.preventDefault();
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
   
    addDoc(collection(db,"expense-tracker"),{
        category: category,
        amount: amount,
        date: date
        
    })
        .then((docRef) => {
            alert("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}
export { storeData };