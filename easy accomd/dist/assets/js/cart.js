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
        let image = '';
        let product_name = '';
        let price = '';
        let crust_name = '';
        let crust_price = '';
        let quantity = '';
        let totalAmount = 0;
        snapshot.forEach(function (cart) {
            quantity = cart.val().quantity;
            productRef.child(cart.val().product_id).once('value').then(function (product) {
                price = product.val().price;
                $("#product_image"+cart.key).attr("src", product.val().photo);
                $("#product_name"+cart.key).html(product.val().topping);
                $("#product_price"+cart.key).html(price);
            });

            crustRef.child(cart.val().crust).once('value').then(function (crust) {
                crust_name = crust.val().crust;
                crust_price = crust.val().price;
                $("#crust_name"+cart.key).html(crust_name);
                $("#crust_price"+cart.key).html(crust_price);                
                $("#total_"+cart.key).html('$'+(parseInt(price) * quantity + parseInt(crust_price) * quantity));

            });
 
            let rowtemplate =
                '<tr>'
                + '<td class="pro-thumbnail">'
                + '<a href="#">'
                + '<img class="img-fluid" id="product_image'+cart.key+'" alt="Product" />'
                + '</a>'
                + '</td>'
                + '<td class="pro-title">'
                + '<a href="#" id="product_name'+cart.key+'">' + product_name + '</a>'
                + '</td>'
                + '<td class="pro-price">'
                + '<span id="product_price'+cart.key+'">$' + price + '</span>'
                + '</td>'
                + '<td class="pro-title">'
                + '<a href="#" id="crust_name'+cart.key+'">' + crust_name + '</a>'
                + '</td>'
                + '<td class="pro-price">'
                + '<span id="crust_price'+cart.key+'">$' + crust_price + '</span>'
                + '</td>'
                + '<td class="pro-quantity">'
                + '<div class="pro-qty">'
                + '<input type="text" value="'+quantity+'">'
                    + '</div>'
                    + '</td>'
                    + '<td class="pro-subtotal">'
                    + '<span id="total_'+cart.key+'"></span>'
                    + '</td>'
                    + '</tr> ';
            $('#cart_product tbody:last-child').append(rowtemplate);
        });

    });
}

function showCart(){
    window.location.replace("cart.html");
}

function checkOut(){
    alert('Your purchase was successfull');
    window.location.replace("list.html");
}