import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import HeaderMain from '../HeaderMain/HeaderMain';
import Contact from '../../Contact/Contact';
import Footer from '../Footer/Footer';
import Reviews from '../../Reviews/Reviews';
import AllNews from '../NewsComponent/AllNews';

const Header = () => {
    return (
        <div>
            
            <HeaderMain></HeaderMain>
            <AllProducts></AllProducts>
            <AllNews></AllNews>

            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;