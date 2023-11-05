import React from 'react'
import Entertainment from '../Component/Entertainment'
import Carousel1 from '../Component/Carousel'
import Sidebar from '../Component/Sidebar'
import Sport from '../Component/Sport'
import Technology from '../Component/Technology'
const Technologypage = () => {
  return (
    <div className="container">
    <div className="row">

        <div className="col-md-8">
            <Technology />
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

export default Technologypage
