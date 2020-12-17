var email;
var password;
var repwd;
var role;
const database = firebase.database();
const usersRef = database.ref('/users');
document.getElementById('login').addEventListener('click', e => {
    e.preventDefault();

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    usersRef.orderByChild('email').equalTo(email).on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            if (data.val().password == password) {
                sessionStorage.setItem("user_key", data.key);
                sessionStorage.setItem("user_email", data.email);
             if(data.val().role == 1){
                window.location.href = 'Product-add.html';
            }else
                window.location.href = 'list.html'
            } else {
                alert('wrong email or password');
            }
        });
    });
});

