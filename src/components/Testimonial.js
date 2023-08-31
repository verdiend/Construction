import React from 'react'

const Testimonial = () => {
  return (
    <>
      <div className="lg:h-screen testimonial flex flex-col justify-center items-center p-12">
        <h1 className="text-4xl text-yellow-400 font-bold mb-24 overflow-hidden">Testimonials</h1>
        <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col p-4 rounded-lg w-48 h-72 m-4 shadow-lg text-center justify-center items-center text-black bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                <h2 className="text-xl">John</h2>
                <img src="./images/rating.png" alt="rating" />
                <p className="text-lg">
                    Very good service. They did an absolute perfect job.
                </p>
            </div>
            <div className="flex flex-col p-4 rounded-lg w-48 h-72 m-4 shadow-lg text-center justify-center items-center text-black bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                <h2 className="text-xl">John</h2>
                <img src="./images/rating.png" alt="rating" />
                <p className="text-lg">
                    Very good service. They did an absolute perfect job.
                </p>
            </div>
            <div className="flex flex-col p-4 rounded-lg w-48 h-72 m-4 shadow-lg text-center justify-center items-center text-black bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                <h2 className="text-xl">John</h2>
                <img src="./images/rating.png" alt="rating" />
                <p className="text-lg">
                    Very good service. They did an absolute perfect job.
                </p>
            </div>
        </div>
        

      </div>
    </>
  )
}

export default Testimonial