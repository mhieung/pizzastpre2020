var email;
var password;
var repwd;
var role;
document.getElementById('login').addEventListener('click', e => {
    e.preventDefault();

    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    let formData = new FormData();
    formData.append('username', email);
    formData.append('password',password);
    console.log(true);
    axios({
        method: 'post',
        url: 'http://localhost:6660/login',
        data: formData
    }).then(res => {
        alert('Đăng nhập thành công');
        window.location.replace("list.html");
    }).catch(err => {
        if(err.response)
            alert(JSON.stringify(err.response.data))
        else
            alert(err);
    })
    
});
