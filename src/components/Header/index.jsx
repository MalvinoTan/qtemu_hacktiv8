/** Styles */
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./style.module.css";

const Header = ({ title, menus }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
        localStorage.removeItem("token");
        Swal.fire({
            title: "Berhasil Logout!",
            icon: "success"
        })
    }
    
    return (
        <header className={styles.container}>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {
                        menus.map((menu, menuIdx) => {
                            return <li key={menuIdx} className={styles.nav_item} onClick={() => navigate(menu.path)}>{menu.name}</li>
                        })
                    }
                </ul>
                <ul>
                    {
                        !localStorage.getItem("token") ?
                            <li className={styles.login} onClick={() => navigate("/login")}>Login</li>
                            :
                            <li className={styles.login} onClick={() => handleLogout()}>Logout</li>

                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;