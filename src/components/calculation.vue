<template>
    <div>
        <div class="card card-header text-center">
            <div class="main-title main-color py-0">Coco Savon Calc</div>
        </div>
    </div>
</template>

<script>
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default {
    created: function(){
        console.log('in created()')

        let firebaseConfig = {
                apiKey: "AIzaSyAM8ZPiUa8kRT6Dcyt6oB3iLyeHnzIuYMg",
                authDomain: "cocosavon-calc.firebaseapp.com",
                databaseURL: "https://cocosavon-calc.firebaseio.com",
                projectId: "cocosavon-calc",
                storageBucket: "cocosavon-calc.appspot.com",
                messagingSenderId: "1096447095262",
                appId: "1:1096447095262:web:c0d752ee13cee0c55ead4f",
                measurementId: "G-V4TXHE3DBG"
              }

        if (firebase.apps.length === 0) {
            // If not initialized, initialize it
            firebase.initializeApp(firebaseConfig)
        }
        // Initialize Cloud Firestore through Firebase
        let db = firebase.firestore()

        console.log(db)
    }
}
</script>

<style lang="css">
</style>
