import styles from './MenuItem.module.css'
import { Button } from '../Button'

export const MenuItem = ({ itemName, itemDescription, itemPrice, image, onClick, type }) => {
    return (
        <div className={styles.menuItem}>
            <img className={styles.image} src={image} alt="menu item" />
            <div>

                <h4>{itemName}</h4>
                <p>{itemDescription}</p>
                <p>RWF {itemPrice}</p>
                <Button onClick={onClick}>{type == "cart" ? "Checkout" : "Add to Cart"}</Button>
            </div>
        </div>
    )
}