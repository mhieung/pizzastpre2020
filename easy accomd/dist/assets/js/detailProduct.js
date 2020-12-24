$(document).ready(function () {
    // showdata();

    let url = "http://localhost:6660/rooms";
    axios.defaults.withCredentials = true;
    let formData = new FormData();
    formData.append('username','admin');
    formData.append('password','12345678');

// function showdata() {
//     let productID = getUrlParameter('id');
//     let templateCrust = '<div class="form-group">'
//         + '<label for="exampleFormControlSelect1">Example select</label>'
//         + '<select class="form-control" id="crust_select">';
//     crustRef.on('value', function (snapshot) {
//         snapshot.forEach(function (crust) {
//             templateCrust += '<option value="'+crust.key+'">' + crust.val().crust + '(price: $' + crust.val().price + ')' + '</option>';
//         });
//         templateCrust += '</select>'
//         + '</div>';
//     });
function A(x){
    if(x == 1) {return 'Có'}
    else {return 'Không'}
};
    axios.get(url + document.location.search).then(res => {
        console.log(res.data);
        // productRef.child(productID).once('value').then(function (product) {
            $('#product_detail > div').remove();

            let address = res.data.rooms[0].address;
            let nearAddress = res.data.rooms[0].nearAddress;
            let description = res.data.rooms[0].otherUtility;
            let price = res.data.rooms[0].price; 
            let waterPrice = res.data.rooms[0].waterPrice; 
            let bathroom = res.data.rooms[0].bathroom;
            let heater = res.data.rooms[0].heater;
            let kitchen = res.data.rooms[0].kitchen;
            let balcony = res.data.rooms[0].balcony;
            let airConditioner = res.data.rooms[0].airConditioner;
            let electricityPrice = res.data.rooms[0].electricityPrice;
            let images = JSON.parse(res.data.rooms[0].image);
            let photo1 = images[0];
            let photo2 = images[1];
            let photo3 = images[2];
            let productTemplate = '<div class="col-12 col-md-4">'
                + '<div class="slider-zoom">'
                + '<a href="#" class="cloud-zoom">'
                + '<img alt="Detail Zoom thumbs image" src="' + photo1 + '" style="width: 100%;">'
                + '</a>'
                + '<a href="#" class="cloud-zoom">'
                + '<img alt="Detail Zoom thumbs image" src="' + photo2 + '" style="width: 100%;">'
                + '</a>'
                + '<a href="#" class="cloud-zoom">'
                + '<img alt="Detail Zoom thumbs image" src="' + photo3 + '" style="width: 100%;">'
                + '</a>'
                + '</div>'
                + '</div>'
                + '<div class="col-12 col-md-8">'
                + '<div class="product-description">'
                + '<h2 class="title-product">'
                + address
                + '</h2>'
                + '<div class="price-tag">'
                + '<span class="price-real">' + price + ' VND/THÁNG</span>'
                + '</div>'
                + '<div class="product-desc">'
                + '<p>Nước:' + waterPrice + ' VND/m³</p>'
                + '<br>'
                +'<p>Điện:' + electricityPrice + 'VND/Kwh</p>'
                + '<br>'
                +'<p>' + description + '</p>'
                + '<br>'
                +'<p>Phòng tắm:' + bathroom + '</p>'
                + '<br>'
                +'<p>Ban công:' + A(balcony) + '</p>'
                + '<br>'
                +'<p>Máy sưởi:' + A(heater) + '</p>'
                + '<br>'
                +'<p>Bếp:' + kitchen + '</p>'
                + '<br>'
                +'<p>Điều hòa:' + A(airConditioner)+ '</p>'
                + '</div>'
                // + '<p class="available">'
                // + 'Availability:'
                // + '<span>In Stock</span>'
                // + '</p>'
                + '<div class="product-notes">'
                + '<div class="row">'
                + '<div class="col-md-4">'
                + '<label class="label-bold">Đánh giá</label>'
                +''
                + '</div>'
                + '<div class="col-md">'
                + '<label class="label-bold">Gần </label>'
                + '   '
                +nearAddress
                + '</div>'
                + '</div>'
                + '</div>'
                +'<div class="stars">'
                    +'<form action="">'
                        +'<input class="star star-5" id="star-5" type="radio" name="star"/>'
                        +'<label class="star star-5" for="star-5"></label>'
                        +'<input class="star star-4" id="star-4" type="radio" name="star"/>'
                        +'<label class="star star-4" for="star-4"></label>'
                        +'<input class="star star-3" id="star-3" type="radio" name="star"/>'
                        +'<label class="star star-3" for="star-3"></label>'
                        +'<input class="star star-2" id="star-2" type="radio" name="star"/>'
                        +'<label class="star star-2" for="star-2"></label>'
                        +'<input class="star star-1" id="star-1" type="radio" name="star"/>'
                        +'<label class="star star-1" for="star-1"></label>'
                    +'</form>'
                +'</div>'
                + '<div class="btn-purchase d-flex justify-content-start align-items-center">'
                + '<div class="product-btn" onclick="addToCart('+res.data.rooms[0].roomID+')">'
                + '<a href="#"><i class="fas fa-shopping-cart"></i></img>Gửi tin nhắn</a>'
                + '</div>'
                + '</div>'
                + '</div>'
                + '</div>'
            $('#product_detail').append(productTemplate);
        // });
    }).catch(err => {
        console.log(err);
    })
});

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

function showCart(){
    window.location.replace("cart.html");
}