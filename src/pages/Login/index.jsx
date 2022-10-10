import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./style.module.css";

const Login = () => {

    const navigate = useNavigate();
    
    if (localStorage.getItem("token")) {
        navigate("/");
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const doSubmit = (event) => {
        event.preventDefault();
        navigate("/");
        localStorage.setItem("token", "tokenlogin");
        setEmail("");
        setPassword("");
        Swal.fire({
            title: "Berhasil Login!",
            icon: "success"
        })
    }

    return (
        <form name="loginForm" onSubmit={doSubmit}>
            <div className={styles.form_group_collection}>
                <div className={styles.form_group}>
                    <label>Email :</label>
                    <input type="email" name="email" onChange={emailChange} value={email} />
                </div>

                <div className={styles.form_group}>
                    <label>Password :</label>
                    <input type="password" name="password" onChange={passwordChange} value={password} />
                </div>
            </div>
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;