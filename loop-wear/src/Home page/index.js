import './index.css'

const Homepage = () => {
    return(
    <div className='homepage'>

        <div className = "nav-bar">

        <img src = "/images/logo.png" alt = "logo"/>

        <div className= "navbar">
            <span>Home</span>
            <a href = "/about.index.js">About</a><br></br>
            <a href = "/products.index.js">Products</a><br></br>
            <a href = "/team.index.js">Team</a><br></br>
            <a href = "/contact.index.js">Contact</a>
            
        </div>

        </div>
        <br></br><br></br><br></br><br></br>

         <div className='container'>

        <div id className="content">
            <h1>Loop & Wear:</h1>
            <p>Revive, reimagine and reuse the art of upcycling for your garment.</p>
            <br></br>
            <button type = "button">Lets Make It Happen</button>

        </div>

        <img src ="/images/clothingdonation.jpeg" alt = "donors image" className='donorsImg'/>

        </div>


    </div>
)
}
export default Homepage;