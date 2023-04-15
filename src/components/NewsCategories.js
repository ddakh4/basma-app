import React from 'react'
import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.jpeg'
import news4 from '../assets/news4.jpg'
import news5 from '../assets/news5.jpg'

function NewsCategories(){
    return(
        <div className='news-container'>
            <div className='news-item'>
                <img src={news1} alt="News Image"></img>
                <h2>اقتصاد</h2>
                <button>المزيد</button>
            </div>
            <div className='news-item'>
                <img src={news2} alt="News Image"></img>
                <h2>رياضة</h2>
                <button>المزيد</button>
            </div>
            <div className='news-item-double'>
                <img src={news5} alt="News Image"></img>
                <h2>اخبار</h2>
                <button>المزيد</button>
            </div>
            <div className='news-item'>
                <img src={news3} alt="News Image"></img>
                <h2>فيديو وصور</h2>
                <button>المزيد</button>
            </div>
            <div className='news-item'>
                <img src={news4} alt="News Image"></img>
                <h2>ثقافة</h2>
                <button>المزيد</button>
            </div>
        </div>
    )
}

export default NewsCategories