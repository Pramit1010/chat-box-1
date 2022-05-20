
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAgT8-6xLpces-Y-8YmJjNeTnO_9zW4bPU",
      authDomain: "chat-box-pro.firebaseapp.com",
      databaseURL: "https://chat-box-pro-default-rtdb.firebaseio.com",
      projectId: "chat-box-pro",
      storageBucket: "chat-box-pro.appspot.com",
      messagingSenderId: "1019966771628",
      appId: "1:1019966771628:web:1c662f59d82b10f62baa09"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
