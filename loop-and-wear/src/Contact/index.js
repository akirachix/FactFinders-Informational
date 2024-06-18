import './index.css'

const Contact=()=>{
    return(
    <div >
        <h1 id = "contact">Contact Us</h1>
<div className='Topcontact'>     
    <div className='Location'>
            <img src='/images/location.png' alt='' id="location"/>
         <div className='location'>
                <h3>Office Address</h3>
                <p>Ndege Road 616</p>
                <p>Karen</p>
          </div>
        </div><br></br>
    <div className='Mail'>
          <img src='/images/email.png' alt='' id="mail"/>
          <div className='mail'>
                <h3>Mail for Information</h3>
                <p>hr@loopandwear.com</p>
          </div>
          </div><br></br>
    <div className='Call'>
          <img src='/images/call.jpeg' alt='' id="call"/><br></br>
             <div className='call'>
             <h3>Call For Help</h3>
             <p  >+254 707071167</p>
             <p >+254 716752733</p>
             </div>
          </div>
    </div>

    <div className='Form'>
        <img src='/images/form.png' alt='' id="formpic"/>
        
<form >
        <div className='ContactForm'>
            <h1 id="feelfree">Feel free to contact us</h1>
            <p>Do you have a question? Simply drop us a message, and 
            </p>
          
             <p>we’ll get back to you within 24 hours</p>
    
        <div className='firstlastname'>
            <div id='firstname'>
            <label for="firstname">Firstname </label><br></br>
            <input type="text" placeholder=""  required class="input" ></input>
            </div><br></br>

            <div id='lastname'>
            <label for="lastname">Lastname </label><br></br>
            <input type="text" placeholder=""  required class="input" ></input>
            </div>
           
        </div> 
        <br></br>
        <div className='emailphone'>
             <div id='email'>
             <label for="email">Email </label><br></br>
            <input type="text" placeholder=""  required class="input" ></input>
             </div><br></br>

             <div id='phone'>
             <label for="phone">Phone </label><br></br>
            <input type="text" placeholder=""  required class="input" ></input>
             </div>

        </div> 
        
        <br></br>
        <div className='message'> 
        <label for="message">Message </label><br></br>
            <input type="text" placeholder=""  required class="input" id="messages" ></input> 
        </div>

        <br></br>
        <button id="button">Submit</button>

        </div>
</form>
    </div>

<div className='foter'>
    <div className='Footer'>
        <div id="connect">
        <h1>Connect With Us</h1> 
        </div>
            
            <div id="icons">
            <img src='/images/instagram (1).png' alt='' className="instagram"/>
            <img src='/images/facebook50.png' alt='' className="facebook"/> 
            <img src='/images/linkedin50.png' alt='' className="linkedin"/> 
            <img src='/images/twitter11.png' alt='' className='twitter'/>  

            </div>
        </div>

        <div className='lowerfooter'>
            <div>
            <p>Copyright c 2024 LoopandWear | All Rights Reserved</p>
            </div>

        </div>
</div>
</div>
    )
}
export default Contact