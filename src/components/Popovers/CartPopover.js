import React, { useEffect, useState } from 'react';
import PopoverStyles from './PopoverStyles.css';
import iconImage from './PopoverImages/delete-item-1.png'
import { Button } from "@material-tailwind/react";

function Popover({ checkoutItems, onDeleteCheckoutItems }) {

    const [items, setItems] = useState(checkoutItems);

    const handleRemoveItem = (index) => {
        const updatedItems = [...items]; // Create a copy of the array
        updatedItems.splice(index, 1); // Remove the item at the specified index
        setItems(updatedItems); // Update the state
        onDeleteCheckoutItems(updatedItems); // Notify the parent component about the update
    }

    return (
        <div className="popover">
            <ul className='ul-custom' style={{ overflow: 'auto', maxHeight: '300px', minWidth: '400px' }}>
                <h3>Checkout Items</h3>
                <hr></hr>
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <li>
                                <img src={item.image} alt={item.productName} className="product-image" />
                                {item.productName}<span style={{ fontSize: 'smaller' }}>({item.quantity})</span>: <b style={{ fontSize: 'smaller' }}>{parseFloat(item.totalPrice).toFixed(2)} $</b>
                            </li>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem(index)}> {/* Pass index to handleRemoveItem */}
                                <img src={iconImage}
                                    className='delete-icon' />
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Popover;