display()

function display() {
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    console.log(productList)
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
    for (let i = 0; i < productList.length; i++) {
        data += `   <tr>
    <td>${i + 1}</td>
    <td>${productList[i].id}</td>
    <td>${productList[i].hang}</td>
    <td>${productList[i].name}</td>
    <td>${productList[i].price}</td>
    <td>${productList[i].quantity}</td>
    <td><button class="btn-edit" style= " display: none" onclick="editProduct(${i})">Edit</button> </td>
    <td><button class="btn-delete" style= " display: none"  onclick="deleteProduct(${i})">Delete</button> </td>
    </tr>`
    }
    data += `</table>`
    document.getElementById('result').innerHTML = data
}
