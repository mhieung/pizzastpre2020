var email;
var password;
var repwd
const database = firebase.database();
const usersRef = database.ref('/users');
document.getElementById('btnSignup').addEventListener('click', e => {
    e.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    repwd = document.getElementById('repeat-password').value;
    if (password == repwd) {
        const autoId = usersRef.push().key;
        usersRef.child(autoId).set({
            email: email,
            password: password
        });
        alert('Sign-up Success');
    } else {
        alert('wrong password');
    }

});

