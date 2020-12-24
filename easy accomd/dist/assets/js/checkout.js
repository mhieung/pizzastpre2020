$(document).ready(function () {
    showdata();
});

const database = firebase.database();
const productRef = database.ref('/product');
const crustRef = database.ref('/crust');
const cartRef = database.ref('/cart');

function showdata() {
    let userKey = sessionStorage.getItem("user_key");
    cartRef.orderByChild('user_key').equalTo(userKey).on('value', function (snapshot) {
        $('#cart_product tbody > tr').remove();
        let price = '';
        let crust_price = '';
        let quantity = '';
        let totalAmount = 0;
        snapshot.forEach(function (cart) {
            quantity = cart.val().quantity;
            crustRef.child(cart.val().crust).once('value').then(function (crust) {
                totalAmount = totalAmount + parseInt(price) * quantity + parseInt(crust_price) * quantity
            });
 
        });

    });
}
function showCart(){
    window.location.replace("cart.html");
}