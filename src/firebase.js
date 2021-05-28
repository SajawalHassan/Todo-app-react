import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBczQQS25wD9gwGZXItq1ATKw_Pamdy8DU",
    authDomain: "todo-app-17443.firebaseapp.com",
    projectId: "todo-app-17443",
    storageBucket: "todo-app-17443.appspot.com",
    messagingSenderId: "986710292168",
    appId: "1:986710292168:web:6ddc032b66dfd4b0b197fd"
})

const db = firebaseApp.firestore();

export default db;