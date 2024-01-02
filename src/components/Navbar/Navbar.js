import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="logo">
                            <i class="fa-brands fa-bitcoin"></i>
                            <span className="nav-item-logo">MoneyPro</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <i className="fas fa-home" />
                            <span className="nav-item">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Income">
                            <i className="fas fa-user" />
                            <span className="nav-item">Income</span>
                            
                        </Link>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-wallet" />
                            <span className="nav-item">Sub Income</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-chart-bar" />
                            <span className="nav-item">Base SpendingExtra</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-tasks" />
                            <span className="nav-item">Base Spending</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-cog" />
                            <span className="nav-item">Extra Spending</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fas fa-question-circle" />
                            <span className="nav-item">Saving</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/login" className="logout">
                            <i className="fas fa-sign-out-alt" />
                            <span className="nav-item" >Log out</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;