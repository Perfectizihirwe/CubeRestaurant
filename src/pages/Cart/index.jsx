import styles from "./Cart.module.css";
import { NavBar, MenuItem, Button } from "../../components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Cart = () => {
    const navigate = useNavigate();
    const { cart } = useSelector((state) => state.cart);
    const [checkout, setCheckout] = useState(false);
    const [deliveryType, setDeliveryType] = useState('standard');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const handleDeliveryTypeChange = (event) => {
        setDeliveryType(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleDeliveryAddressChange = (event) => {
        setDeliveryAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (deliveryType == "delivery" && deliveryAddress == "") {
            alert("Please enter delivery address");
            return;
        }
        if (mobileNumber == "") {
            alert("Please enter mobile number");
            return;
        }
        if (!(/^\d{10}$/.test(mobileNumber))) {
            alert("Please enter valid mobile number");
            return;
        }
        if (email == "") {
            alert("Please enter email");
            return;
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            alert("Please enter valid email");
            return;
        }
        alert("Order placed successfully");
        navigate("/");
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Items in your cart</h1>
            {
                cart.length == 0 && (
                    <div className={styles.emptyCart}>
                        <h3>Your cart is empty</h3>
                        <Link to="/menu">
                            <Button>Go to Menu</Button>
                        </Link>
                    </div>)
            }
            <div className={styles.menuContainer}>
                {
                    cart.map((item) => {
                        return (
                            <MenuItem
                                key={item.id}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                itemPrice={item.itemPrice}
                                image={item.image}
                                type={"cart"}
                                onClick={() => {
                                    setCheckout(true);
                                }}
                            />
                        );
                    })
                }
            </div>
            {
                checkout && (<form className={styles.form} onSubmit={handleSubmit}>
                    <label>
                        Order Type:
                        <select className={styles.selector} value={deliveryType} onChange={handleDeliveryTypeChange}>
                            <option value="takeout">TakeOut</option>
                            <option value="delivery">Delivery</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Mobile Number:
                        <input className={styles.input} type="text" value={mobileNumber} onChange={handleMobileNumberChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input className={styles.input} type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <br />
                    {
                        deliveryType == "delivery" && (
                            <label>
                                Delivery Address:
                                <input className={styles.input} type="text" value={deliveryAddress} onChange={handleDeliveryAddressChange} />
                            </label>
                        )
                    }

                    <br />
                    <button type="submit">Pay</button>
                </form>)
            }
        </div >
    );
}