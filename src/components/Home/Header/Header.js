import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigationbar from '../Navigationbar/Navigationbar';
import Services from '../Services/Services';
import Contact from '../../Contact/Contact';
import Footer from '../Footer/Footer';
import Reviews from '../../Reviews/Reviews';

const Header = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <AllProducts></AllProducts>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;