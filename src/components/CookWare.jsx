import React from 'react'
import { Col, Row } from 'react-bootstrap'

function CookWare() {
  return (
    <div>

<div className='mt-5' id='cookWare'>
    <h1 className='text-center text-dark' style={{fontSize:'55px'}}>Cookware & Bakeware</h1>

      <Row className='mt-5 ps-5 pe-5'>

        <Col lg={6} className='mb-5'>
            <h2>Stainless Steel Skillet</h2>
            <p>A stainless steel skillet will likely be the workhorse of your kitchen. You will be using this cookware for frying, searing, sautéing, and browning, among other functions. For this reason, it's important to pick a high quality stainless steel skillet that you can use for a lifetime.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FStainless-Steel-Skillet-300x127.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY/ref=as_li_ss_tl?s=home-garden&ie=UTF8&qid=1443028433&sr=1-1&keywords=Cuisinart+MCP22-30HN+MultiClad+Pro+Stainless+12-Inch+Skillet+with+Helper&linkCode=sl1&tag=mealime-20&linkId=17b92781fce35a1698d9fd4692ad4a3c" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>
        
        <Col lg={6} className='mb-5'>
            <h2>Cast Iron Skillet</h2>
            <p>Cast iron skillets have been workhorses in kitchens all over the world for over 2,000 years. Modern cast iron skillets are made from heavy cast iron and pre-seasoned (so food doesn't stick); with impressive heat retention abilities these skillets are favoured for use on both the stovetop and oven alike.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FCast-Iron-Skillet-300x136.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/gp/product/B00006JSUB/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=mealime-20&linkId=RXPD7CQVZC7OHKXU" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>
         
        <Col lg={6} className='mb-5'>
            <h2>GrillPan</h2>
            <p>For summer dishes like burgers, roasted salmon, meatballs, and marinated vegetables, a grill pan is a must. It creates tantalizing grill lines in your food, just like a barbecue does. But it's much easier than barbecuing because you don't have to leave the comfort of your kitchen and it only requires a stovetop element - no propane, gas, charcoal, or intense cleaning necessary.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FGrill-Pan-Non-Stick.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/Calphalon-Contemporary-Nonstick-11-Inch-Square/dp/B00DE1CY5Q/ref=as_li_ss_tl?s=kitchen&ie=UTF8&qid=1480542061&sr=1-1&keywords=calphalon+non+stick+grill+pan&linkCode=sl1&tag=mealime-20&linkId=3e761e1c42610e15c05c11acd129b551" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>

        <Col lg={6} className='mb-5'>
            <h2>Muffin Pan</h2>
            <p>A muffin pan is a baking pan with 6 or 12 built-in cups. Besides making muffins, they are great for individual quiches and on-the-go breakfast cups. We recommend the Oxo Good Grips Pro Muffin Pan because the Swiss-engineered, ceramic-reinforced, two-layer coating allows for easy food release. The heavy-gauge aluminized steel promotes even heat distribution.</p>
            <img className='mb-3' src="https://www.mealime.com/_next/image?url=%2Fimages%2Fkitchen-essentials%2FMuffin-Pan.jpg&w=384&q=85" alt="" style={{width:'15rem',height:'8rem'}} />
            <a className='btn btn-dark ms-3' href="https://www.amazon.com/gp/product/B015CQZR6I/ref=as_li_tl?ie=UTF8&tag=mealime-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B015CQZR6I&linkId=fff7f487639375b8fe6e799a1f87d1ee" target='_blank'>Buy from <span className='fw-bold'>Amazon</span></a>
        </Col>

      </Row>


  </div>


    </div>
  )
}

export default CookWare