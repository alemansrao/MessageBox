
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0G4WnOtdKlqvlbG9QpoXShQU8smXI8xo",
    authDomain: "myproject-28e2c.firebaseapp.com",
    databaseURL: "https://myproject-28e2c.firebaseio.com",
    projectId: "myproject-28e2c",
    storageBucket: "myproject-28e2c.appspot.com",
    messagingSenderId: "1065079913508",
    appId: "1:1065079913508:web:932de06769e9de11f9acb1",
    measurementId: "G-Y920405L3S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var rootRef = firebase.database().ref().child('messageTable');
$('#submit-button').click(function () {
    if ($('#nameBox').val() == "") {
        if ($('#exampleInput').val() == "") {
            $("#exampleInput").focus();
        }
        else {
            $("#nameBox").focus();
        }
    }
    else {
        rootRef.set({
            currentMessage: $('#exampleInput').val(),
            currentMessageAuthor: $('#nameBox').val()
        });
        window.location.href = "message.html";
    }
});
$('#View-button').click(function () {
    if ($('#nameBox').val() != "" && $('#exampleInput').val() != "") {
        var alert = confirm("Do you want to proceed anyway?");
        if (alert == true) {
            window.location.href = "message.html";
        }
    }
    else {
        window.location.href = "message.html";
    }
});


		// $("#submit-button").keyup(function (event) {
		// 	if (event.keyCode === 13) {
		// 		$("#submit-button").click();
		// 	}
		// });