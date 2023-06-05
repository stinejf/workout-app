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

function getUserData() {
    console.log("Hei");
    db.collection("users").where("userId", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                if (doc.data().name) { document.getElementById("name").innerText = doc.data().name; }
                if (doc.data().birth) { document.getElementById("birth").innerText = doc.data().birth; }
                if (doc.data().school) { document.getElementById("school").innerText = doc.data().school; }
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}


getUserData();

function updateAge() {
    let birth = document.getElementById("birth").innerText;
    let birthDate = new Date(birth);
    let age = new Date().getFullYear() - birthDate.getFullYear();
    document.getElementById("age").innerText = age;
}

//////////////////////////////////////////////////////////////////////////////////// 
// GET THE USER 
//////////////////////////////////////////////////////////////////////////////////// 




function editProfile() {
    
    console.log("hei"); 

    db.collection("users").where("userId", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                if (!doc.data().school === undefined) {
                    document.getElementById("inp_school").value = doc.data().school;
                }
                else {
                    document.getElementById("inp_school").value = "";
                }

                // doc.data() is never undefined for query doc snapshots
                document.getElementById("btn_editProfile").style.display = "none";
                document.getElementById("userinfo").style.display = "none";
                document.getElementById("edit").style.display = "block";
                document.getElementById("inp_name").value = doc.data().name;
                document.getElementById("inp_birth").value = doc.data().birth;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}

function updateProfile() {

    /// DENNE MÅ ENDRAST ////


    /* 
    firebase.database().ref('users/' + uid).set({
        name: document.getElementById("inp_name").value,
        birth: document.getElementById("inp_birth").value,
        school: document.getElementById("inp_school").value
    });
*/ 


    document.getElementById("userinfo").style.display = "block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("btn_editProfile").style.display = "block";
}

function getLikes(user) {

}

function getMessages(user) {

}

// Import the functions you need from the SDKs you need
