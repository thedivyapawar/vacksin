import doctorimg from "../assets/images/doctor-img.png"
import '../assets/CSS/Hero.css'

function AboutSection(){
    return(
        <>
     <div className="row justify-content-center align-items-center px-4 mt-5">
            

             <div className="col-md-4 me-4">
                <img src={doctorimg} alt="hero-img" className='img-fluid rounded-5'/>
            </div>

            <div className="col-md-6 py-4 ms-4">
                
                <p className="fw-bold 6y-3 fs-3 hero-text">ABOUT US
                </p>

                <p className="fs-6 hero-subtext">At <span className="fw-bold" style={{color:"#2b9cec"}}>Vacksin</span> we are committed to protecting communities and putting an end to the COVID-19 pandemic. Our mission is to provide safe and effective vaccines that have been rigorously tested and scientifically proven to reduce virus transmission and build herd immunity
                </p>

                <p className="fw-bold my-3 fs-5 hero-text my-4">Our Commitment to Safety and Quality
                </p>

                <div className="row justify-content-between mt-4">

                <div className="col-6">
                        <span className="px-2 pt-3 pb-2 rounded-3 my-bg-color mx-2 my-4">
                        <i className='bx bx-search-alt main-color fs-3 me-2 ' ></i>
                        </span>

                        <span className="px-2 pt-3 pb-2 rounded-3 my-bg-color my-2 d-none d-md-inline-block">
                        <span className="fs-6 main-color mt-4 fw-bold">Through Research </span>
                        </span>
                        
                        <p className="fs-6 hero-subtext pt-3 ">
                        We follow a detailed, step-by-step development process, starting with laboratory research and testing on experimental models

                        </p>
                    </div>

                    <div className="col-6">
                        <span className="px-2 pt-3 pb-2 rounded-3 my-bg-color mx-2 my-2">
                        <i className='bx bx-injection main-color fs-3 me-2 ' ></i>
                        </span>

                        <span className="px-2 pt-3 pb-2 rounded-3 my-bg-color my-2 d-none d-md-inline-block">
                        <span className="fs-6 main-color mt-4 fw-bold">Clinically Tested Vaccines </span>
                        </span>
                        
                        <p className="fs-6 hero-subtext pt-3 ">
                        All our vaccines undergo comprehensive clinical trials to ensure safety and efficacy

                        </p>
                    </div>

                    

                    
                </div>

                
                
            </div>

        
        </div>
        </>
    )
}

export default AboutSection;