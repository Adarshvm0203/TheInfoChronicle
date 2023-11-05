import React from 'react'
import Entertainment from '../Component/Entertainment'
import Carousel1 from '../Component/Carousel'
import Sidebar from '../Component/Sidebar'
const Entertainmentpage = () => {
  return (
    <div className="container">
    <div className="row">

        <div className="col-md-8">
            <Entertainment />
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

export default Entertainmentpage
