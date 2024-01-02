import "./Home.css";
import { Link } from "react-router-dom";
import NavAdmin from "../../components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {

    return (
        <div>
            <div class="container">
            <Navbar></Navbar>
            <section className="main">
                <div className="main-top">
                    <h1>Tổng hợp</h1>
                </div>
                <div className="main-skills">
                    <div className="card">
                        <i class="fa-solid fa-sack-dollar"></i>
                        <h3>Tổng tiền thu</h3>
                        <p>700,000 VNĐ</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        <h3>Tổng tiền chi</h3>
                        <p>700,000 VNĐ</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-piggy-bank"></i>
                        <h3>Số dư</h3>
                        <p>700,000 VNĐ</p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};
export default Home;