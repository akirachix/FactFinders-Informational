import './index.css'

const OurTeam = () => {
    return(
        <div>
            <h2 className='team'>Our Team</h2>

            <div className='our-team'>
                <div className='images'>

            <div>
               <img src= "/images/kame.png" alt='member-one'/>
               <div className='caption'>
                <h3>Kame Bashuna</h3>
                <p>Software Developer</p>
               </div>
            </div>

                <div>
                <img src="/images/faith.png" alt='member-two'/>
                <div className='caption'>
                <h3>Faith Munyao</h3>
                <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src="/images/eshe.png" alt='member-three'/>
                <div className='caption'>
                    <h3>Eshe Aziz</h3>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>

            <div className='image-bottom'>

                <div>
                <img src='/images/edna.png'alt='member-four'/>
                <div className='caption'>
                    <h3>Edna Kesa</h3>
                    <p>Software Developer</p>
                </div>
                </div>

                <div>
                <img src='/images/susan.png' alt='member-five'/>
                <div className='caption'>
                    <h3>Susan Masaku</h3>
                    <p>Software Developer</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default OurTeam