class Store {
    listProduct;
    name;

    constructor(nameInput) {
        this.name = nameInput;
        this.listProduct = [];
        let sp1 = new Product(1, "Banh mi", 2000, "data:image/jpeg;base64,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");
        this.listProduct.push(sp1);
    }

    add(newProduct) {
        this.listProduct.push(newProduct);
    }
}