class Book {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

}

if (sessionStorage.getItem('productListNew') == null) {
    sessionStorage.setItem("productListNew", JSON.stringify([new Book('Samsung', "Samsung Galaxy S22", 1000, 5),
        new Book('Iphone ', 'Iphone 6S', 100, 10),
        new Book('Iphone', 'Iphone 15Pro Max', 1100, 11)]))
}
function add() {
    id = document.getElementById('id').value
    product = document.getElementById('name').value
    price = document.getElementById('price').value
    quantity = document.getElementById('quantity').value
    if (product == '' || id == '' || price == ''||quantity ==) {
        alert('Bạn chưa nhập đầy đủ sản phẩm. Vui lòng nhập sản phẩm  cần thêm')
    } else {
        let productList = JSON.parse(sessionStorage.getItem("productListNew"));
        productList.push(new Book(id,product,price,quantity));
        document.getElementById('id').value = ''
        document.getElementById('name').value = ''
        document.getElementById('price').value = ''
        sessionStorage.setItem("productListNew", JSON.stringify(productList))
        display()
    }
}

display()

function display() {
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    console.log(productList)
    let data = `<table border="1">
    <tr>
        <th>STT</th>
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
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].quantity}</td>
        <td><button onclick="editProduct(${i})">Edit</button> </td>
        <td><button onclick="deleteProduct(${i})">Delete</button> </td>
    </tr>`

    }
    data += `</table>`
    document.getElementById('result').innerHTML = data
}

function editProduct(index) {
    let productList = JSON.parse(sessionStorage.getItem("productListNew"));
    let book = productList[index]
    document.getElementById('id').value = book.id;
    document.getElementById('name').value = book.name;
    document.getElementById('price').value = book.price;
    document.getElementById('quantity').value = book.quantity;

    display()
}

function deleteProduct(index) {
    function cauTraLoi(answer) {
        if (answer) {
            let productList = JSON.parse(sessionStorage.getItem("productListNew"))
            productList.splice(index, 1)
            sessionStorage.setItem("productListNew", JSON.stringify(productList))
            display()
        } else
            display()
    }

    let cauHoi = confirm('Bạn có thật sự muốn xóa sản phẩm hay không')
    cauTraLoi(cauHoi)
}
