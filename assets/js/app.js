var config = {
  apiKey: "AIzaSyBP4S7UkLYvhQNWi4Y58Fw4NdIqHgsgv7k",
  authDomain: "train-19919.firebaseapp.com",
  databaseURL: "https://train-19919.firebaseio.com",
  projectId: "train-19919",
  storageBucket: "",
  messagingSenderId: "206589574811",
  appId: "1:206589574811:web:11a50d0ba0bad013"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// initial values
var trainName ="";
var destination ="";
var firstTrainTime ="3:30";
 var frequency=0;



$("#submit-button").on("click", function (event) {
  event.preventDefault();

  // I need grab the information from the form
  var trainName = $("#trainName").val().trim();
  var destination = $("#trainDestination").val().trim();
  var firstTrainTime = $("#trainFirstTime").val().trim();
  var frequency = $("#trainFrequency").val().trim();


  // var newTrain = {
  //   trainname: trainName,
  //   destination: destination,
  //   firsttime: firstTrainTime,
  //   frequency: frequency,
  //   dateAdded: firebase.database.ServerValue.TIMESTAMP
  // };

  database.ref().push({
    trainname: trainName,
    destination: destination,
    firsttime: firstTrainTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });


  console.log(newTrain);



});

database.ref().on("child_added", function (snapshot) {
  var snapval = snapshot.val();
  var arrival = moment(snapval.firsttime, "hh:mm").subtract(1, "years");
  var diffTime = moment().diff(moment(arrival), "minutes");
  var remainder = parseInt(diffTime % snapval.frequency);
  // Minutes until next train
  var minAway = parseInt(snapval.frequency) - remainder;
  // Calculate next train time
  var nextTrain = moment().add(minAway, "minutes");
  // Convert minute to hour and minute format
  nextTrain = moment(nextTrain).format("hh:mm A");

  // console.log("THis is the minute away: "+ minAway)
  // console.log("THis is remain "+ remainder)
  // console.log("this is arrival"+ arrival)
  // console.log("this is frequency"+ frequency)
  // console.log("this is nextTrain"+ nextTrain)
  // console.log("this is diffTime"+ diffTime)

  // Create the new row
var newRow = $("<tr>").append(
  $("<td>").text(snapval.trainname),
  $("<td>").text(snapval.destination),
  $("<td>").text(snapval.frequency),
  $("<td>").text(nextTrain),
  $("<td>").text(minAway)
);
console.log(newRow)
// Append the new row to the table
$("#train-table > tbody").append(newRow);
$("#train-data").append(newRow);
});


  

  // var trainName = sv.trainname;
  // var destination = sv.destination;
  // var firstTrainTime = sv.firsttime;
  // var frequency = sv.frequency;


 

 

//    debugger

// Console.loging the last user's data
   
// console.log(sv.trainname);
// console.log(sv.destination);
// console.log(sv.firsttime);
// console.log(sv.frequency);
  



firebase.database().ref().on("value",function(snapshot){

     //   // Change the HTML to reflect
  $("#nameDisplay").html(snapshot.val)(sv.trainname);
   $("#destinationDisplay").html(snapshot.val)(sv.destination);
 $("#frequencyDisplay").html(snapshot.val)(sv.frequency);         
 $("#firsttimeDisplay").html(snapshot.val)(sv.firsttime);
   $("#minutesDisplay").html(snapshot.val)(sv.minutes-away);


});













// //         // Handle the errors
//         function(errorObject) {
//          console.log("Errors handled: " + errorObject.code);
//        });