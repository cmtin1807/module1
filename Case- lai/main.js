
if (sessionStorage.getItem('listDienThoaiMoi') == null){
    sessionStorage.setItem("listDienThoaiMoi", JSON.stringify([
        new Dienthoai(1, 'Samsung', "Samsung Galaxy S22", 900, 5),
        new Dienthoai(2, 'Iphone ', 'Iphone 6S', 100, 10),
        new Dienthoai(3, 'Iphone', 'Iphone 15Pro Max', 1100, 11),
        new Dienthoai(4, 'Samsung', "Samsung Galaxy S23", 1200, 6),
    ]))}
let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
display(listDienThoai)

function display(listDienThoai) {
    console.log(listDienThoai)
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
</tr>`
    for (let i = 0; i < listDienThoai.length; i++) {
        data += `   <tr>
    <td>${i + 1}</td>
    <td>${listDienThoai[i].id}</td>
    <td>${listDienThoai[i].hang}</td>
    <td>${listDienThoai[i].tenDienThoai}</td>
    <td>${listDienThoai[i].gia}</td>
    <td>${listDienThoai[i].soLuong}</td>
    <td><button class="btn-edit" style= " display: none" onclick="editDienThoai(${i})">Edit</button> </td>
    <td><button class="btn-delete" style= " display: none"  onclick="deleteDienThoai(${i})">Delete</button> </td>
    </tr>`
    }
    data += `</table>`
    document.getElementById('result').innerHTML = data
}
function timKiem() {
    let input = document.getElementById('timKiem');
    let filter = input.value.toUpperCase();
    let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    let filteredDienThoai = [];
    for (let i = 0; i < listDienThoai.length; i++) {
        if (listDienThoai[i].tenDienThoai.toUpperCase().includes(filter)) {
            filteredDienThoai.push(listDienThoai[i]);
        }
    }
    display(filteredDienThoai);
}

function sortName() {
    let sortValue = document.getElementById('sortName').value;
    let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    listDienThoai.sort((a, b) => {
        let aValue = a[sortValue].toUpperCase();
        let bValue = b[sortValue].toUpperCase();
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
    display(listDienThoai);
}
function sortNumber() {
    let sortValue = document.getElementById('sortNumber').value;
    let listDienThoai = JSON.parse(sessionStorage.getItem("listDienThoaiMoi"));
    listDienThoai.sort((a, b) => {
        let aValue = parseFloat(a[sortValue]);
        let bValue = parseFloat(b[sortValue]);
        return aValue - bValue;
    });
    display(listDienThoai);
}


