import firebase from 'firebase'

import 'firebase/firestore' 

const Config = {
    apiKey: "AIzaSyCYripFiakzXTGswTHYQdzu8a3aHNOBkXI",
    authDomain: "firstapp-dfff6.firebaseapp.com",
    databaseURL: "https://firstapp-dfff6.firebaseio.com",
    projectId: "firstapp-dfff6",
    storageBucket: "firstapp-dfff6.appspot.com",
    messagingSenderId: "578060462125",
    appId: "1:578060462125:web:147b5bf04af6d327e870a4",
    measurementId: "G-0HL7PTYSX3"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

export const convertNotesSnapshotToMap = (notes) => {
    const transformedNote =notes.docs.map(doc => {
        const { title, textarea} = doc.data();
         return {
             id: doc.id,
             title,
             textarea 	
    }
    });
    return transformedNote.reduce((accumulator, note) => {
        accumulator[note.title.toLowerCase()] = note;
        return accumulator;
        
    }, {});
    
}







export default firebase;
export const firestore = firebase.firestore()
