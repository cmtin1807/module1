function login() {
    let user = document.getElementById('username').value
    let pass = document.getElementById('password').value
    if (user == 'nguyen' && pass == '123'){
        changeToAdmin();
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
    }
    else {
        alert('sai user va mat khau')
    }}
function changeToAdmin(){
    let formAdd = document.getElementById("form");
    formAdd.style.display ="block";
    var buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    var buttons2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].style.display = "block";
    }}