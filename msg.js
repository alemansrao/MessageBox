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

$(document).ready(function () {
    rootRef.on('value', function (snapshot) {
        $('#messageShow').text(snapshot.child('currentMessage').val());
        $('#messageAuthor').text(snapshot.child('currentMessageAuthor').val());
    })
});

