// Your web app's Firebase configuration
       // For Firebase JS SDK v7.20.0 and later, measurementId is optional
       var firebaseConfig = {
        apiKey: "AIzaSyAT1a_otRiLhU06LV43GM4IzqVrHm_eREY",
        authDomain: "cs-312-final-dog-days.firebaseapp.com",
        projectId: "cs-312-final-dog-days",
        storageBucket: "cs-312-final-dog-days.appspot.com",
        messagingSenderId: "253993037694",
        appId: "1:253993037694:web:98b007df2f922acd598d2f",
        measurementId: "G-FQW3CBLDEG"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      function signUp(){
        var email = document.getElementById("email");
        var psw = document.getElementsById("password");

        const create = auth.createUserWithEmailAndPassword(email.value, psw.value);
        create.catch(e => alert(e.message));
         alert("Signed In");

      };