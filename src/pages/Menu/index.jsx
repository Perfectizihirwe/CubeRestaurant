import styles from "./Menu.module.css";
import { NavBar, MenuItem } from "../../components";
import { menu } from "../../utils/dataStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../features/cartSlice";

export const Menu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Menu</h1>

            <div className={styles.menuContainer}>
                {
                    menu.map((item) => {
                        return (
                            <MenuItem
                                key={item.id}
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                itemPrice={item.itemPrice}
                                image={item.image}
                                onClick={() => {
                                    dispatch(addToCart(item));
                                    navigate("/cart");
                                }}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}