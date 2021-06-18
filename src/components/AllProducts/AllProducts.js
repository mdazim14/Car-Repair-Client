import React from 'react';
import Product from './Product';
import icon1 from '../../images/bsIcon1.jpg';
import icon2 from '../../images/bsIcon2.jpg';
import icon3 from '../../images/bsIcon3.jpg';
import icon4 from '../../images/bsIcon4.jpg';

const allProducts = [
    {
        title: 'Contactless Washing',
        description: 'Vestibulum tortor risus, rutrum at congue sed ultricies finibus.',
        icon: icon1,
        background: 'danger'
    },
    {
        title: 'Safety Materials',
        description: 'Cras aliquam tristique metus, eu gravida diam vestibulum gravida.',
        icon: icon2,
        background: 'danger'
    },
    {
        title: 'Modern Equipment',
        description: 'Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.',
        icon: icon3,
        background: 'danger'
    },
    {
        title: 'Extensive Cleaning',
        description: 'Sestibulum non dolor sit amet mi moles tincidunt vel non velit.',
        icon: icon4,
        background: 'danger'
    }
]

const AllProducts = () => {

    return (
        <section className="m-5">
            <h1 className="text-center p-5">Our Products</h1>
            <div className="row border">
                {
                    allProducts.map(info => <Product info={info} ></Product>)
                }
            </div>
        </section>
    );
    
};

export default AllProducts;