const cartLoader = async () =>{
    const productsLoaded = await fetch('products.json')
    const products = await productsLoaded.json()
    console.log(products)
    return products
}


export default cartLoader