import fs from 'fs'
 
class CartManager{


    //Constructor, se crea con un array de carrito vacio
    constructor(path){
        this.carts=new Array();
        this.patch = path
        this.format = 'utf-8';
    }

    getNextID = async() => {  
 
        let size = this.carts.length
        return size > 0 ? this.carts[size-1].id + 1 : 1 

    }


     getCarts = async () => {
        try{
            let content=await fs.promises.readFile(this.path,this.format)
            this.carts = JSON.parse(content)
            return this.carts
        }
        catch(err){
            return "Carts not found"
        }
        
    }
       
    
     async addCart(){
        await this.getCarts()
        const newCart={
            id: this.getNextId(),  //El id del carrito
            products: new Array()  //Nuevo array de productos del mismo
        }
        return (this.carts.push(newCart), await fs.promises.writeFile(this.path, JSON.stringify(this.carts)), newCart)
    }
 
    
  
    getCartById = async (id) => {
        await this.getCarts()
        return this.carts.find(cart => cart.id == id) || "Cart Id not found";
        
    }
    
    addProductById = async (cartId,productId,quantity) => {
        const cart = await this.getCartById(cartId) 
        const product = cart.products?.find(product => product.product == productId)
        if (!product) cart.products?.push({product: productId, quantity: quantity})
        else product.quantity += quantity
        return (await fs.promises.writeFile(this.path, JSON.stringify(this.carts)),cart)
        
    }

    
}

 
export default CartManager
 
  