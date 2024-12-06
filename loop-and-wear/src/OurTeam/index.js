import './index.css'

const OurTeam = () => {
    return(



        <div className='team-section'>
            <h2 className='team'>Our Team</h2>


            <div className='our-team'>
                <div className='images'>

            <div>
               <img src= "/images/kame.png" alt='member-one'/>
               <div className='caption'>
                <h5>Kame Bashuna</h5>
                <p>Software Developer</p>
               </div>
            </div>

                <div>
                <img src="/images/faith.png" alt='member-two'/>
                <div className='caption'>
                <h5>Faith Munyao</h5>
                <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src="/images/eshe.png" alt='member-three'/>
                <div className='caption'>
                    <h5>Eshe Aziz</h5>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>

            <div className='image-bottom'>

                <div>
                <img src='/images/edna.png'alt='member-four'/>
                <div className='caption'>
                    <h5>Edna Kesa</h5>
                    <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src='/images/susan.png' alt='member-five'/>
                <div className='caption'>
                    <h5>Susan Masaku</h5>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>
        </div>
        </div>
      
    )
}

export default OurTeam;