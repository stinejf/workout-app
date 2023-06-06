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

function getWorkouts() {

    db.collection("workouts").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let select = document.getElementsByClassName("workoutList");
                for (let i = 0; i < select.length; i++) {
                    let opt = document.createElement('option');
                    opt.value = doc.data().workoutId;
                    opt.innerHTML = doc.data().title;
                    select[i].appendChild(opt);
                }
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

getWorkouts();

function saveWorkouts() {    
    let workouts = document.getElementsByClassName("workoutList"); 

    for (let i=0; i < workouts.length; i++) {
        console.log(workouts[i].value);
        
        firebase.firestore().collection("week").doc("" + i + "").set({
            workoutId: workouts[i].value
        },{ merge: true })
            .then(function () {
                window.location.href = "../index.html";
            })    
    
            .catch((err) => {
                alert(err.message)
                console.log(err.code);
                console.log(err.message);
            });
        
    }

}

