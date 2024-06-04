function add() {
    let id = document.getElementById('maDienThoai').value
    let hang = document.getElementById('ten').value
    let name = document.getElementById('hang').value
    let price = document.getElementById('gia').value
    let quantity = document.getElementById('quantity').value
    if (id == '' || hang == '' || name == '' || price == '' || quantity == '') {
        alert('Bạn chưa nhập đầy đủ sản phẩm. Vui lòng nhập sản phẩm  cần thêm')
    } else {
        let productList = JSON.parse(sessionStorage.getItem("productListNew"));
        productList.push(new Phone(id, hang, name, price, quantity));
        document.getElementById('maDienThoai').value = ''
        document.getElementById('ten').value = ''
        document.getElementById('hang').value = ''
        document.getElementById('gia').value = ''
        document.getElementById('quantity').value = ''
        sessionStorage.setItem("productListNew", JSON.stringify(productList))
        display()
    }
    var buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    var buttons2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].style.display = "block";
    }
}
let indexx = 0

function editProduct(index) {
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    let book = productList[index]
    document.getElementById('maDienThoai').value = book.id;
    document.getElementById('ten').value = book.hang;
    document.getElementById('hang').value = book.name;
    document.getElementById('gia').value = book.price;
    document.getElementById('quantity').value = book.quantity;
    display()
    var buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    var buttons2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].style.display = "block";
    }
    indexx = index
}
function update() {
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    let id = document.getElementById('maDienThoai').value;
    let hang = document.getElementById('ten').value;
    let name = document.getElementById('hang').value;
    let price = document.getElementById('gia').value;
    let quantity = document.getElementById('quantity').value;
    if (id == '' || hang == '' || name == '' || price == '' || quantity == '') {
        alert('Bạn chưa nhập đầy đủ thông tin sản phẩm. Vui lòng nhập đầy đủ thông tin.')
    } else {
        productList[indexx].id = id;
        productList[indexx].hang = hang;
        productList[indexx].name = name;
        productList[indexx].price = price;
        productList[indexx].quantity = quantity;
        sessionStorage.setItem("productListNew", JSON.stringify(productList));
        display();
        document.getElementById('maDienThoai').value = '';
        document.getElementById('ten').value = '';
        document.getElementById('hang').value = '';
        document.getElementById('gia').value = '';
        document.getElementById('quantity').value = '';
    }
    var buttons = document.querySelectorAll(".btn-edit");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    var buttons2 = document.querySelectorAll(".btn-delete");
    for (var i = 0; i < buttons2.length; i++) {
        buttons2[i].style.display = "block";
    }
}
function deleteProduct(index) {
    function cauTraLoi(answer) {
        if (answer) {
            let productList = JSON.parse(sessionStorage.getItem("productListNew"))
            productList.splice(index, 1)
            sessionStorage.setItem("productListNew", JSON.stringify(productList))
            display()}
        else{
            display()}
        var buttons = document.querySelectorAll(".btn-edit");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";}
        var buttons2 = document.querySelectorAll(".btn-delete");
        for (var i = 0; i < buttons2.length; i++) {
            buttons2[i].style.display = "block";}}
    let cauHoi = confirm('Bạn có thật sự muốn xóa sản phẩm hay không')
    cauTraLoi(cauHoi)}
