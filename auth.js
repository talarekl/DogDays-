let image = document.getElementById('signup-image')



//see if account are signed in 
auth.onAuthStateChanged(user => {
  console.log(user);
  if(user){
  
    console.log(alert('User now logged in: Continue to Home'), user)
  } else {
    console.log(alert('Account signed out'));
  }
});

function chooseFile(e) {
  file = e.target.files[0];  
  console.log(file);
}

// signup
const signupForm = document.querySelector('#Signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  //user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;


  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //upload pic to firebase sotrage
    firebase.storage().ref("users"+ auth.user.uid + "profileimage").put(file).then (() =>{
      console.log('sucessfully uploaded');
    }).catch(error =>{
      console.log(error.message);
    })
    return database.collection('Users').doc(cred.user.uid).set({
      fname: signupForm['signup-fname'].value,
      lname: signupForm['signup-lname'].value,
      DoB: signupForm['signup-DOB'].value
    });
  }).then(() =>{
 // close the signup modal and reset form
 const modal = document.querySelector('#signupModal');
 M.Modal.getInstance(modal).close();
 signupForm.reset();
  });
});

//logout 
const logout = document.querySelector('#signoutbtn');
logout.addEventListener('click', (e)=>{
  e.preventDefault();
  auth.signOut();
});

//login
const loginForm = document.querySelector('#Login-form');
loginForm.addEventListener('submit',(e) => {
  e.preventDefault();

//user info
const email =loginForm['login-email'].value;
const password =loginForm['login-password'].value;

auth.signInWithEmailAndPassword(email, password).then(cred => {

//close login modal and reset form 
const modal = document.querySelector('#loginModal');
M.Modal.getInstance(modal).close();
loginForm.reset();
});
});
