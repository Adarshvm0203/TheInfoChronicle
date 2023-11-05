import React from 'react'
import Business from '../Component/Business'
import Sidebar from '../Component/Sidebar'
import Carousel1 from '../Component/Carousel'
const Businesspage = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-8">
                    <Business />
                    <hr />
                 
                    <Carousel1 />

                </div>
                <div className="col-md-4">
                    <Sidebar />
                </div>

            </div>
        </div>

    )
}

export default Businesspage
