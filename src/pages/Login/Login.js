import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {

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
                        />
                        <label htmlFor="inputPassword">Mật khẩu</label>
                        <div className="input-line" />
                    </div>
                    <button type="submit" name="login">
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