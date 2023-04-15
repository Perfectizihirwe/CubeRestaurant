import styles from './HomePage.module.css'
import Hero from '../../assets/images/heroImage.png'
import { Button, NavBar } from '../../components'
import { NavLink } from 'react-router-dom'

export const Homepage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <section className={styles.hero}>
                <img className={styles.heroImage} src={Hero} alt="hero" />
                <h1>Delicious Food, Delivered To You</h1>
                <p>
                    Choose from our selection of meals and enjoy a delicious lunch or dinner at home
                </p>
                <NavLink to="/menu">
                    <Button>
                        SEE MENU
                    </Button>
                </NavLink>
            </section>
        </div>
    )
}