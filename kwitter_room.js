var firebaseConfig = {
      apiKey: "AIzaSyBgPxC1QM7HHOL3TeNlvyu_L0VkZ3sEyo8",
      authDomain: "practice-activity-ea0ef.firebaseapp.com",
      databaseURL: "https://practice-activity-ea0ef-default-rtdb.firebaseio.com",
      projectId: "practice-activity-ea0ef",
      storageBucket: "practice-activity-ea0ef.appspot.com",
      messagingSenderId: "830289767496",
      appId: "1:830289767496:web:af3b18ffdf2e81fa91bc7d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
