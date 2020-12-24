$(document).ready(function () {
    // showdata();
    let url = "http://localhost:6660/rooms";
    axios.defaults.withCredentials = true;
    let formData = new FormData();
    formData.append('username','admin');
    formData.append('password','12345678');

    // axios({
    //     method: 'post',
    //     url: 'http://localhost:6660/login',
    //     data: formData
    // }).then(res => {
    //     console.log(res.data);
    // }).catch(err => {
    //     console.log(err);
    //     if(err.response)
    //         alert(JSON.stringify(err.response.data,null,4));
    //     else
    //         alert(err);
    // })



    // axios.post('http://localhost:6660/infoUser').then(res => {
    //     console.log(res.data);
    //     let div = document.createElement('div');
    //     let img = document.createElement('img');
    //     img.src = "http://localhost:6660/image/image(1)-1608162149333.jpeg";
    //     div.appendChild(img);
    //     let table = document.createElement('table');
    //     table.className = 'table borderless';
    //     table.style = "border: 4px solid black; padding: 10px;";
    //     table.id = "";
    //     table.dataset.id = 'user';
    //     let thead = document.createElement('thead');
    //     let tbody = document.createElement('tbody');
    //     for(let head of Object.keys(res.data.user)) {
    //         let th = document.createElement('th');
    //         th.appendChild(document.createTextNode(head));
    //         thead.appendChild(th);
    //     }
    //     let tr = document.createElement('tr');
    //     for(let body of Object.values(res.data.user)) {
    //         let td = document.createElement('td');
    //         td.appendChild(document.createTextNode(body));
    //         tr.appendChild(td);
    //     }
    //     tbody.appendChild(tr);
    //     table.appendChild(thead);
    //     table.appendChild(tbody);
    //     div.appendChild(table);
    //     $('#list_product').html(div);
    // }).catch(err => {
    //     console.log(err);
    //     if(err.response)
    //         alert(JSON.stringify(err.response.data,null,4));
    //     else
    //         alert(err);
    // })
    
    axios.get(url).then(res => {
        console.log(res.data);
        $('#list_product > div').remove();
        for(let i = 0 ; i < res.data.rooms.length ; i++) {
            let roomId = res.data.rooms[i].roomId
            let address = res.data.rooms[i].address;
            let price = res.data.rooms[i].price;
            let images = JSON.parse(res.data.rooms[i].image);
            let photo = images[0];
            let description = res.data.rooms[i].otherUtility;
            let productTemplate =
                '<div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">'
                    + '<div class="product-item mb-20">'
                        +'<div class="product-thumb">'
                            +'<a href="product-details.html?roomId='+roomId+'">'
                                +'<img src="'+photo+'" alt="product image">'
                            +'</a>'
                        +'</div>'
                        +'<div class="product-description text-center">'
                            +'<div class="product-name">'
                                +'<h3><a href="product-details.html?roomId='+roomId+'">'+address+'</a></h3>'
                            +'</div>'
                            // +'<div class="manufacturer">'
                            //     +'<p><a href="product-details.html">'+crust+'</a></p>'
                            // +'</div>'
                            +'<div class="price-box">'
                                +'<span class="regular-price">'+price+' VND/THÁNG</span>'
                            +'</div>'
                            +'<div class="product-btn">'
                                +'<a href="/product-details.html?roomId='+roomId+'"><i class="fas fa-shopping-cart"></i></i>Detail</a>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="product-list-item mb-20">'
                        +'<div class="product-thumb">'
                           +' <a href="product-details.html">'
                                +'<img src="'+photo+'" alt="product image">'
                            +'</a>'
                        +'</div>'
                        +'<div class="product-list-content">'
                            // +'<h4><a href="#">Fashion Manufacturer</a></h4>'
                            +'<h3><a href="product-details.html">'+address+'</a></h3>'
                            +'<div class="pricebox">'
                                +'<span class="regular-price">$'+price+'</span>'
                            +'</div>'
                            +'<p>'+description+'</p>'
                            +'<div class="product-btn">'
                                +'<a href="product-details.html?roomId='+ roomId+'"><i class="fas fa-shopping-cart"></i></i>Add to cart</a>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
            $('#list_product').append(productTemplate);
        }
    }).catch(err => {
        console.log(err);
    })

    // let formData = new FormData();
    // formData.append('image',file);
    // axios({
    //     method: 'post',
    //     url: '"http://localhost:6660/rooms"',
    //     data: formData
    // }).then(res => {
    //     alert('Tạo/cập nhật thành công');
    //     console.log(res.data);
    //     alert(JSON.stringify(res.data,null,4));

    // }).catch(err => {
    //     if(err.response)
    //         alert(JSON.stringify(err.response.data,null,4));
    //     else
    //         alert(err);
    // })
  
    // axios.get(url, {
    //     params: {}
    // }).then(res => {
    //     let data = res.data;
    // }).catch(err => {
    //     alert(err);
    // })

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

    $('a[data-id=login]').click(function() {
        this.appendChild(document.createTextNode('Sign out'));

    })


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
//                             +'<a href="product-details.html?roomId='+roomId+'">'
//                                 +'<img src="'+photo+'" alt="product image">'
//                             +'</a>'
//                         +'</div>'
//                         +'<div class="product-description text-center">'
//                             +'<div class="product-name">'
//                                 +'<h3><a href="product-details.html?roomId='+roomId+'">'+topping+'</a></h3>'
//                             +'</div>'
//                             // +'<div class="manufacturer">'
//                             //     +'<p><a href="product-details.html">'+crust+'</a></p>'
//                             // +'</div>'
//                             +'<div class="price-box">'
//                                 +'<span class="regular-price">$'+price+'</span>'
//                             +'</div>'
//                             +'<div class="product-btn">'
//                                 +'<a href="product-details.html?roomId='+roomId+'"><i class="fas fa-shopping-cart"></i></i>Detail</a>'
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
//                                 +'<a href="product-details.html?roomId='+roomId+'"><i class="fas fa-shopping-cart"></i></i>Add to cart</a>'
//                             +'</div>'
//                         +'</div>'
//                     +'</div>'
//                 +'</div>'
//             $('#list_product').append(productTemplate);
//         });
//     });
// }