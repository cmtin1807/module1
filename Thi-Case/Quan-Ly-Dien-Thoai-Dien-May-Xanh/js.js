class Phone {
    constructor(id, hang, name, price, quantity) {
        this.id = id;
        this.hang = hang;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }}
if (sessionStorage.getItem('productListNew') == null) {
    sessionStorage.setItem("productListNew", JSON.stringify([
        new Phone(1, 'Samsung', "Samsung Galaxy S22", 900, 5),
        new Phone(2, 'Iphone ', 'Iphone 6S', 100, 10),
        new Phone(3, 'Iphone', 'Iphone 15Pro Max', 1100, 11),
        new Phone(4, 'Samsung', "Samsung Galaxy S23", 1200, 6),
    ]))}


function timKiem() {
    let input = document.getElementById('timkiem');
    let filter = input.value.toUpperCase();
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    let filteredProducts = [];
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toUpperCase().includes(filter)) {
            filteredProducts.push(productList[i]);
        }}
    hienThiLai(filteredProducts);
}
function sortProducts() {
    let sortValue = document.getElementById('sortOptions').value;
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    productList.sort((a, b) => {
        if (a[sortValue] < b[sortValue]) return -1;
        if (a[sortValue] > b[sortValue]) return 1;
    });
    hienThiLai(productList);
}
function sortNumber() {
    let sortValue = document.getElementById('sortNumber').value;
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
// Sắp xếp sản phẩm dựa trên thuộc tính được chọn
    productList.sort((a, b) => {
        // Chuyển đổi giá trị sang kiểu số để so sánh
        let aValue = parseFloat(a[sortValue]);
        let bValue = parseFloat(b[sortValue]);
        return aValue - bValue;
    });
// Hiển thị danh sách sản phẩm đã sắp xếp
    hienThiLai(productList);
}
function hienThiLai(filteredProducts) {
    let data = `<table border="1">
    <tr>
    <th>STT</th>
    <th>ID</th>
    <th>Hãng</th>
    <th>Sản Phẩm</th>
    <th>Giá ($)</th>
<th>Số Lượng</th>
<th>Edit</th>
<th>Delete</th>
</tr>`;
    for (let i = 0; i < filteredProducts.length; i++) {
        data += `<tr>
    <td>${i + 1}</td>
    <td>${filteredProducts[i].id}</td>
    <td>${filteredProducts[i].hang}</td>
    <td>${filteredProducts[i].name}</td>
    <td>${filteredProducts[i].price}</td>
    <td>${filteredProducts[i].quantity}</td>
    <td><button class="btn-edit" style="display: none" onclick="editProduct(${i})">Edit</button> </td>
    <td><button class="btn-delete" style="display: none"  onclick="deleteProduct(${i})">Delete</button> </td>
    </tr>`;
    }
    data += `</table>`;
    document.getElementById('result').innerHTML = data;
}

