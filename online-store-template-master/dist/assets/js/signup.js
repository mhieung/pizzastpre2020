var email;
var password;
var repwd
const database = firebase.database();
const usersRef = database.ref('/users');
document.getElementById('login').addEventListener('click', e => {
    e.preventDefault();

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    usersRef.orderByChild('email').equalTo(email).on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            if (data.val().password == password) {
                window.location.href = 'index.html'
            } else {
                alert('wrong email or password');
            }
        });
    });
});

