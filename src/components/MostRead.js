import React, { useState } from 'react'
import image from '../assets/mostreadimage.jpg'

function MostRead(){
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        setIsOpen1(buttonIndex === 1 ? !isOpen1 : false);
        setIsOpen2(buttonIndex === 2 ? !isOpen2 : false);
        setIsOpen3(buttonIndex === 3 ? !isOpen3 : false);
        setIsOpen4(buttonIndex === 4 ? !isOpen4 : false);
    };

    return(
        <div className='most-read-container'>
            <section>
                <h1>الاكثر قراءة</h1>
                <div className={`most-read-section ${isOpen1 ? "closed" : ""} `}>
                    <h4>الكلمات العشوائية</h4>
                    <button  onClick={() => handleButtonClick(1)}>{isOpen1 ? "-" : "+"}</button>
                    { isOpen1 && <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
                    </p>}
                </div>
                <div className={`most-read-section ${isOpen2 ? "closed" : ""} `}>
                    <h4>الكلمات العشوائية</h4>
                    <button onClick={() => handleButtonClick(2)}>{isOpen2 ? "-" : "+"}</button>
                    { isOpen2 && <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
                    </p>}
                </div>
                <div className={`most-read-section ${isOpen3 ? "closed" : ""} `}>
                    <h4>الكلمات العشوائية</h4>
                    <button onClick={() => handleButtonClick(3)}>{isOpen3 ? "-" : "+"}</button>
                    { isOpen3 && <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
                    </p>}
                </div>
                <div className={`most-read-section ${isOpen4 ? "closed" : ""} `}>
                    <h4>الكلمات العشوائية</h4>
                    <button onClick={() => handleButtonClick(4)}>{isOpen4 ? "-" : "+"}</button>
                    { isOpen4 && <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...
                    </p>}
                </div>
            </section>
            <img src={image} alt="Most Read Image"></img>
        </div>
    )
}

export default MostRead