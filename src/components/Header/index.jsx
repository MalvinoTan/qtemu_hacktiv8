/** Styles */
import styles from "./style.module.css";

const Header = ({ title, menus }) => {
    return (
        <header className={styles.container}>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {
                        menus.map((menu, menuIdx) => {
                            return <li key={menuIdx} className={styles.nav_item} >{menu}</li>
                        })
                    }
                </ul>
                <ul>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;