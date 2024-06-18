import './index.css'

const About = ()=>{
    return(
        <div className= "about">
            <h1><span>About us</span></h1>
            <div id="aboutus">
            <div id="world">
            <img src= "/images/planet.png" alt="globe" className='globe'/>
            </div>
            <div id="text">
                <p>
                Loop & Wear is a cutting edge mobile app designed to connect donors with upcycling companies, promoting a more  circular lifestyle<br/>
                and reducing waste.With its ability to browse and select from a curated list of community initiative, and the convenience of donating<br/>
                from anywhere using mobile device.Our mission is to empower individuals to make a positive impact on the environment by connecting <br/>
                them with upcycling companies and community initiatives.Our vision is to create a world where waste is minimized and resources are <br/>
                maximized.We envision a future where individuals, business,and communities work together to reduce waste and promote sustainability.<br/>
                </p>


            </div>
            </div>
            
        </div>
    )
}

export default About