import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{position: 'relative'}} className="backgroudHomeImg">
            <div className="col-md-4 h-100 bg-danger text-white ml-auto flex-column d-flex justify-content-center align-items-center">
                    <h1 className="mb-5 text-uppercase">The Best Auto Repair Shops</h1>
                    <p className="mt-5">If you had access to a car while living at home, chances are your parents took care of its maintenance or offered reminders as to when to take it in for service. When you’re on your own, car maintenance becomes your responsibility. Yes, it can be expensive and time consuming, but the investment you make today will save you money down the road.</p>
                    <p className="mt-5">If you had access to a car while living at home, chances are your parents took care of its maintenance or offered reminders as to when to take it in for service. When you’re on your own, car maintenance becomes your responsibility. Yes, it can be expensive and time consuming, but the investment you make today will save you money down the road.</p>
                    <h5 className="readMore border w-25 text-center p-2">Read more</h5>
            </div>
        </main>
    );
};

export default HeaderMain;