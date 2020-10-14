// Your web app's Firebase configuration
import * as firebase from "firebase";

var firebaseConfig = {
    // Add your Firebase configuration  https://firebase.google.com/docs/web/setup
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //Get a reference to the database service
  var database = firebase.database();

  export default database;




