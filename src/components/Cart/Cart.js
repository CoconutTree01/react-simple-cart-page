import CartStyles from './CartStyles.css';
import cartItems from './CartItemsData';
import { useState, useEffect } from 'react';
import Checkout from '../Checkout/Checkout';
import shoppingCartImage from './CartImages/shoppingCartImage.png'
import CartPopover from '../Popovers/CartPopover';

const Cart = () => {

    const [items, setCartItems] = useState(cartItems);
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleIncrement = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
    };

    const handleDecrement = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 0) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
        }
    };

    const handleAddToCheckout = (item) => {
        const itemTotalPrice = item.quantity * item.price;
        const newItem = {
            productName: item.productName,
            totalPrice: itemTotalPrice,
            quantity: item.quantity,
            image: item.image
        };
        setCheckoutItems([...checkoutItems, newItem]); // Add new item to checkout items array
        setIsPopoverOpen(false);
    };

    const togglePopover = () => {
        if (checkoutItems.length > 0) {
            setIsPopoverOpen(!isPopoverOpen);
        }
    };

    useEffect(() => {
        checkoutItems.length > 0 ? setIsPopoverOpen(true) : setIsPopoverOpen(false);
    }, [checkoutItems]);

    const handleQuantityChange = (value, index) => {
        const newQuantity = [...cartItems];
        newQuantity[index].quantity = value;
    };
    return (
        <>
            <section>
                {items.map((item, index) => (
                    <section className="cart-item" key={index}>
                        <section>
                            <div className="cart-header">
                                <img src={item.image} alt={item.productName} className="product-image" />
                                <h4>{item.productName}</h4>
                            </div>
                            <div className="product-details">
                                <p>{item.productDescription}</p>
                            </div>
                        </section>
                        <section className="price-section">
                            <div >
                                <p>${parseFloat(item.price).toFixed(2)}</p>
                            </div>
                            <div className="counter">
                                <button onClick={() => handleDecrement(index)}>-</button>
                                <input 
                                type="text" 
                                defaultValue={item.quantity}
                                style={{ width: "30px" }} 
                                onChange={(e) => {
                                    const { value } = e.target;
                                    if (!isNaN(value) && value >= 0) {
                                        items[index].quantity = value;
                                    }
                                }}
                            />
                                <button onClick={() => handleIncrement(index)}>+</button>
                            </div>
                            <button className="add-button" onClick={() => handleAddToCheckout(item)}>Add</button>
                        </section>
                    </section>
                ))}
                {isPopoverOpen &&
                    <div className="checkout-popover">
                        <CartPopover checkoutItems={checkoutItems} onDeleteCheckoutItems={(updatedArray) => { setCheckoutItems(updatedArray) }} className="checkout-popover" />
                    </div>}
                <section className="cart-logo-container" onClick={togglePopover}>
                    <img src={shoppingCartImage} className="cart-logo" />
                    <div className='cart-length'>{checkoutItems.length}</div>
                </section>

                <div className="checkout-container" style={{ visibility: "hidden" }}>
                    <Checkout />
                </div>
            </section>
            <footer className="checkout-section">
                <p>Total: {parseFloat(checkoutItems.reduce((total, item) => total + item.totalPrice, 0)).toFixed(2)}</p>
                <button>Checkout</button>
            </footer>
        </>
    );
};

export default Cart;