class ProductManagement {
    constructor(arr) {
        this.product = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.product.length; i++) {


            table += '<tr>';
            table += '<td>';
            table += this.product[i].id;
            table += '</td>';

            table += '<td>';
            table += this.product[i].hang;
            table += '</td>';

            table += '<td>';
            table += this.product[i].sanPham;
            table += '</td>';

            table += '<td>';
            table += this.product[i].gia;
            table += '</td>';

            table += '<td>';
            table += this.product[i].soLuong;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src=" '+this.product[i].img+'">';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteProduct('+i+')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editProduct('+i+')">Edit</button>' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('list-student').innerHTML = table;
    }

    addProduct(product) {
        this.product.push(product);
    }

    delete(id) {
        this.product.splice(id, 1);
    }

    findProductById(id){
        return this.product[id];
    }

    edit (product,id, hang, sanPham, gia, soLuong, img){
        product.edit(id, hang, sanPham,gia, soLuong, img);
    }

}





