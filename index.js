// import tools we need from firebase-admin library 
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// 

// import our credentials from secrets.js 
import { creds } from "./secrets.js";
// connect to our firebase project 
initializeApp({
    credential: cert(creds),
});
// connect to the firestore database 
const db = getFirestore();

// CRUD
//const shirt = {
//    brand: 'Polo',
//    style: 'polo',
//    color: 'blue',
//    size: 'L',
//    price: 49.99
//}

//const pants = {
//    brand: 'Jeans',
//    style: 'pants',
//    color: 'black',
//    size: 'M',
//    price: 99.99
//}

// add a shirt to our clothing collection (CREATE)
// READ data 
db.collection('clothing').get()
    .then(collection => {
    .catch(console.error);
.then(collection => {
    const clothing = collection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.table(clothing);
})
.catch(console.error);}