class Product {
    constructor (id, hang, sanPham, gia, soLuong, img) {
        this.id= id;
        this.hang= hang;
        this.sanPham= sanPham;
        this.gia= gia;
        this.soLuong= soLuong;
        this.img = img;
    }
    getID() {
        return this.id;
    }
    getHang() {
        return this.hang;
    }
    getSanPham() {
        return this.sanPham;
    }
    getGia(){
        return this.gia;
    }
    getSoLuong() {
        return this.soLuong;

    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setHang(hang) {
        this.hang=hang;
    }
    setSanPham(sanPham) {
        this.sanPham=sanPham;
    }
    setGia(gia){
        this.gia=gia;
    }
    setSoLuong(soLuong) {
        this.soLuong=soLuong;
    }
    setImg(img){
        this.img=img;
    }

    edit(id, hang, sanPham,gia, soLuong, img){
        this.id = id;
        this.hang= hang;
        this.sanPham= sanPham;
        this.gia= gia;
        this.soLuong= soLuong;
        this.img = img;
    }
}