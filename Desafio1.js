class ProductManager{

    //Constructor
    product(){
        this.product = []
    
    }

    addProduct(title,description,price,thubmail,code,stock){  //Metodo


    const product = {
        id, //Hacer autoincrementable
        title,
        description,
        price,
        thubmail,
        code, //Validar que no se repita cuando se cree un producto
        stock,
        }

        this.getProduct.push(product)   
    }

    //Getter y setters

     getProduct = () => {return product}

    getProductById = (id) => {
          
        return product.find(produc.id === id)   }

}


