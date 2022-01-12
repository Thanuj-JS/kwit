

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
  
  
  // Initialize Firebase
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)' ># + Roomnames" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName(room_name){
    console.log(room_name)
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
z