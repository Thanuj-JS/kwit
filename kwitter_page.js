//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9kZaUHeSXzK13HCIkkQOPzUvvZQUu5nY",
    authDomain: "letschat-5015e.firebaseapp.com",
    databaseURL: "https://letschat-5015e-default-rtdb.firebaseio.com",
    projectId: "letschat-5015e",
    storageBucket: "letschat-5015e.appspot.com",
    messagingSenderId: "221382056239",
    appId: "1:221382056239:web:1af2b82362e1d012b9a9da"
  };
  
  function send(){
    msg = document.getElementById("msg").value;
    firebase.datatbase().ref(room_name).push({
      name:user_name,
      message:msg
      like:0    
    });
    document.getElementById("msg").value = ";"
}