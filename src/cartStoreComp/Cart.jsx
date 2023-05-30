import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = ({ addCart, setAddCart }) => {
    const displayCart = useSelector((state) => state.openCart);
    // const count = useSelector((state) => state.count);
    const [count, setCount] = useState([{ id: '', count: 0 }]);
    // const dispatch = useDispatch();
    // console.log(count);

    setAddCart((oldItem) => {
        return [{ count: count, ...oldItem }];
    });

    const productIncrDecr = (id, quantity) => {
        addCart.filter(product => {
            // if (quantity === 'increment' && product.id === id) {
            //     dispatch({ type: 'INCREMENT', payload: id });
            // } else if (quantity === 'decrement' && product.id === id) {
            //     dispatch({ type: 'DECREMENT' });
            // }

            if (quantity === 'increment' && product.id === id) {
                setCount((oldItem) => {
                    return [{ count: count + 1, id: id }, ...oldItem];
                });
            } else if (quantity === 'decrement' && product.id === id) {
                setCount((oldItem) => {
                    return [{ count: count - 1, id: id }, ...oldItem];
                });
            }
        });
    }

    return (
        <div className={displayCart ? 'cart bg-dark w-25 p-3 pt-5 d-block' : 'cart bg-dark w-25 p-3 pt-5 d-none'}>
            {
                addCart.map(product => {
                    return (
                        <div className='cart_product d-flex bg-white mb-1' key={product.id}>
                            <img src={product.image} alt="" />
                            <div className='w-75'>
                                <p>{product.productName}</p>
                                <p>Rs {product.price}/-</p>
                                <div className='d-flex'>
                                    <p>Quantity: </p>
                                    <div className='ms-2 w-25 d-flex justify-content-between'>
                                        <button onClick={() => productIncrDecr(product.id, 'increment')}><i class="fas fa-plus"></i></button>
                                        <span>{count}</span>
                                        <button onClick={() => productIncrDecr(product.id, 'decrement')}> <i class="fas fa-minus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Cart;
