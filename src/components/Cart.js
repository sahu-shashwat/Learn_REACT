
import { UseSelector, useDispatch, useSelector } from "react-redux"
import {clearCart} from '../utils/cartSlice'
import ItemList from './ItemList'
import { useDispatch } from "react-redux"
const Cart =()=>{
   
    const CartItems=useSelector((store)=>store.cart.items)
    
    const dispatch =useDispatch();
    
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text 2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >
                    Calear Cart
                </button>
                {CartItems.length ===0 && (
                    <h1>Cart is Empty. Add items to the Cart</h1>
                )}
                <ItemList items={CartItems}/>
            </div>
        </div>
    )
}
export default Cart