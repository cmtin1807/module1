function add() {
    let id = document.getElementById('id').value
    let hang = document.getElementById('hang').value
    let tenDienThoai = document.getElementById('tenDienThoai').value
    let gia = document.getElementById('gia').value
    let soLuong = document.getElementById('id').value
    if (id == '' || hang == '' || tenDienThoai == '' || gia == '' || soLuong == '') {
        alert("Bạn nhập chưa đầy đủ. Vui lòng nhập lại")
    } else {
        let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
        listDienThoai.push(new Dienthoai(id, hang, tenDienThoai, gia, soLuong));
        clearDataInForm()
        sessionStorage.setItem("listDienThoaiMoi", JSON.stringify(listDienThoai));
        listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
        display(listDienThoai);
    }
    var button1 = document.querySelectorAll(".btn-edit"); //
    for (var i = 0; i < button1.length; i++) {
        button1[i].style.display = "block"
    }
    var button2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < button2.length; i++) {
        button2[i].style.display = "block"
    }
}

clearDataInForm();

function clearDataInForm() {
    document.getElementById('id').value = ''
    document.getElementById('hang').value = ''
    document.getElementById('tenDienThoai').value = ''
    document.getElementById('gia').value = ''
    document.getElementById('soLuong').value = ''

}

let indexx = 0

function editDienThoai(index) {
    let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    let dienThoai = listDienThoai[index]
    document.getElementById('id').value = dienThoai.id
    document.getElementById('hang').value = dienThoai.hang
    document.getElementById('tenDienThoai').value = dienThoai.tenDienThoai
    document.getElementById('gia').value = dienThoai.gia
    document.getElementById('soLuong').value = dienThoai.soLuong;
    listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    display(listDienThoai)
    var button1 = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < button1.length; i++) {
        button1[i].style.display = "block"
    }
    var button2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < button2.length; i++) {
        button2[i].style.display = "block"
    }
    indexx = index
}

function upDate() {
    let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    let id = document.getElementById('id').value;
    let hang = document.getElementById('hang').value;
    let tenDienThoai = document.getElementById('tenDienThoai').value;
    let gia = document.getElementById('gia').value;
    let soLuong = document.getElementById('soLuong').value;
    if (id == '' || hang == '' || tenDienThoai == '' || gia == '' || soLuong == '') {
        alert("Bạn nhập chưa đầy đủ. Vui lòng nhập lại")
    } else {
        listDienThoai[indexx].id = id;
        listDienThoai[indexx].hang = hang;
        listDienThoai[indexx].tenDienThoai = tenDienThoai;
        listDienThoai[indexx].gia = gia;
        listDienThoai[indexx].soLuong = soLuong;
        sessionStorage.setItem("listDienThoaiMoi", JSON.stringify(listDienThoai));
        listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"))
        display(listDienThoai);
        clearDataInForm();
    }
    var button1 = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < button1.length; i++) {
        button1[i].style.display = "block"
    }
    var button2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < button2.length; i++) {
        button2[i].style.display = "block"
    }
}

function deleteDienThoai(index) {
    function cauTraLoi(answer) {
        if (answer) {
            let productList = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"))
            productList.splice(index, 1)
            sessionStorage.setItem("listDienThoaiMoi", JSON.stringify(productList))
        }
        let productList = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"))
        display(productList)
        let buttons1 = document.querySelectorAll(".btn-edit");
        for (let i = 0; i < buttons1.length; i++) {
            buttons1[i].style.display = "block";
        }
        let buttons2 = document.querySelectorAll(".btn-delete");
        for (let i = 0; i < buttons2.length; i++) {
            buttons2[i].style.display = "block";
        }
    }

    let cauHoi = confirm('Bạn có thật sự muốn xóa sản phẩm hay không')
    cauTraLoi(cauHoi)
}



