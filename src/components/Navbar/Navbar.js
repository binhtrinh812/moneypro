import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home" className="logo">
                            <i class="fa-brands fa-bitcoin"></i>
                            <span className="nav-item-logo">MoneyPro</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Home" >
                            <i className="fas fa-home" />
                            <span className="nav-item">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fas fa-user" />
                            <span className="nav-item">Income</span>
                        </Link>
                        <ul className="navDropdown">
                            <li><Link to="/IncomeType">InCome Type</Link></li>
                            <li><Link to="/IncomeLog">Income Log</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fas fa-wallet" />
                            <span className="nav-item">Sub Income</span>
                        </Link>
                        <ul className="navDropdown">
                            <li><Link to="/SubIncomeType">InCome Type</Link></li>
                            <li><Link to="/SubIncomeLog">Income Log</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fas fa-chart-bar" />
                            <span className="nav-item">Base Spending</span>
                        </Link>
                        <ul className="navDropdown">
                            <li><Link to="/BaseSpendingCoS">Category of Spending</Link></li>
                            <li><Link to="/BaseSpendingEx">Expenditures</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fas fa-tasks" />
                            <span className="nav-item">Extra Spending</span>
                        </Link>
                        <ul className="navDropdown">
                        <li><Link to="/ExtraSpendingCoS">Category of Spending</Link></li>
                            <li><Link to="/ExtraSpendingEx">Expenditures</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">
                            <i className="fas fa-cog" />
                            <span className="nav-item">Saving</span>
                        </Link>
                        <ul className="navDropdown">
                            <li><Link to="/SavingET">Economical Type</Link></li>
                            <li><Link to="/Savings">Savings</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="SandR">
                            <i className="fas fa-question-circle" />
                            <span className="nav-item">Statistic, Report</span>
                        </Link>
                        <ul className="navDropdown">
                            <li><Link to="/Date">Date</Link></li>
                            <li><Link to="/Month">Month</Link></li>
                            <li><Link to="/Year">Year</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/" className="logout">
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