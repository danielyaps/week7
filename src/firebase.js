import firebase from "firebase"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCP1ia78KUPxGPAUvS0pAg5XNB26I7Ayj4",
    authDomain: "bt3103-week-6-43329.firebaseapp.com",
    projectId: "bt3103-week-6-43329",
    storageBucket: "bt3103-week-6-43329.appspot.com",
    messagingSenderId: "820017910775",
    appId: "1:820017910775:web:7d6a7cf60af9a1605654f2",
    measurementId: "G-L2RR4SNDYX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;