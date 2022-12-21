import fs from 'fs'
 
class CartManager{


    //Constructor, se crea con un array de carrito vacio
    constructor(path){
        this.carts=new Array();
        this.path = path
        this.format = 'utf-8';
    }

    getNextID = async() => {  
 
        const data = await this.getCarts()
        const count = data.length //Cantidad de registros
        if (count == 0) return 1; //Si no hay productos  el id es 1
        const lastCart= data[count - 1] //Accedo al ultimo elemento
        const lastID = lastCart.id //Obtengo su id
        const nextID = lastID + 1
        return nextID

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
       
    
      addCart = async() => {
        await this.getCarts()
        let nextId = await this.getNextID()
        const newCart={
            id: nextId,  
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
 
  