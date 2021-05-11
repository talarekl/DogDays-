var firebaseConfig = {
  apiKey: "AIzaSyAzjL9l25mAmgOqy1PuNhNkQAhFGEGkUEA",
  authDomain: "dog-days-51554.firebaseapp.com",
  databaseURL: "https://dog-days-51554-default-rtdb.firebaseio.com",
  projectId: "dog-days-51554",
  storageBucket: "dog-days-51554.appspot.com",
  messagingSenderId: "223722049182",
  appId: "1:223722049182:web:3b421b741498663a88758f",
  measurementId: "G-QYD9PCSK45"
};
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth;

  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  function signUp(){
      
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
  }
  
