import React from 'react';
import SirIorek from '../images/Sir_Iorek.jpg'
import './NavBar.css'


const NavBar = () => {
    return (
    <nav class="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
        {/* <!--  LEFT PADDING TO CENTER LOGO  WHEN COLLAPSED --> */}
        <div class="dtc dn-ns w-third"></div>
        
        {/* <!--  LOGO  --> */}
        <a class="dtc v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns" href="#" title="Home">
            <img src={SirIorek} class="dib w4 h4 br-100" alt="Site Name"/>
        </a>
        
        {/* <!-- LINKS / MENU  --> */}
        <div id="menu" class="static-ns absolute mt5 mt0-ns left-100 db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr">
            <a class="link dim dark-gray tr tl-ns f3 db dib-ns mr3 mr4-ns" href="#" title="Home">Home</a>
            <a class="link dim dark-gray tr tl-ns f3 db dib-ns mr3 mr4-ns" href="#" title="About">About</a>
            <a class="link dim dark-gray tr tl-ns f3 db dib-ns mr3 mr0-ns" href="#" title="Contact">Contact</a>
        </div>
        
        {/* <!--  EXPAND MENU BUTTON  --> */}
        {/* <a href="#" id="menu-btn" class="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
            Menu
        </a> */}
        </nav>
    );
}

 {/* // <nav className='dt w-100 border-box pa3 ph2-ns'>
        //     <a className='dtc v-mid mid-gray link dim w5' href='#' title="home">
        //         <img alt='logo' src={SirIorek} className='dib w4 h4 br-100'/>
        //     </a>
        //     <div className='dtc v-mid w-75 tr'>
        //         <a className='link dim dark-gray fs10 dib mr3 mr4' href='#' title='About Me'>About Me</a>
        //     </div>
        // </nav> */}

export default NavBar;