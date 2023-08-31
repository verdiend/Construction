import React from 'react'

const Services = () => {
  return (
    <>
      <div className="lg:h-screen bg-[url('./images/bgService.jpg')] bg-cover flex flex-col pt-24 lg:pt-0 p-6 justify-center items-center text-center">
         <h1 className="text-4xl text-yellow-400 font-bold m-4 overflow-hidden">Our Services</h1>
         <div className="flex flex-wrap justify-center items-center">
            <div className=" w-72 lg:w-96 flex flex-col items-center jusitfy-center bg-white rounded-lg p-6 m-6 cursor-pointer duration-500 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    <img src="./images/house.jpg" alt="service1" width="350" height="350" className="rounded-lg" />
                    <h2 className="text-3xl font-bold m-2 overflow-hidden">House Construction</h2>
                    <p className="text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
            </div>
            <div className="w-72 lg:w-96 flex flex-col items-center jusitfy-center bg-white rounded-lg p-6 m-6 cursor-pointer duration-500 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    <img src="./images/building.jpg" alt="service1" width="350" height="350" className="rounded-lg" />
                    <h2 className="text-3xl font-bold m-2 overflow-hidden">Commercial Construction</h2>
                    <p className="text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
            </div>
            <div className="w-72 lg:w-96 flex flex-col items-center jusitfy-center bg-white rounded-lg p-6 m-6 cursor-pointer duration-500 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                    <img src="./images/renovation.jpg" alt="service1" width="350" height="350" className="rounded-lg" />
                    <h2 className="text-3xl font-bold m-2 overflow-hidden">Renovation</h2>
                    <p className="text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
            </div>
         </div>
      </div>
    </>
  )
}

export default Services