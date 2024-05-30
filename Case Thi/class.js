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

