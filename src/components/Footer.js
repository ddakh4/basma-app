import React from 'react'

function Footer() {
    return (
        <footer>
            <div className='links-section'>
                <div className='col'>
                    <h3>بما تتطلبه</h3>
                    <a href="#">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل</a>
                </div>
                <div className='col'>
                    <h3>بما تتطلبه</h3>
                    <a href="#">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل</a>
                </div>
                <div className='col'>
                    <h3>بما تتطلبه</h3>
                    <a href="#">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل</a>
                </div>
            </div>
            <div className='icons-section'>
                <h3>مشاهدة على تويتر</h3>
                <div className='col'>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
                <div className='register'>
                    <input type='text'></input>
                    <button>الاشتراك</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer