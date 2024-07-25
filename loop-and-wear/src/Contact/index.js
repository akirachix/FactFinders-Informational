import './index.css'

const Contact=()=>{
    return(
    <div>
     <h11>Contact Us</h11>
<div>
    <div className='topcontact'>     
    <div className='location'>
            <img src='/images/location.png' alt='' id="locations"/>
         <div className='locations'>
                <p>Office Address</p>
                <p>Ndege Road 616</p>
                <p>Karen</p>
          </div>
        </div><br></br>
    <div className='mail'>
          <img src='/images/email.png' alt='' id="mailing"/>
          <div id='mails'>
                <p>Mail for Information</p>
                <p>hr@loopandwear.com</p>
          </div>
          </div><br></br>
    <div className='call'>
          <img src='/images/call.jpeg' alt='' id="calling"/>
             <div id='calls'>
             <p>Call For Help</p>
             <p>+254 707071167</p>
             <p>+254 716752733</p>
             </div>
          </div>
    </div>

    <div className='form'>
        
    <img src='/images/form.png' alt='' id="formpicture"/>
        
<form >
        <div className='contactform'>
            <h9 id="feelfrees">Feel free to contact us</h9>
            <p  id="paragraph">Do you have a question? Simply drop us a message, and 
            </p>
          
             <p id="paragraph">we’ll get back to you within 24 hours</p>
    
        <div className='firstlastname'>
            <div id='firstname'>
            <label  for="firstname">Firstname </label><br></br>
            <input type="text" placeholder=""  required class="input" id ="names"></input>
            </div><br></br>

            <div id='lastname'>
            <label for="lastname">Lastname </label><br></br>
            <input type="text" placeholder=""  required class="input" id="names"></input>
            </div>
           
        </div> 
        <br></br>
        <div className='emailphone'>
             <div id='email'>
             <label for="email">Email </label><br></br>
            <input type="text" placeholder=""  required class="input" id="names"></input>
             </div><br></br>

             <div id='phone'>
             <label for="phone">Phone </label><br></br>
            <input type="text" placeholder=""  required class="input" id="names" ></input>
             </div>

        </div> 
        
        <br></br>
        <div className='message'> 
        <label for="message">Message </label><br></br>
            <input type="text" placeholder=""  required class="input" id="messages" ></input> 
        </div>

        <br></br>
        <button id="buttons">Submit</button>

        </div>
</form>
    </div>

<div className='footer'>
    <div id='connect-footer'>
        <div id="connect">
        <p>Connect With Us</p> 
        </div>
            
            <div id="icons">
      
            <img src='/images/facebook50.png' alt='' className="facebook"/> 
            <img src='/images/linkedin50.png' alt='' className="linkedin"/> 
            <img src='/images/twitter11.png' alt='' className='twitter'/>  

            </div>
        </div>

        <div id='copyright'>
            <div>
            <p>Copyright  © 2024 LoopandWear | All Rights Reserved</p>
            </div>

        </div>
</div>
</div>

</div>
    )
}
export default Contact;