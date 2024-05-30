function login() {
    let user = document.getElementById('userName').value
    let pass = document.getElementById('passWord').value
    if (user == 'nguyen' && pass == '123'){
        changeToAdmin();
        document.getElementById('userName').value = ''
        document.getElementById('passWord').value = ''
    }
    else {
        alert('Sai userName và passWord. Vui Lòng nhâp lại.')
    }}
function changeToAdmin(){
    let formAdd = document.getElementById("them");
    formAdd.style.display ="block";
    var buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    var buttons2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].style.display = "block";
    }}