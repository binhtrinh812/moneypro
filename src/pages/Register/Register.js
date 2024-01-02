import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password && username && name) {
      try {
        const res = await axios.post("http://localhost:5000/register", {
          username,
          name,
          password,
        });
        alert(res.data.message);
        window.location = '/login';
      } catch (error) {
        alert(error.response.data.error);
      }

    }
  };

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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" name="singup" onClick={handleSignup}>
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
