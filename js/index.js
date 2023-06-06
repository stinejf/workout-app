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

async function getWorkouts() {
    db.collection("week")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().day == "monday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo1").innerHTML = doc.data().title ;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "tuesday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo2").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "wednesday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo3").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "thursday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo4").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "friday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo5").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "saturday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo6").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
                if (doc.data().day == "sunday") {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection("workouts").where("workoutId", "==", doc.data().workoutId)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                document.getElementById("wo7").innerHTML = doc.data().title;
                            });
                        })
                        .catch((error) => {
                            console.log("Error getting documents: ", error);
                        });
                }
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

getWorkouts();

async function getWorkout(id) {
    db.collection("workouts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().workoutId == id) {
                return doc.data().title;
            }
        });
    });
}

function check(id) {
    console.log("ferdig med oppgåve " + id)
}

function showBox() {
    document.getElementById("newBox").style.display = "block";
}

function send() {

    let title = document.getElementById("titleInp").value;
    let message = document.getElementById("textArInp").value;
    let day = document.getElementById("dayInp").value; 
    let workoutId = 3;
    firebase.firestore().collection("workouts").doc().set({
        title: title,
        workoutId: workoutId,
        description: message
    })

    document.getElementById("newBox").style.display = "none";
    document.getElementById("textArInp").value = "";
    getMessages();
}

/* 
function like(id) {
    var docRef = db.collection("messages").doc(id);
    docRef.get().then((doc) => {
        if (doc.exists) {
            likes = doc.data().likesCount; 
            likes = likes + 1;

            return docRef.update({
                likesCount: likes
            })
            .then(() => {
                console.log("Document successfully updated!" + likes + " " + doc.data().likesCount); 
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });

   
}

*/


function setDone(id) {
    if (document.getElementById(id).style.backgroundColor == "green") {
        document.getElementById(id).style.backgroundColor = "#d3d3d3";
        document.getElementById(id).style.backgroundImage = "";
    }
    else {
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(id).style.backgroundImage = "url('../images/done.svg')";
        document.getElementById(id).style.backgroundSize = "cover";
    }
}