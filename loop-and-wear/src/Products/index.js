import './index.css'
const Products = ()=>{
    return(
        <div>
            <div className="products-images">
               <h1>Products</h1>
                <div className='bag-chondo-lizarddoll'>
                <img src ="/images/chondo.png" alt='' id='chondo' /><br></br>
                <img src='/images/backpack.png' alt='' id='backbag'/><br></br>
                <img src='/images/lizarddoll.png'alt='' id='lizarddoll'/>
            </div><br></br>
            <div className='fish-pillow'>
             <img src='/images/fishdoll.png' alt='' id='fish'/>
             <img src='/images/pillowcase.png' alt='' id='pillow'/>
             </div>
        </div>
        <div className='upcycling-explanation'>
        <h4>Why Upcycle?</h4>
        <div id='recycle-bin'>
        <img src='/images/recyclebin.jpeg'alt='' id='bin'/>
        <div id='bin-explanation'>
        <h3>Reduce Waste and Conserve Resources</h3>
        <p>Upcycling clothes helps reduce the staggering amount<br></br>of textile waste generated by the fashion industry.</p>
        </div>
        </div><br></br>
        <div id='recycled-shirt'>
        <img src='/images/reccleshirt.png' alt='' id='shirt'/>
        <div id='shirt-explanation'>
        <h3>Support Sustainable Fashion</h3>
        <p>Upcycling is a key component of sustainable fashion, which<br></br>
         prioritizes reducing waste, conserving resources,and promoting<br></br>
         eco-friendly practices. </p>
         </div>
        </div>
        <div id='recycled-bulb'>
            <img src='./images/recyclebulb.png' alt='' id='bulb'/>
        <div id='bulb-explanation'>
        <h3>Give Old Clothes a New Life</h3>
        <p>Up cycling gives old clothes a second chance,extending their life<br></br>
        and reducing the need for new, resource-intensive garments. </p>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Products;