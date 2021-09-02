var firebaseConfig = {
    apiKey: "AIzaSyDw6r04e6KchO7FGO8pCaV8Gq9EWUxiVjY",
    authDomain: "kwitter-webapp-ab6a6.firebaseapp.com",
    databaseURL: "https://kwitter-webapp-ab6a6-default-rtdb.firebaseio.com",
    projectId: "kwitter-webapp-ab6a6",
    storageBucket: "kwitter-webapp-ab6a6.appspot.com",
    messagingSenderId: "1089871982586",
    appId: "1:1089871982586:web:679909f79157d00af3fe43",
    measurementId: "G-RER2DHSCYV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("usern_name", username);
window.location="kwitter_room.html";
}

