import '../assets/CSS/LatestData.css'

function LatestData(){
    return(
        <>
            <div className="row justify-content-center my-4 px-2">
                <div className="col-12 col-md-10 latest-data">
                    <h4 className="fs-2 text-center py-md-4">The following is the latest data related to  <br className='d-none d-lg-block'/>Covid-19</h4>
                    <div className="row justify-content-evenly mt-5">
                        <div className="col-3 border-end text-center py-3 ">
                            <p className="fs-5 fs-md-2 lh-1 fw-bold">125 K <br /> <span className="fs-6 fw-normal">Patient recover</span></p>
                        </div>
                        
                        <div className="col-3 border-end text-center py-3">
                            <p className="fs-5 fs-md-2 lh-1 fw-bold">92 K <br /> <span className="fs-6 fw-normal ">Patient Treatment</span></p>
                        </div>

                        <div className="col-3 border-end text-center py-3">
                            <p className="fs-5 fs-md-2 lh-1 fw-bold">25 K <br /> <span className="fs-6 fw-normal">Patient quarantine</span></p>
                        </div>

                        <div className="col-3 text-center py-3">
                            <p className="fs-5 fs-md-2 lh-1 fw-bold">12 K<br /> <span className="fs-6 fw-normal ">Hospital Active</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestData;