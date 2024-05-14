import React from 'react'
import Nav from '../components/Nav'
import '../App.css'
import { Col, Row } from 'react-bootstrap'
import CookWare from '../components/CookWare'
import KitchenUtensils from '../components/KitchenUtensils'
import Footer from '../components/Footer'

function Shopping() {





 return (
  <div style={{overflowX:'hidden',backgroundColor:'beige'}}>
  {/* header */}
   <div><Nav/></div>

  {/* heading */}
  <h1 className='text-center pt-3 pb-3' style={{color:'black',fontSize:'75px',fontWeight:'bold',backgroundColor:'lightgray'}}>Top Kitchen Essentials</h1>


{/* preparation tools */}
  <div className='mt-5' id='preparationTools'>
    <h1 className='text-center text-dark' style={{fontSize:'55px'}}>Preparation Tools</h1>

      <Row className='mt-5 ps-5 pe-5'>

        <Col lg={6} className='mb-5'> 
            <h2>Chef's Knife</h2>
            <p>Coming in much cheaper than our recommended or premium options, the Victorinox 8 Inch Fibrox Pro Chef's Knife is a steal of a deal. With a five star Amazon rating over 4,500 reviews, its the only chef's knife you should consider purchasing under $40. You simply can't go wrong with this starter chef's knife.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FChefs-Knife-Budget-Victorinox-Fibrox.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/dp/B008M5U1C2/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=0fab7a70b4a1a29671730156c002aa94" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>
        
        <Col lg={6} className='mb-5'>
            <h2>Can Opener</h2>
            <p>It's not often that a piece of cookware brings you joy every time you use it. But that's exactly what this can opener from Kuhn Rikon does! This is a 5-in-1 can opener that pulls tabs, crowns caps, unscrews tops, and opens jar lids and cans safely, easily, and cleanly.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FCan-Opener-300x200.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/gp/product/B000B6NXL6/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=ADU4ZBVOEQPBEUIX" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>
         
        <Col lg={6} className='mb-5'>
            <h2>Measuring Spoons</h2>
            <p>Measuring spoons are used to precisely measure smaller amounts of liquid or solid cooking ingredients than measuring cups. This set of 5 stainless steel measuring spoons from Prepworks contains measurements of ¼ tsp all the way up to 1 tbsp. They're magnetic and nested so you can put them away easily without losing any of them (which can often happen for the smaller spoons).</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FMeasuring-Spoons-300x173.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/gp/product/B001GAQKKW/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=XCB3ZW5GH37AUOFL" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>

        <Col lg={6} className='mb-5'>
            <h2>Vegetable Peeler</h2>
            <p>A vegetable peeler can really speed up your preparation time, whether you're using it to peel potatoes, carrots, or any other vegetables.We love this pirahna "Y-Peeler" from Kuhn Rikon because it's so simple. No multi-tasking here, but this is a high quality peeler that will stand the test of time.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FVegetable-Peeler-300x196.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/gp/product/B0028RXHKS/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=OFK5YS5B5YXIWKKC" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>

      </Row>

    

  </div>

<CookWare/>

<KitchenUtensils/>


<Footer/>




 </div>
  )
}

export default Shopping