var firebaseConfig = {
    apiKey: "AIzaSyD61bRVhApNCS3P74nFsxn_Q5nD_zBIHoI",
    authDomain: "unibets.firebaseapp.com",
    databaseURL: "https://unibets-default-rtdb.firebaseio.com/",
    projectId: "unibets",
    storageBucket: "unibets.appspot.com",
    messagingSenderId: "685335983785",
    appId: "1:685335983785:web:bf28991fce8099f1a45bb8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

const auth = firebase.auth();