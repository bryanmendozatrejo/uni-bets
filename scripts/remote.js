/*
function unHideOnAuth() {
    //document.getElementById('hide').setAttribute('style', 'display: block;');
}

function changeLoginOnAuth() {
    const loginButton = document.getElementById('login-button');
    //console.log(loginButton);
    loginButton.innerHTML = "Sign Out";
    loginButton.setAttribute('href', '#');
    loginButton.setAttribute('onclick', 'signOut()');
}
*/
function updatePointsOnAuth(email) {
    const points = document.getElementById('points');
    
    db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            datas = doc.data();
            if(email = datas.email)
            {
                points.innerHTML = numberWithCommas(datas.points);
            }
        });
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function signOut() {
    auth.signOut();
    alert("Signed out.")
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        // is signed in
        //unHideOnAuth();
        //changeLoginOnAuth();
        updatePointsOnAuth(email);
    } else {
        alert("Not logged in.");
        window.location.replace('../login.html');
        // not logged in
    }
});


/*
db.collection('bets').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        datas = doc.data();
        //console.log(doc.data());
        var span = '<span>' + datas.points + '</span>';
        document.getElementById("firebase-test").innerHTML += 'Content: ' + span + '<br>'; 
    });
});
*/