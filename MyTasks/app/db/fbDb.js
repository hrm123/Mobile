import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCJ5EDKB48_E3HzQd8t8qlgyqLpMrEpHTk",
    authDomain: "mytasks-2df8e.firebaseapp.com",
    databaseURL: "https://mytasks-2df8e.firebaseio.com",
    projectId: "mytasks-2df8e",
    storageBucket: "mytasks-2df8e.appspot.com",
    messagingSenderId: "294474878483"
};
const FirebaseApp1 = firebase.initializeApp(firebaseConfig);

module.exports.FbDatabase = FirebaseApp1.database();
