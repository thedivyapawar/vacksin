import { Link } from "react-router-dom";
import logo from '../assets/images/logo-vacksin.png'
import '../assets/CSS/Navbar.css'

function Navbar(){
    return(
        <>
             <nav className="navbar navbar-expand-md ">
                <div className="container-fluid  px-md-5 py-md-2 ">
                    <Link to="/" className="navbar-link d-flex  gap-2 align-items-center">
                        <img src={logo} alt="logo" width="40px"/>
                        <Link to="/" className="navbar-link fs-5 fw-bold">vacksin</Link>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-md-auto ms-0 me-auto me-md-0 mb-2 mb-lg-0  align-items-md-center fs-6 gap-2 gap-md-4" >
                        <li className="navbar-link nav-item mt-2 mt-md-0">
                        <Link to="/" className="nav-link" saria-current="page">Home</Link>
                        </li>
                        <li className="navbar-link nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                        </li>
                        <li className="navbar-link nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                        </li><li className="nav-item">
                        <a href="tel:9090909090">
                                <button className="my-btn">
                                    Call Center
                                </button>
                        </a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>   
            
        </>
    )
}

export default Navbar;