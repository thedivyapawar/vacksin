import covidvaccine from "../assets/images/covid-vaccine.png"
import '../assets/CSS/Hero.css'

function Tested(){
    return(
        <>
            <div className="row justify-content-center align-items-center flex-wrap-reverse px-4">
            
                <div className="col-md-5 py-4">
                    
                    <p className="fw-bold my-3 fs-3 hero-text">We provide vaccines that <br />have been clinically  <br />tested
                    </p>

                    <p className="fs-6 hero-subtext">Don't be afraid to get vaccinated, because we have tested <br />the vaccine in stages and in detail
                    </p>

                    <div className="row justify-content-between mt-4">
                        <div className="col-5">
                            <span className="px-2 pt-3 pb-2 rounded-3 my-bg-color">
                            <i className='bx bx-injection bx-rotate-270 text-primary fs-3' ></i>
                            </span>
                            <p className="fs-6 hero-subtext pt-3">
                            Vaccines that have been tested by several experimental animals

                            </p>
                        </div>

                        <div className="col-5">
                            <span className="px-2 my-bg-color pt-3 pb-2 rounded-3">
                            <i className='bx bxs-capsule bx-rotate-270 text-primary fs-3'></i>
                            </span>
                            <p className="fs-6 hero-subtext pt-3 ">
                            Vaccine that has been tested in a lab step by step and in detail
                            </p>
                        </div>
                    </div>

                    
                    
                </div>

                <div className="col-md-5">
                    <img src={covidvaccine} alt="hero-img" className='img-fluid rounded-5'/>
                </div>
            
            </div>
        </>
    )
}

export default Tested;