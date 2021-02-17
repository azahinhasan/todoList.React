
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA6Ok2eqATjs2yPi_MK6ET93Cpp1AoECoA",
    authDomain: "todolist-f5d0f.firebaseapp.com",
    databaseURL: "https://todolist-f5d0f-default-rtdb.firebaseio.com",
    projectId: "todolist-f5d0f",
    storageBucket: "todolist-f5d0f.appspot.com",
    messagingSenderId: "96480343942",
    appId: "1:96480343942:web:a585f34ef10a0455c89e07",
    measurementId: "G-1QQ94EK0EL"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };