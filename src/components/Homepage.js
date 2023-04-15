import React from 'react'
import logo from '../assets/logo.png'
import MainNews from './MainNews'
import Menu from './Menu'
import NewsCategories from './NewsCategories'
import MostRead from './MostRead'
import Footer from './Footer'

function Homepage(){
    return(
        <div className='homepage-background'>
            <div className='wrapper'>
                <img src={logo} alt="Logo" className='logo'></img>
                <Menu />
                <MainNews />
                <NewsCategories />
                <MostRead />
                <Footer />
                <span>Copyright(c) website name</span>
            </div>
        </div>
    )
}

export default Homepage