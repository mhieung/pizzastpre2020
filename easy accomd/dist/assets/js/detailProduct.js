$(document).ready(function () {
    showdata();
});

const database = firebase.database();
const productRef = database.ref('/product');
const crustRef = database.ref('/crust');
const cartRef = database.ref('/cart');

function showdata() {
    let productID = getUrlParameter('id');
    let templateCrust = '<div class="form-group">'
        + '<label for="exampleFormControlSelect1">Example select</label>'
        + '<select class="form-control" id="crust_select">';
    crustRef.on('value', function (snapshot) {
        snapshot.forEach(function (crust) {
            templateCrust += '<option value="'+crust.key+'">' + crust.val().crust + '(price: $' + crust.val().price + ')' + '</option>';
        });
        templateCrust += '</select>'
        + '</div>';
    });
    
    productRef.child(productID).once('value').then(function (product) {
        $('#product_detail > div').remove();

        let topping = product.val().topping;
        let description = product.val().description;
        let price = product.val().price;
        let photo = product.val().photo;
        let productTemplate = '<div class="col-12 col-md-4">'
            + '<div class="slider-zoom">'
            + '<a href="#" class="cloud-zoom">'
            + '<img alt="Detail Zoom thumbs image" src="' + photo + '" style="width: 100%;">'
            + '</a>'
            + '</div>'
            + '</div>'
            + '<div class="col-12 col-md-8">'
            + '<div class="product-description">'
            + '<h2 class="title-product">'
            + topping
            + '</h2>'
            + '<div class="price-tag">'
            + '<span class="price-real">$' + price + '</span>'
            + '</div>'
            + '<div class="product-desc">'
            + '<p>' + description + '</p>'
            + '</div>'
            + '<p class="available">'
            + 'Availability:'
            + '<span>In Stock</span>'
            + '</p>'
            + '<div class="product-notes">'
            + '<div class="row">'
            + '<div class="col-md-4">'
            + '<label class="label-bold">Jumlah</label>'
            + '<div class="input-group d-flex justify-content-start align-items-center">'
            + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-default btn-number" onclick="subQuantity()" id="btnSubQuantity" disabled="disabled" data-type="minus"'
            + 'data-field="quant[1]">'
            + '<i class="fa fa-minus"></i>'
            + '</button>'
            + '</span>'
            + '<input type="text" name="quant[1]" class="form-control input-number mr-2 ml-2" value="1" id="quantity"'
            + 'min="1" max="100">'
            + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-default btn-number" data-type="plus" id="btnAddQuantity" onclick="addQuantity()" data-field="quant[1]">'
            + '<i class="fa fa-plus"></i>'
            + '</button>'
            + '</span>'
            + '</div>'
            + '</div>'
            + '<div class="col-md">'
            + '<label class="label-bold">Crust</label>'
            + templateCrust
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="btn-purchase d-flex justify-content-start align-items-center">'
            + '<div class="product-btn" onclick="addToCart('+product.key+')">'
            + '<a href="#"><i class="fas fa-shopping-cart"></i></img>Add to cart</a>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>'
        $('#product_detail').append(productTemplate);
    });
}

function addQuantity(){
    let quantity = parseInt($('#quantity').val());
    if( quantity >= 1){
        $('#btnSubQuantity').prop('disabled', false);
    }
    if(quantity == 99){
        $('#btnAddQuantity').prop('disabled', true);
    }
    $('#quantity').val( quantity + 1);
}

function subQuantity(){
    let quantity = parseInt($('#quantity').val());
    $('#quantity').val( quantity - 1);
    if( quantity == 2){
        $('#btnSubQuantity').prop('disabled', true);
    }
}

function addToCart(productID) {
    let userEmail = sessionStorage.getItem("user_email");
    let userKey = sessionStorage.getItem("user_key");
    let cartKey = cartRef.push().key;
    let quantity = parseInt($('#quantity').val());
    let crust = $("#crust_select").val();
    cartRef.child(cartKey).set({
        user_key: userKey,
        product_id: productID,
        quantity: quantity,
        crust: crust,
        status: 0
    });
    window.location.replace("cart.html")
}
function showCart(){
    window.location.replace("cart.html");
}