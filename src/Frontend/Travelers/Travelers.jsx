import React, {useEffect} from 'react'

// imported Destination Images 
import paris from '../../Assets/paris.jpg'

// imported Travelers Images 
import Traveler1 from '../../Assets/user1.jpg'

//import aos =========>>>
import Aos from 'aos'
import 'aos/dist/aos.css'


// we are going to use high order array methos called Map to display all the data

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage:Traveler1,
        travelerName:'Isratech',
        socialLink:'@isratech8'
    },
    {
        id: 2,
        destinationImage: paris,
        travelerImage:Traveler1,
        travelerName:'Isratech',
        socialLink:'@isratech8'
    },
    {
        id: 3,
        destinationImage: paris,
        travelerImage:Traveler1,
        travelerName:'Isratech',
        socialLink:'@isratech8'
    },
    {
        id: 4,
        destinationImage: paris,
        travelerImage:Traveler1,
        travelerName:'Isratech',
        socialLink:'@isratech8'
    }
]

const Travelers = () => {

    
    //useEffect to set animation duration 
    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
  

    return(
        <div className='travelers container section'>
          <div className="sectionContainer">
              <h2 data-aos='fade-down' data-aos-duration='2500'>
                Top travelers of this month!
              </h2>

              

              <div className="travelersContainer grid">
                   
                 {
                    travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
                        return(
                            <div data-aos='fade-up' data-aos-duration='2500'key={id} className="singleTraveler">
                            <img src={destinationImage} alt='' className='destinationImage'/>
                            <div className="travelerDetails">
                                <div className="travelerPicture">
                                    <img src={travelerImage} alt='' className='travelerImage' />
                                </div>
                                <div className="travelerName">
                                    <span>{travelerName}</span>
                                    <p>{socialLink}</p> 
                                </div>
                            </div>
                          </div>
                        )
                    })
                 }
               
                  

              </div>
            </div> 
        </div>
    )
}

export default Travelers