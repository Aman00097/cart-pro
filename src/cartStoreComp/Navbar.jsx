import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = ({ addCart }) => {
    const cartIcon = useSelector((state) => state.openCart);
    const dispatch = useDispatch();

    const openCart = (e) => {
        let products = document.querySelectorAll('.product');

        if (e.target.classList.contains('fa-times')) {
            dispatch({ type: 'CLOSE_CART' });
            products.forEach(product => {
                product.style.width = 'calc((100%/4) - 20px)';
            });
        } else {
            dispatch({ type: 'OPEN_CART' });
            products.forEach(product => {
                product.style.width = 'calc((100%/3) - 20px)';
            });
        }
    }
    return (
        <nav className="navbar w-100 flex px-5 bg-dark shadow-lg position-fixed">
            <h1 className='text-danger'>Shop</h1>
            <i class={cartIcon === true ? "fas fa-times text-danger" : "fas fa-shopping-cart text-danger"} onClick={openCart}></i>
            <div className={!cartIcon ? 'product_count d-block' : 'product_count d-none'}>{addCart.length}</div>
        </nav>
    )
}

export default Navbar
