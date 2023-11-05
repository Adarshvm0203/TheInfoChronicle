import React from 'react'
import Carousel1 from '../Component/Carousel'
import Sidebar from '../Component/Sidebar'
import Science from '../Component/Science'
const Sciencepage = () => {
  return (
    <div className="container">
    <div className="row">

        <div className="col-md-8">
            <Science />
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

export default Sciencepage
