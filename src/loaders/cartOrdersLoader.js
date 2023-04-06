import { getShoppingCart } from "../utilities/fakedb";

const cartLoader = async () =>{
    const productsLoaded = await fetch('products.json')
    const products = await productsLoaded.json()
    
    const storedCart = getShoppingCart();
   const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id) 
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
        
    }
    return savedCart
}


export default cartLoader