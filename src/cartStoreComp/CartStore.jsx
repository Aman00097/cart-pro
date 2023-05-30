import React, { useState } from 'react';
import Navbar from './Navbar';
import items from './products.json';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const CartStore = () => {
    const openCart = useSelector((state) => state.openCart);
    const [addCart, setAddCart] = useState([]);

    const addToCart = (item) => {
        if (!addCart.includes(item)) {
            setAddCart((oldItem) => {
                return [item, ...oldItem];
            });
        } else {
            alert('Product is already added to cart');
        }
    }

    return (
        <>
            <main>
                <Navbar addCart={addCart} />
                <div className='d-flex pt-5'>
                    <div className={openCart === false ? 'product_list p-3 pt-5 w-100' : 'product_list p-3 pt-5 w-75'}>
                        {
                            items.map((item => {
                                return (<div className="product" key={item.id}>
                                    <img src={item.image} alt="" className='w-100' />
                                    <div className="product_info p-2">
                                        <p>{item.productName}</p>
                                        <p>{item.price}/-</p>
                                        <button type="button" onClick={() => addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>)
                            }))}
                    </div>
                    <Cart addCart={addCart} setAddCart={setAddCart} />
                </div>
            </main>
        </>
    )
}

export default CartStore;
