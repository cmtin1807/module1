class SanPhamManagement {
    constructor(arr) {
        this.sanPham = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.sanPham.length; i++) {
            const student = this.sanPham[i];
            table += `
            <tr>
                <td>${sanPham.id}</td>
                <td>${sanPham.hang}</td>
                <td>${sanPham.sanPham}</td>
                <td>${sanPham.gia}</td>
                <td>${sanPham.soLuong}</td>
                <td><img width="100px" height="100px" src="${sanPham.img}"></td>
                <td>
                    <button style="background-color: red; color: white" type="button" onclick="deleteSanPham(${i})">Delete</button>
                    <button style="background-color: orange; color: white" type="button" onclick="editSanPham(${i})">Edit</button>
                </td>
            </tr>
        `;
        }
        return table;

        document.getElementById('list-student').innerHTML = table;
    }

    addStudent(sanPham) {
        this.students.push(student);
    }

    delete(id) {
        this.sanPham.splice(id, 1);
    }

    findStudentById(id){
        return this.sanPham[id];
    }

    edit(student,id, fullname, date, gender, grade, img){
        student.edit(id, fullname, date,gender, grade, img);
    }

}





