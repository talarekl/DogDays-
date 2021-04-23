(function() {
//Initialize Firebase
    const config = {
    apiKey: "AIzaSyAzjL9l25mAmgOqy1PuNhNkQAhFGEGkUEA",
    authDomain: "dog-days-51554.firebaseapp.com",
    databaseURL: "https://dog-days-51554-default-rtdb.firebaseio.com",
    projectId: "dog-days-51554",
    storageBucket: "dog-days-51554.appspot.com",
  };
firebase.initializeApp(config);
var firestore = firebase.firestore();

const documentRef = firestore.doc();
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const DoB = document.querySelector("#birthday");
const emailAddress = document.querySelector("#emailAddress");
const password = document.querySelector("#psw");
const saveButton = document.querySelector("#Welcome to Dog Days");

loginButton.addEventListener("click", function(){
  const saveInfo = inputTextField.value; 
  console.log(saveInfo);
  documentRef.set({
    userStatus: saveInfo
  }).then(function(){
    console.log("Welcome to Dog Days!");
  }).catch(function (error){
    console.log("Error:", error );
  });
})

})();
