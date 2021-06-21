import React from 'react';
import AddService from '../../allServices/AllService';
import HeaderMain from '../HeaderMain/HeaderMain';
import Contact from '../../Contact/Contact';
import Footer from '../Footer/Footer';
import Reviews from '../../Reviews/Reviews';
import AllNews from '../NewsComponent/AllNews';

const Header = () => {
    return (
        <div>
            
            <HeaderMain></HeaderMain>
            <AddService></AddService>
            <AllNews></AllNews>

            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;