import React from 'react'
import styled from 'styled-components'

const LensGallery = () => {
  return (
    <Container>
        <h1>LENS GALLERY</h1>
        <div className='ImgRow'>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E12A13121/E12A13121-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E15B13221/E15B13221-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E15B8530/E15B8530-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E79A8728/E79A8728-2.jpg" alt="" />
            </div>
        </div>
        <div className='ImgRow'>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E10A8726/E10A8726-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E12A8725/E12A8725-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E74A8717/E74A8717-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E20A8717/E20A8717-2.jpg" alt="" />
            </div>
        </div>
        <div className='ImgRow'>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E82A8906/E82A8906-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E25B1046165/E25B1046165-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E84A8503/E84A8503-2.jpg" alt="" />
            </div>
            <div className='card'>
                <img src="https://cdn.eyemyeye.com/shared/images/products/E10A13250/E10A13250-2.jpg" alt="" />
            </div>
        </div>
    </Container>
  )
}

const Container = styled.section`
   padding: 2rem 4rem;
   h1{
    text-align: center;
    color: brown;
   }
   .ImgRow{
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 1.3rem;
        img{
            width: 100%;
            height: auto;
        }
        div{
            border: 1px solid grey;
        }
   }
   .card:hover{
        transform: scale(0.9);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
   }
`;

export default LensGallery