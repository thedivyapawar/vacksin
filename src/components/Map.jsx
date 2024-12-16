import mapimage from "../assets/images/map-image.png"

function Map(){
    return(
        <>
            <div className="row justify-content-center mt-5 bg-white rounded-4">
                <div className="col-md-12 text-center pt-5">
                    <p className="fs-2 my-color fw-bold">Covid-19 Distribution Map</p>
                    <p className="fs-5 hero-subtext">Below is a map of the distribution of covid-19<br></br>cases</p>
                    <img src={mapimage} alt="Map" className="w-100 rounded-4"/>
                </div>
            </div>
        </>
    )
}

export default Map;