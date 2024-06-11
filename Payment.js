import React from 'react';
import './Payment.css';
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; // Import PayPal components
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useNavigate();

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: getBasketTotal(basket).toFixed(2) // Format the total amount
                }
            }]
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
            // Save order details to Firebase
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(details.id)
                .set({
                    basket: basket,
                    amount: details.purchase_units[0].amount.value,
                    created: details.create_time
                });

            // Clear the basket
            dispatch({
                type: 'EMPTY_BASKET'
            });

            // Redirect to orders page
            history('/orders');
        });
    };

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                       
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <PayPalScriptProvider options={{ "client-id": "AY_c_Cp6reh8Skh8ckoCObdyFKCnG6VbsB_J9P2pyrGlxaCu4BvCnx0xlesuWlyItPYA3SR4KK0XE9bV" }}>
                            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
                        </PayPalScriptProvider>

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
