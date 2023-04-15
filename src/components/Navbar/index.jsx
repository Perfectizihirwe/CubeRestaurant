import styles from './NavBar.module.css';
import Logo from '../../assets/images/cubeLogo.png'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import { useState } from 'react';

export const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false)

  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.extendedNav}>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      {mobileNav && (
        <div className={styles.mobileNav}>
          <ul>
            <li className={styles.navigationItemMobile}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className={styles.navigationItemMobile}>
              <Link to="/cart">Cart</Link>
            </li>
            <li className={styles.navigationItemMobile}>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
      {mobileNav ? (
        <div
          onClick={() => {
            handleMobileNav();
          }}
          className={styles.mobileMenuButton}
        >
          <IoCloseSharp className={styles.mobileMenuIcon} />
        </div>
      ) : (
        <div
          onClick={() => {
            handleMobileNav();
          }}
          className={styles.mobileMenuButton}
        >
          <FaBars className={styles.mobileMenuIcon} />
        </div>
      )}
    </div>
  );
};
