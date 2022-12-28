//En este archivo tenemos el socket del lado del cliente
const socket = io()

//Defino Ids para poder localizarlos como elementos web y definir eventos
const deleteID = document.getElementById('deleteID')
const deleteBtn = document.getElementById('deleteBtn')
const prodTitle = document.getElementById('title')
const prodDescription = document.getElementById('description')
const prodCode = document.getElementById('code')
const prodPrice = document.getElementById('price')
const prodStock = document.getElementById('stock')
const prodCategory = document.getElementById('category')
//const prodStatus = document.getElementById('status')
const addBtn = document.getElementById('addBtn')
const productsDOM = document.getElementById('products')


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = prodTitle.value.trim()
    const description = prodDescription.value.trim()
    const code = prodCode.value.trim()
    const price = prodPrice.value.trim()
    const stock = prodStock.value.trim()
    const category = prodCategory.value.trim()
    //const status = prodStatus.value.trim()
    if(title.length > 0 && description.length > 0 && price.length > 0 && code.length > 0 && stock.length > 0 && category.length > 0) {
        socket.emit('addProduct', {title, description, code, price, status: true, stock, category, thumbnails: [] })
    }
})

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    socket.emit('deleteProduct', {id: deleteID.value})
})

socket.on('showProducts', data => {
    let products = ''
    data.forEach(product => {
        products += `<div>
        <p>ID: ${product.id}</p>
        <p>Title: ${product.title}</p>
        <p>Price: $${product.price}</p>
        <br>
    </div>`
    })
    productsDOM.innerHTML = products
})