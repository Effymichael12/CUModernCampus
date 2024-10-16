import React from 'react'

function Departments() {
  return (
    <div className='departments'>
      <h1> Our Departments</h1>
      <div className='div-seperator'>

        <div className='top-section'>

          <div className='department-div'>
            <h2 className='dpmt-div-title'> Maintenance</h2>
            <p className='dpmt-div-text'>The Maintenance team ensures the upkeep and functionality of all campus facilities, handling repairs, system updates, and preventive maintenance across 75+ buildings.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='main-1.webp' className='left-img' alt='left-img'></img>
                <img src='main-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='main-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>

          <div className='department-div'>
            <h2 className='dpmt-div-title'> Custodial</h2>
            <p className='dpmt-div-text'>Custodial Services maintains cleanliness and sanitation across over 895,000 square feet of campus, ensuring a welcoming and healthy environment for students, staff, and visitors.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='cus-1.webp' className='left-img' alt='left-img'></img>
                <img src='cus-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='cus-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>

          <div className='department-div'>
            <h2 className='dpmt-div-title'> Grounds</h2>
            <p className='dpmt-div-text'>The Grounds team manages the landscaping and maintenance of all outdoor spaces, creating an aesthetically pleasing and environmentally sustainable campus environment.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='grd-1.jpeg' className='left-img' alt='left-img'></img>
                <img src='grd-2.jpeg' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='grd-3.jpeg' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>



        </div>

        <div className='bottom-section'>
           
        <div className='department-div'>
            <h2 className='dpmt-div-title'> Transportation</h2>
            <p className='dpmt-div-text'>Transportation Services manages campus shuttles, vehicle maintenance, and transportation logistics, ensuring safe and efficient travel for students, staff, and faculty.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='trs-1.jpeg' className='left-img' alt='left-img'></img>
                <img src='trs-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='trs-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>

          <div className='department-div'>
            <h2 className='dpmt-div-title'> Event Set-Up</h2>
            <p className='dpmt-div-text'>The Event Set-Up team facilitates the physical arrangement of spaces for university events, from small meetings to large-scale conferences and ceremonies, ensuring seamless preparation and breakdown.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='evn-1.webp' className='left-img' alt='left-img'></img>
                <img src='evn-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='evn-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>

          <div className='department-div'>
            <h2 className='dpmt-div-title'> Mail Room</h2>
            <p className='dpmt-div-text'>The Mail Room processes and distributes all incoming and outgoing mail for students, staff, and faculty, offering essential logistical support for campus communication and operations.</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='mail-1.webp' className='left-img' alt='left-img'></img>
                <img src='mail-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='mail-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>


        </div>
        <div className='third-section'>
        <div className='department-div'>
            <h2 className='dpmt-div-title'> Retail Operations</h2>
            <p className='dpmt-div-text'>Retail Operations provides essential services through campus stores, offering students, faculty, and staff access to university-branded merchandise, virtual textbook access, and other necessities</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='retl-1.jpeg' className='left-img' alt='left-img'></img>
                <img src='retl-2.webp' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='retl-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>
          <div className='department-div'>
            <h2 className='dpmt-div-title'>Special Projects</h2>
            <p className='dpmt-div-text'>Special Projects oversees unique, campus-wide initiatives that require cross-departmental collaboration, such as large-scale renovations, space optimization, or sustainability efforts</p>
            <div>
            <button className='learn-more'>Learn More</button>
            </div>
            <div className='dpmt-images'>
              <div className='left-section'>
                <img src='spcl-1.webp' className='left-img' alt='left-img'></img>
                <img src='spcl-2.jpeg' className='left-img' alt='left-img'></img>
              </div>
              <div className='right-section'>
                <img src='spcl-3.webp' className='right-img' alt='right-img'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Departments