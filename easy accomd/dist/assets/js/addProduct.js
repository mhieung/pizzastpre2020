axios.defaults.withCredentials = true;

var ownerId 
var code
var address
var nearAddress 
var typeId
var amount 
var price 
var area 
var general 
var image
var typeTimeId 
var shownTime
var bathroom 
var heater
var kitchen 
var airConditioner 
var balcony 
var electricityPrice 
var waterPrice
var otherUtility
var confirm

axios.get("http://localhost:6660/typeRooms").then(res => {
    let option = '';
    for(let type of res.data.typeRooms)
        option += '<option value="' + type.typeId + '">' + type.name + '</option>\n';
    $(type_rooms).html(option);
}).catch(err => {
    console.log(err);
})

function addProduct() {
    e.preventDefault();
    address = document.getElementById('address').value;
    nearAddress = document.getElementById('nearAddress').value;
    typeId = document.getElementById('typeId').value;
    price = document.getElementById('price').value;
    heater = document.getElementById('heater').value;
    airConditioner = document.getElementById('airConditioner').value;
    bathroom = document.getElementById('bathroom').value;
    kitchen = document.getElementById('kitchen').value;
    balcony = document.getElementById('balcony').value;
    waterPrice = document.getElementById('waterPrice').value;
    electricityPrice = document.getElementById('electricityPrice').value;
    otherUtility = document.getElementById('otherUtility').value;
    area = document.getElementById('area').value;
    code = document.getElementById('code').value;
    general = document.getElementById('general').value;
    amount = document.getElementById('amount').value;
    images = document.getElementById('images').files;
    typeTimeId = document.getElementById('typeTimeId').value;
    shownTime = document.getElementById('shownTime').value;

    let formData = new FormData();
    formData.append('address',address);
    formData.append('nearAddress',nearAddress);
    formData.append('typeId',typeId);
    formData.append('price',price);
    formData.append('heater',heater);
    formData.append('airConditioner',airConditioner);
    formData.append('bathroom',bathroom);
    formData.append('kitchen',kitchen);
    formData.append('balcony',balcony);
    formData.append('waterPrice',waterPrice);
    formData.append('electricityPrice',electricityPrice);
    formData.append('otherUtility',otherUtility);
    formData.append('area',area);
    formData.append('code',code);
    formData.append('general',general);
    formData.append('amount',amount);
    formData.append('typeTimeId',typeTimeId);
    formData.append('shownTime',shownTime);

    let i = 1;
    for(let image of images) {
        formData.append('image(' + (i++) + ')', image);
    }

    axios({
        method: 'post',
        url: 'http://localhost:6660/rooms',
        data: formData
    }).then(res => {
        alert('Đăng thành công');
    }).catch(err => {
        if(err.response)
            alert(JSON.stringify(err.response.data))
        else
            alert(err);
    })

    
}
function updateProduct() {
    e.preventDefault();
    address = document.getElementById('address').value;
    nearAddress = document.getElementById('nearAddress').value;
    typeId = document.getElementById('typeId').value;
    price = document.getElementById('price').value;
    heater = document.getElementById('heater').value;
    airConditioner = document.getElementById('airConditioner').value;
    bathroom = document.getElementById('bathroom').value;
    kitchen = document.getElementById('kitchen').value;
    balcony = document.getElementById('balcony').value;
    waterPrice = document.getElementById('waterPrice').value;
    electricityPrice = document.getElementById('electricityPrice').value;
    otherUtility = document.getElementById('otherUtility').value;
    area = document.getElementById('area').value;
    code = document.getElementById('code').value;
    general = document.getElementById('general').value;
    amount = document.getElementById('amount').value;
    images = document.getElementById('images').files;
    typeTimeId = document.getElementById('typeTimeId').value;
    shownTime = document.getElementById('shownTime').value;
    ownerId = document.getElementById('ownerId').value;

    let formData = new FormData();
    formData.append('address',address);
    formData.append('nearAddress',nearAddress);
    formData.append('typeId',typeId);
    formData.append('price',price);
    formData.append('heater',heater);
    formData.append('airConditioner',airConditioner);
    formData.append('bathroom',bathroom);
    formData.append('kitchen',kitchen);
    formData.append('balcony',balcony);
    formData.append('waterPrice',waterPrice);
    formData.append('electricityPrice',electricityPrice);
    formData.append('otherUtility',otherUtility);
    formData.append('area',area);
    formData.append('code',code);
    formData.append('general',general);
    formData.append('amount',amount);
    formData.append('typeTimeId',typeTimeId);
    formData.append('shownTime',shownTime);

    let i = 1;
    for(let image of images) {
        formData.append('image(' + (i++) + ')', image);
    }

    axios({
        method: 'push',
        url: 'http://localhost:6660/rooms',
        data: formData
    }).then(res => {
        alert('Cập nhật thành công');
    }).catch(err => {
        if(err.response)
            alert(JSON.stringify(err.response.data))
        else
            alert(err);
    })
        
    
}
function showdata() {
    database.ref('product').on('value', function (snapshot) {
        $('#display tbody > tr').remove();
        let index = 0;
        snapshot.forEach(function (product) {
            index += 1;
            let topping = product.val().topping;
            let price = product.val().price;
            let description = product.val().description;
            let rowtemplate =
                '<tr>'
                + '<td scope = "row">' + index + '</td>'
                + '<td>' + topping + '</td>'
                + '<td>' + price + '</td>'
                + '<td>' + description + '</td>'
                + '<td>'
                + '<button onclick="removeProduct(' + product.key + ')" class="btn"><i class="far fa-trash-alt"></i></button>'
                + '<button onclick="editProduct(' + product.key + ')" class="btn"><i class="fas fa-edit"></i></button>'
                + '</td>'
                + '</tr> ';
            $('#display tbody:last-child').append(rowtemplate);
        });
    });
}

function removeProduct(key) {
    let product = productRef.child(key);
    product.remove();
}

function editProduct(key) {
    $('#updateBtn').removeClass('d-none');
    $('#addBtn').addClass('d-none');
    $('#cancelBtn').removeClass('d-none');
    let product = productRef.child(key);
    $('#productId').val(key);
    product.once('value').then(function (snapshot) {
        $('#topping').val(snapshot.val().topping);
        $('#price').val(snapshot.val().price);
        $('#photo').val(snapshot.val().photo);
        $('#description').val(snapshot.val().description);
    });
}

function cancel() {
    $('#updateBtn').addClass('d-none');
    $('#addBtn').removeClass('d-none');
    $('#cancelBtn').addClass('d-none');
    $('#productId').val('');
    $('#topping').val('');
    $('#price').val('');
    $('#photo').val('');
    $('#description').val('');
}
