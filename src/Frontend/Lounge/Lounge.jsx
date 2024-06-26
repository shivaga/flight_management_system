import React, {useEffect} from 'react'

// imported images====>>>
import imageGrid from '../../Assets/Images-Grid2.png'

//import aos =========>>>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Lounge = () => {

    
    //useEffect to set animation duration 
    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
  


    return(
        <div className='lounge container section'>
            <div className="sectionContainer grid">
                <div data-aos='fade-down' data-aos-duration='2500' className="imgDiv">
                    <img src={imageGrid} alt=''/>
                </div>

                <div className="textDiv">
                    <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>
                        
                        <div className="grids grid">
                        
                            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                                <span className='gridTitle'>
                                    Help through the airport
                                </span>
                                <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favourite destination!
                                </p>
                            </div>

                            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                                <span className='gridTitle'>
                                    Chauffeur-drive service
                                </span>
                                <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favourite destination!
                                </p>
                            </div>

                            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                                <span className='gridTitle'>
                                Care on the flight
                                </span>
                                <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favourite destination!
                                </p>
                            </div>

                            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
                                <span className='gridTitle'>
                                    priority Boarding
                                </span>
                                <p>
                                You can also call airlines from your phone and book a flight ticket to one of your favourite destination!
                                </p>
                            </div>

                        </div>

                </div>

            
            </div>
        </div>
    )
}

export default Lounge