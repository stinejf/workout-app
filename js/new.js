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
    let i = 0; 
    
    await db.collection("workouts").get()
        .then((querySnapshot) => {
            querySnapshot.forEach(() => {
            
            i = i + 1;
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    let newId = i+1;
    firebase.firestore().collection("workouts").doc().set({
        title: title,
        description: desc,
        type: type,
        workoutId: newId.toString()
    })
        .then(function () {
            window.location.href = "../index.html";
        })

        .catch((err) => {
            alert(err.message)
            console.log(err.code);
            console.log(err.message);
        });
}
