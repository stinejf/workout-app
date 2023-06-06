const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9K6xk-3B0XY32gWrvVrqyRxM4tVhgeuU",
    authDomain: "running-1db16.firebaseapp.com",
    projectId: "running-1db16",
    storageBucket: "running-1db16.appspot.com",
    messagingSenderId: "212419173967",
    appId: "1:212419173967:web:f55c844fa00f41de1fd43a"
    /* Firebase config */
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

async function add() {
    const title = document.getElementById("title").value;
    const desc = document.getElementById("description").value;
    const type = document.getElementById("type").value;
    
    firebase.firestore().collection("workouts").doc().set({
        title: title,
        description: desc,
        type: type,
        workoutId: id
    })
        .then(function () {
            window.location.href = "./home.html";
        })

        .catch((err) => {
            alert(err.message)
            console.log(err.code);
            console.log(err.message);
        });
}
