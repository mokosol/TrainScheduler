var firebaseConfig = {
  apiKey: "AIzaSyCVxRG5rBQ8aGbAW7ROgy0-R4AsWq36tbg",
  authDomain: "trainscheduler2636.firebaseapp.com",
  databaseURL: "https://trainscheduler2636.firebaseio.com",
  projectId: "trainscheduler2636",
  storageBucket: "trainscheduler2636.appspot.com",
  messagingSenderId: "344580793094",
  appId: "1:344580793094:web:d4d29d48f5a43a59"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  
      

  $("#submit-button").on("click", function (event) {
   event.preventDefault();

    // I need grab the information from the form
  var trainName =  $("#trainName").val().trim();
  var destination = $("#trainDestination").val().trim();
  var firstTrainTime = $("#trainFirstTime").val().trim();
  var frequency = $("#trainFrequency").val().trim();


  var newTrain = {
  trainname: trainName,
  destination: destination,
  firsttime: firstTrainTime,
  frequency: frequency,
  dateAdded: firebase.database.ServerValue.TIMESTAMP
  };

  database.ref().push(newTrain);

    
});

//  //Firebase watcher .on("child_added"
//    firebase.database().ref().on("value", function(snapshot) {
//         // storing the snapshot.val() in a variable for convenience
//         var sv = snapshot.val();
      

//         // Console.loging the last user's data
//         console.log(sv.trainname);
//         console.log(sv.destination);
//         console.log(sv.firsttime);
//         console.log(sv.frequency);
        

//         // Change the HTML to reflect
//         $("#nameDisplay").html(snapshot.val)(sv.trainname);
//         $("#destinationDisplay").html(snapshot.val)(sv.destination);
//         $("#frequencyDisplay").html(snapshot.val)(sv.frequency);
//         $("#firsttimeDisplay").html(snapshot.val)(sv.firsttime);
//         $("#minutesDisplay").html(snapshot.val)(sv.minutes-away);


//         // Handle the errors
//       }, function(errorObject) {
//         console.log("Errors handled: " + errorObject.code);
//       });