const firebaseConfig = {
    apiKey: "AIzaSyCToFahKC8AXJsBzv4K4pFWDq_W4J7EOrM",
    authDomain: "kwitter-dda8a.firebaseapp.com",
    databaseURL: "https://kwitter-dda8a-default-rtdb.firebaseio.com",
    projectId: "kwitter-dda8a",
    storageBucket: "kwitter-dda8a.appspot.com",
    messagingSenderId: "200595473502",
    appId: "1:200595473502:web:92437596ed330f9fa920cf"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
          console.log("Room Name -"+ Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML+= row;
   
    });});}
getData();

function addRoom()
{
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
    window.location ="index.html"
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
}
