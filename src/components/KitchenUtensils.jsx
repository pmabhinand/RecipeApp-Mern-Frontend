import React from 'react'
import { Col, Row } from 'react-bootstrap'

function KitchenUtensils() {
  return (
    <div>

<div className='mt-5 mb-5'>
    <h1 className='text-center text-dark' style={{fontSize:'55px'}}>Cooking Tools & Kitchen Utensils</h1>

    <div className='mt-5 ps-5 pe-5'>

      <Row>

        <Col lg={6}>
          <div className='pe-3'>
            <h2>Spatula</h2>
            <p>You may not think that a spatula can be much improved upon, but you'd be wrong! Tovolo has done a wonderful job with their line of stainless steel and silicon cooking implements. This is a high quality spatula that is heat resistant up to 600 degrees fahrenheit and won't melt if you leave it against your pot or pan (which we've all done!). This small kitchen item is a joy to use and is very reasonably priced for the quality.</p>
            <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FSpatula-300x129.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-5' href="https://www.amazon.com/gp/product/B0071JZF44/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=HKIS344UNHHOJ3Y3" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
          </div>
        </Col>
        
        <Col lg={6}>
          <div className='ps-3'>
            <h2>Stirring Spoon</h2>
            <p>With their trademark stainless steel and silicon construction, it will last for a very long time and won't melt in different places (like other products do). Instead of stocking up on several spoons, choose one that is durable, heat resistant, dishwasher safe, and won't scratch cookware or pans. This stirring spoon from Tovolo one will do great!</p>
            <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FStirring-Spoon-300x195.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-5' href="https://www.amazon.com/gp/product/B000X7FOI8/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=D6XN6LLLGF3J3QS5" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
          </div>
        </Col>
         
        <Col lg={6}>
          <div className='pe-3 mt-5'>
            <h2>Oven Mitts</h2>
            <p>Oven mitts are used in order to protect your hands from being burned when transferring hot food to and from the oven. No longer will you have to wrap your hand in a tea towel and try not to spill your dish (or get burned) as you pull it out one handed.</p>
            <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FOven-Mitts-300x207.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-5' href="https://www.amazon.com/gp/product/B004QGXNT4/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=2EJ6H4RNKJDYEGAB" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
          </div>
        </Col>

        <Col lg={6}>
          <div className='ps-3 mt-5'>
            <h2>Trivet</h2>
            <p>A trivet is a heat resistant pad that you place hot dishes on, so you don't burn your table. We love Bambri's bamboo trivets because they're both functional and fashionable and do what they're supposed to do.</p>
            <img src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FTrivet-300x300.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-5' href="https://www.amazon.com/Bambri%C2%AE-HP03P-Resistant-Trivets-Kitchen/dp/B0132TJ3TO/ref=as_li_ss_tl?ie=UTF8&qid=1443030287&sr=8-1&keywords=Bamboo+Hot+Pad+Trivet&linkCode=sl1&tag=mealime-20&linkId=9fbbe1ca8d8f46efa442da124f75af81" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
          </div>
        </Col>

      </Row>

    </div>

  </div>






    </div>
  )
}

export default KitchenUtensils