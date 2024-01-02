import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div>
            <div className="container-register">
                <div className="login-box">
                    <form action="" method="POST">
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
                                placeholder=""
                                name="hoten"
                                required=""
                            />
                            <label htmlFor="inputEmail">Họ và Tên</label>
                            <div className="input-line" />
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail" />
                            </span>
                            <input
                                className="form-control"
                                id="inputEmail"
                                type="text"
                                placeholder=""
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
                        <button type="submit" name="singup">
                            Đăng ký
                        </button>
                        <div className="register-link">
                            <p>
                                Đã có tài khoản? <Link to="/">Đăng nhập</Link>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};
export default Register;