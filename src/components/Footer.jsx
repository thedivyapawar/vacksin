import '../assets/CSS/Footer.css'
import logo from '../assets/images/logo-vacksin.png'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <>
            <div className="row text-white justify-content-center px-2 " style={{backgroundColor :'#242527'}}>
                <div className="col-md-8 my-5 d-flex flex-column align-items-center justify-content-center py-5 text-white rounded-5 my-linear-bg">
                    <p className="fs-2 text-center fw-bold">Get a vaccine invitation</p>
                    <p className="text-center">Drop your email to get vaccine invitation</p>

                    <div className="footer-form">
                        <input type="email" placeholder="Enter your email"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
            <div className="row justify-content-center align-items-center text-white" style={{backgroundColor :'#242527'}}>

                <div className="col-md-5 ">

                    <div className="row justify-content-between align-items-center mb-3 mb-md-0" >

                    <div className="col-12 col-md-4 d-flex gap-2 align-items-center justify-content-start mb-4 mb-md-0 ">
                        <img src={logo} alt="logo" width="50px" />
                        <div className='fs-5 main-color fw-bold'>vacksin</div>
                    </div>

                    <div className=" col-12 col-md-6 d-flex gap-5 gap-md-5 justify-content-around justify-content-md-center align-items-center">
                        <Link to="/"  className='footer-link'>Home</Link>
                        <Link to="/about" className='footer-link'>About</Link>
                        <Link to="/contact" className='footer-link'>Contact</Link>
                    </div>

                    </div>
                </div>


                <div className="col-12 col-md-5 d-flex gap-5 justify-content-around justify-content-md-end fs-4 mt-3 mt-md-0 ">
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-youtube' ></i>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-linkedin-square' ></i>
                    <i class='bx bxl-facebook-square' ></i>
                </div>


                <div className="col-md-12 text-center text-white my-5 d-flex flex-column align-items-center">
                <a href="https://www.linkedin.com/in/heydivyapawar/" className='fs-6 nav-link' target='_blank'>
                <span>Developed by</span>
                <span className='main-color ps-2'>Divya Pawar</span>
                <i className='bx bx-right-arrow-alt ms-2 fs-5'></i>
            </a>
            </div>

            </div>

            
        </>
    )
}

export default Footer;