let sanPham = new SanPham('011', "Tạ Thị Thùy", '07/02/2002', 'Nữ','USSH112','https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg' );
let sanPham1 = new SanPham('012','Đàm Kiều Trinh','05/02/2002','Nữ', 'USSK113','https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png');
let sanPham2 = new Sanpham('023','Bùi Thị Ánh','22/01/2002','Nữ','USSL132','https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg');
let arr =[sanPham, sanPham1, sanPham2];
let manage = new SanPhamManagement(arr);

function addStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('hang').value;
    let date = document.getElementById('sanPham').value;
    let gender = document.getElementById('gia').value;
    let grade = document.getElementById('soLuong').value;
    let img = document.getElementById('img').value;

    let student = new Student(id,name,date,gender,grade,img);
    manage.addStudent(student);
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

function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let sanPhamId = 0;
function editSanPham(id){
    let student = manage.findSanPhamById(id);
    document.getElementById('id').value = sanPham.id;
    document.getElementById('hang').value = sanPham.fullname;
    document.getElementById('sanPham').value = sanPham.date;
    document.getElementById('gia').value = sanPham.gender;
    document.getElementById('soLuong').value = sanPham.grade;
    document.getElementById('img').value = sanPham.img;

    sanPhamId = id;
}

function updateSanPham(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('hang').value;
    let date = document.getElementById('sanPham').value;
    let gender = document.getElementById('gia').value;
    let grade = document.getElementById('soLuong').value;
    let img = document.getElementById('img').value;

    let student = manage.findSanPhamById(sanPhamId);
    manage.edit(student,id,hang,sanPham,gia,soLuong, img);
    manage.showList();
    clear();
}

manage.showList();
