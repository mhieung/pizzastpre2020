


var email;
var password;
var repwd;
const tbodyRef = document.getElementById('display').getElementsByTagName('tbody')[0];

function addProduct() {
    productRef.child(productId.value).set({
        topping: topping.value,
        price: price.value,
        photo: photo.value,
        description: description.value
    });
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
function switchToCrust(){
    window.location.href = 'crust-add.html';
}