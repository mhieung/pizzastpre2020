var email;
var password;
var repwd;
var phone;
var residentId;
var address;
var role;
function userInfo(email,password,phone,residentId,address,role){
    if (password == repwd){
        userInfo.email = email;
        userInfo.password = password;
        userInfo.phone = phone;
        userInfo.residentId = residentId;
        userInfo.address = address;
        userInfo.role = role;
        // console.log(userInfo);
    }
}
document.getElementById('btnSignup').addEventListener('click', e => {
    e.preventDefault();
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    repwd = document.getElementById('repeat-password').value;
    phone = document.getElementById('phone').value;
    residentId = document.getElementById('resident-id').value;
    address = document.getElementById('address').value;
    role = document.getElementById('role').value;
    userInfo(email,password,phone,residentId,address,role);
    let formData = new FormData();
    switch (role) {
        case 'owners':
            formData.append('email', email);
            formData.append('username', email);
            formData.append('password', password);
            formData.append('residentId', residentId);
            formData.append('address',address);
            formData.append('name', email);
            formData.append('code', email);
            formData.append('phone',phone);
            break;
        case 'renters':
            formData.append('email', email);
            formData.append('username', email);
            formData.append('password', password);
            formData.append('name', email)
            formData.append('code', email);
            formData.append('phone',phone);
            break;
        default:
            break;
    }
    
    axios({
        method: 'post',
        url: 'http://localhost:6660/' + role,
        data: formData
    }).then(res => {
        alert('Đăng ký thành công');
    }).catch(err => {
        if(err.response)
            alert(JSON.stringify(err.response.data))
        else
            alert(err);
    })
});



