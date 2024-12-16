import heroimg from "../assets/images/hero-image.jpg"
import '../assets/CSS/Hero.css'

function Hero(){
    return(
        <>
            <div className="row justify-content-center align-items-center flex-wrap-reverse px-4">

                <div className="col-md-5 py-4">
                    <span className="gap-2 injection-box" >
                    <i className='bx bx-injection text-warning fs-5'></i>
                    <span className=""> don't be upset , let's get vaccinated</span>
                    </span>

                    <p className="fw-bold my-3 hero-text">With Vaccination <br /> We Can End This <br /> Pandemic</p>
                    <p className="fs-6 hero-subtext">With vaccination, we can reduce the number of cases of Covid-19 transmission, and can create herd immunity</p>
                    <button className="my-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Make Appointment</button>
                </div>

                <div className="col-md-5">
                    <img src={heroimg} alt="hero-img" className='img-fluid rounded-5'/>
                </div>

            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Make an Appointment</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="email" className="form-control name-input" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Choose Date</label>
                <input type="date" className="form-control date-input" id="exampleFormControlTextarea1" placeholder="DD-MM-YYYY"/>
                </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary rounded-5" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn my-btn">Book</button>
                </div>
                </div>
            </div>
            </div>

           
        </>
    )
}

export default Hero