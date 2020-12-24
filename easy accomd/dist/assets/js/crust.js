$(document).ready(function () {
    showdata();
});


var email;
var password;
var repwd;
const database = firebase.database();
const crustRef = database.ref('/crust');
const tbodyRef = document.getElementById('display').getElementsByTagName('tbody')[0];

function addCrust() {
    crustRef.child(crustId.value).set({
        crust: crust.value,
        price: price.value,
    });
}

function showdata() {
    database.ref('crust').on('value', function (snapshot) {
        $('#display tbody > tr').remove();
        let index = 0;
        snapshot.forEach(function (crust) {
            index += 1;
            let crust_type = crust.val().crust;
            let price = crust.val().price;
            let rowtemplate =
                '<tr>'
                + '<td scope = "row">' + index + '</td>'
                + '<td>' + crust_type + '</td>'
                + '<td>' + price + '</td>'
                + '<td>'
                + '<button onclick="removeCrust(' + crust.key + ')" class="btn"><i class="far fa-trash-alt"></i></button>'
                + '<button onclick="editCrust(' + crust.key + ')" class="btn"><i class="fas fa-edit"></i></button>'
                + '</td>'
                + '</tr> ';
            $('#display tbody:last-child').append(rowtemplate);
        });
    });
}

function removeCrust(key) {
    let crust = crustRef.child(key);
    crust.remove();
}

function editCrust(key) {
    $('#updateBtn').removeClass('d-none');
    $('#addBtn').addClass('d-none');
    $('#cancelBtn').removeClass('d-none');
    let crust = crustRef.child(key);
    $('#crustId').val(key);
    crust.once('value').then(function (snapshot) {
        $('#crust').val(snapshot.val().crust);
        $('#price').val(snapshot.val().price);
    });
}

function cancel() {
    $('#updateBtn').addClass('d-none');
    $('#addBtn').removeClass('d-none');
    $('#cancelBtn').addClass('d-none');
    $('#crustId').val('');
    $('#crust').val('');
    $('#price').val('');
}
function switchToTopping(){
    window.location.href = 'Product-add.html';
}