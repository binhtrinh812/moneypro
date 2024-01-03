import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", {
                username,
                password
            })
            alert(res.data.message);
            window.location = "/Home"
        } catch (error) {
            alert(error.response.data.error);
        }
    }
    return (
        <div>
            <div className="container-login">
            <div className="login-box">
                <form action="" method="POST">
                    <input type="checkbox" className="input-check" id="input-check" />
                    <label htmlFor="input-check" className="toggle">
                        <span className="text off">off</span>
                        <span className="text on">on</span>
                    </label>
                    <div className="light" />
                    <h2>Quản Lý Chi Tiêu</h2>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail" />
                        </span>
                        <input
                            className="form-control"
                            id="inputEmail"
                            type="text"
                            name="taikhoan"
                            required=""
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                        <label htmlFor="inputEmail">Tài khoản</label>
                        <div className="input-line" />
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed" />
                        </span>
                        <input
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder=""
                            name="matkhau"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="inputPassword">Mật khẩu</label>
                        <div className="input-line" />
                    </div>
                    <button type="submit" name="login" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <div className="register-link">
                        <p>
                            Chưa có tài khoản? <Link to="/Register">Đăng ký</Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};
export default Login;