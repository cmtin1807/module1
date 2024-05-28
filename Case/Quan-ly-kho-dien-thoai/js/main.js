let product = new Product('011', "Tạ Thị Thùy", 'IPhone 6s', 'Nữ','2','https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg' );
let product1 = new Product('012','Đàm Kiều Trinh','Iphone 7','Nữ', '3','https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png');
let product2 = new Product('023','Bùi Thị Ánh','Iphone 8','Nữ','5','https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg');
let product3 = new Product('023','Bùi Thị Ánh','Iphone 9','Nữ','1','https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg');

let arr = [product, product1, product2,product3];
let manage = new ProductManagement(arr);

function addProduct(){
    let id = document.getElementById('id').value;
    let hang = document.getElementById('hang').value;
    let sanPham = document.getElementById('sanPham').value;
    let gia = document.getElementById('gia').value;
    let soLuong = document.getElementById('soLuong').value;
    let img = document.getElementById('img').value;

    let product = new Product(id,hang,sanPham,gia,soLuong,img);
    manage.addProduct(product);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('id').value = '';
    document.getElementById('hang').value = '';
    document.getElementById('sanPham').value = '';
    document.getElementById('gia').value = '';
    document.getElementById('soLuong').value = '';
    document.getElementById('img').value= '';
}

function deleteProduct(id) {
    manage.delete(id);
    manage.showList();
}

let productId = 0;
function editProduct(id){
    let product = manage.findProductById(id);
    document.getElementById('id').value = product.id;
    document.getElementById('hang').value = product.hang;
    document.getElementById('sanPham').value = product.sanPham;
    document.getElementById('gia').value = product.gia;
    document.getElementById('soLuong').value = product.soLuong;
    document.getElementById('img').value = product.img;

    productId = id;
}

function updateProduct(){
    let id = document.getElementById('id').value;
    let hang = document.getElementById('hang').value;
    let sanPham = document.getElementById('sanPham').value;
    let gia = document.getElementById('gia').value;
    let soLuong = document.getElementById('soLuong').value;
    let img = document.getElementById('img').value;

    let product = manage.findProductById(productId);
    manage.edit( id, hang, sanPham, gia, Soluong, img);
    manage.showList();
    clear();
}

manage.showList();
