import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{position: 'relative'}} className="backgroudHomeImg">
            {/* <div className="col-md-4 h-100 ml-auto border d-flex justify-content-center align-items-center"> */}
                    <h1 style={{position: 'absolute', top: '40%', right: '10%'}}>This is Header Main img</h1>
            {/* </div> */}
        </main>
    );
};

export default HeaderMain;