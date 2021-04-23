(function() {
//Initialize Firebase
    const config = {
    apiKey: "AIzaSyAzjL9l25mAmgOqy1PuNhNkQAhFGEGkUEA",
    authDomain: "dog-days-51554.firebaseapp.com",
    databaseURL: "https://dog-days-51554-default-rtdb.firebaseio.com",
    projectId: "dog-days-51554",
    storageBucket: "dog-days-51554.appspot.com",
  };

//Get Elements 
  firebase.initializeApp(config);

//References 
  const preObject = document.getElementById('object');

//Data Synchronization 
  dBRefObject.on('value', snap => {
      preObject.innerText = JSON. stringify(snap.val(), null, 3);
  });

}());