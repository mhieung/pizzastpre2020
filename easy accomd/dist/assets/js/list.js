$(document).ready(function () {
    // showdata();
    let url = "http://localhost:6660/typeTimes";

    axios.post('http://localhost:6660/login', {
        username: 'thiba',
        password: '12345678'
    }).then(res => {
        let info = res.data;
        console.log(info);

    }).catch(err => {
        console.log(err);
        if(err.response)
            alert(JSON.stringify(err.response.data,null,4));
        else
            alert(err);
    })

    axios.get("http://localhost:6660/typeTimes").then(res => {
        let info = res.data;
        console.log(info);

    }).catch(err => {
        console.log(err);
        if(err.response)
            alert(JSON.stringify(err.response.data,null,4));
        else
            alert(err);
    })

    // let formData = new FormData();
    // formData.append(name,value);
    // axios({
    //     method: 'post'/'put',
    //     url: this.dataset.url,
    //     data: formData
    // }).then(res => {
    //     alert('Tạo/cập nhật thành công');

    // }).catch(err => {
    //     if(err.response)
    //         alert(JSON.stringify(err.response.data,null,4));
    //     else
    //         alert(err);
    // })


});

function showCart(){
    window.location.replace("cart.html");
}


// function showdata() {
//     database.ref('product').on('value', function (snapshot) {
//         $('#list_product > div').remove();
//         snapshot.forEach(function (product) {
//             let topping = product.val().topping;
//             // let crust = product.val().crust;
//             let price = product.val().price;
//             let photo = product.val().photo;
//             let productTemplate =
//                 '<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">'
//                     + '<div class="product-item mb-20">'
//                         +'<div class="product-thumb">'
//                             +'<a href="product-details.html?id='+product.key+'">'
//                                 +'<img src="'+photo+'" alt="product image">'
//                             +'</a>'
//                         +'</div>'
//                         +'<div class="product-description text-center">'
//                             +'<div class="product-name">'
//                                 +'<h3><a href="product-details.html?id='+product.key+'">'+topping+'</a></h3>'
//                             +'</div>'
//                             // +'<div class="manufacturer">'
//                             //     +'<p><a href="product-details.html">'+crust+'</a></p>'
//                             // +'</div>'
//                             +'<div class="price-box">'
//                                 +'<span class="regular-price">$'+price+'</span>'
//                             +'</div>'
//                             +'<div class="product-btn">'
//                                 +'<a href="product-details.html?id='+product.key+'"><i class="fas fa-shopping-cart"></i></i>Detail</a>'
//                             +'</div>'
//                         +'</div>'
//                     +'</div>'
//                     +'<div class="product-list-item mb-20">'
//                         +'<div class="product-thumb">'
//                            +' <a href="product-details.html">'
//                                 +'<img src="'+photo+'" alt="product image">'
//                             +'</a>'
//                         +'</div>'
//                         +'<div class="product-list-content">'
//                             // +'<h4><a href="#">Fashion Manufacturer</a></h4>'
//                             +'<h3><a href="product-details.html">'+topping+'</a></h3>'
//                             +'<div class="pricebox">'
//                                 +'<span class="regular-price">$'+price+'</span>'
//                             +'</div>'
//                             +'<p>'+product.val().description+'</p>'
//                             +'<div class="product-btn">'
//                                 +'<a href="product-details.html?id='+product.key+'"><i class="fas fa-shopping-cart"></i></i>Add to cart</a>'
//                             +'</div>'
//                         +'</div>'
//                     +'</div>'
//                 +'</div>'
//             $('#list_product').append(productTemplate);
//         });
//     });
// }