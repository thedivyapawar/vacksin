import '../assets/CSS/vaccinated.css'

function Vaccinated(){
    return(
        <>
            <div className="row justify-content-center mt-5  align-items-center px-4">
                <div className="col-md-8 text-center">
                    <p className="fs-2 my-color fw-bold">Why do you have to <br /> vaccinate?</p>
                </div>
                <div className="col-md-8 text-center">
                    <p className="hero-subtext fs-6">
                    There are three important reasons why you should vaccinate, which we describe as follows: 
                    </p>

                </div>
            </div>

            <div className="row justify-content-center align-items-end p-3">
                <div className="col-md-3 text-white vaccine-card-1">

                   <span className="px-2 pt-4 pb-1 border rounded-4 bg-white">
                   <i className='bx bx-shield-quarter text-primary fs-1'></i>
                   </span>

                   <p className="fs-5 mt-4 fw-bold">
                   Build immunity against <br /> viruses

                   </p>

                   <p className="fs-6 fw-lighter">
                   Vaccination strengthens your immune system by teaching it to recognize and fight viruses effectively, reducing <br /> the risk of illness.
                   </p>

                   <p className="d-flex align-items-center">
                    <span className="fs-6">Read More</span>
                    <i className='bx bx-right-arrow-alt'></i>
                   </p>

                </div>

                <div className="col-md-3 vaccine-card-2">

                    <span className="px-2 pt-4 pb-1 border rounded-4 bg-white">
                    <i className='bx bx-male-female text-primary fs-1'></i>
                    </span>

                    <p className="fs-5 mt-4 fw-bold">
                    Build herd immunity <br /> viruses
                    </p>

                    <p className="d-flex align-items-center">
                    <span className="fs-6">Read More</span>
                    <i className='bx bx-right-arrow-alt'></i>
                    </p>

                </div>
                
                <div className="col-md-3 vaccine-card-2">

                    <span className="px-2 pt-4 pb-1 border rounded-4 bg-white">
                    <i className='bx bxs-virus text-primary fs-1'></i>
                    </span>

                    <p className="fs-5 mt-4 fw-bold">
                    Low levels of virus  <br />
                    exposure 
                    </p>

                    <p className="d-flex align-items-center">
                    <span className="fs-6">Read More</span>
                    <i className='bx bx-right-arrow-alt'></i>
                    </p>

                </div>


            </div>
        </>
    )
}

export default Vaccinated;