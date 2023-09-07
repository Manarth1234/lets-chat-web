var firebaseConfig = {

  apiKey: "AIzaSyDTBm4YfQCuHVkWpjls9-T_2jTIC5YpwV4",

  authDomain: "kwitter-project-5b9c0.firebaseapp.com",

  projectId: "kwitter-project-5b9c0",

  storageBucket: "kwitter-project-5b9c0.appspot.com",

  messagingSenderId: "440484750823",

  appId: "1:440484750823:web:01348b3ef5602eac6e4942"

};




firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name", user_name);

document.getElementById("user_name").innerHTML = "Welcome " + username;

function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room"
    });
    
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_main.html";
}

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData(); 


function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_main.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
