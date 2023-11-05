import React from 'react'
import Health from '../Component/Health'
import Carousel1 from '../Component/Carousel'
import Sidebar from '../Component/Sidebar'

const Healthpage = () => {
  return (
    <div className="container">
            <div className="row">

                <div className="col-md-8">
                    <Health />
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

export default Healthpage
