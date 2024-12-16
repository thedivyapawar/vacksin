import Hero from "../components/Hero"
import Vaccinated from "../components/Vaccinated"
import Tested from "../components/Tested"
import LatestData from "../components/LatestData"
import Map from "../components/Map"


function HomePage(){
    return(
        <>

            <Hero/>
            <Vaccinated/>
            <Tested/>
            <LatestData/>
            <Map/>

        </>
    )
}

export default HomePage