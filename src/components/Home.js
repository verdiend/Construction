import React from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import About from './About'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <>
      {/* for desktop view */}
      <div className="hidden lg:block">
      <Parallax pages={2.57} className="w-full text-4xl bg-blue-200">
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${'./images/bg.png'})`,
            backgroundSize: 'cover',
          }}
        
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
        >
          <img src="./images/construction.png" className="absolute bottom-0" alt="img"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1}
        >
          <img src="./images/worker.png" className="absolute bottom-0 left-36" alt="img"/>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.25}
          speed={0.3}
          factor={0.5}
          className="absolute top-[500px] h-[50%] flex items-center justify-end"
        
        >
          
          <div className="flex flex-col items-center text-4xl p-4 lg:p-0 text-white absoulte bottom-0 text-center overflow-y-hidden h-[100%] w-[100%] lg:w-[50%]">
            <img src="./images/logo.png" alt="logo" className=""/>
            <h1 className="h-96 overflow-y-hidden font-bold text-black">
             We provide premium construction services.
            </h1>
            <btn className="flex items-center justify-center bg-transparent w-24 h-24 text-xl overflow-hidden border-2 border-white text-white rounded-md p-4 my-4 lg:my-2 hover:text-yellow-400 hover:border-yellow-400 duration-75 cursor-pointer">
              Contact
            </btn>
          </div>
        </ParallaxLayer>
        <About/>
        <Testimonial/>
        
      </Parallax>
      </div>

      {/* for horizontal mobile view */}
      <div className="hidden md:block lg:hidden">
      <Parallax pages={6} className="text-4xl">
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={2}
          className="h-full"
          style={{
            backgroundImage: `url(${'./images/bg.png'})`,
            backgroundSize: 'cover',
          }}
        
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
        >
          <img src="./images/construction.png" height="5000" width="1000" className="absolute bottom-0 h-96" alt="img"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1}
        >
          <img src="./images/worker.png" width="400" height="400" className="absolute bottom-0 left-36" alt="img"/>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.25}
          speed={0.1}
          factor={0.6}
          className="absolute top-[500px] h-[50%] flex items-center justify-end"
        
        >
          
          <div className="flex flex-col items-center text-4xl p-4 lg:p-0 text-white absoulte bottom-0 text-center overflow-y-hidden h-[100%] w-[100%] lg:w-[50%]">
            <img src="./images/logo.png" alt="logo" className=""/>
            <h1 className="h-96 overflow-y-hidden font-bold">
             We provide premium construction services.
            </h1>
            <btn className="flex items-center justify-center bg-transparent w-24 h-24 text-xl overflow-hidden border-2 border-yellow-400 text-yellow-400 rounded-md p-4 my-4 lg:my-2 hover:text-white hover:border-white duration-75 cursor-pointer">
              Contact
            </btn>
          </div>
        </ParallaxLayer>
        <About/>
        <Testimonial/>
        
      </Parallax>
      </div>
      
      {/* for mobile view */}
      <div className="block sm:hidden">
      <Parallax pages={3.2} className="text-4xl">
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            backgroundImage: `url(${'./images/bg.png'})`,
            backgroundSize: 'cover',
          }}
        
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
        >
          <img src="./images/construction.png" className="absolute bottom-0" alt="img"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2}
          factor={1}
        >
          <img src="./images/worker.png" className="absolute bottom-0 left-36" alt="img"/>
          
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.25}
          speed={0.3}
          factor={0.6}
          className="absolute top-[500px] h-[50%] flex items-center justify-end"
        
        >
          
          <div className="flex flex-col items-center text-4xl p-4 lg:p-0 text-white absoulte bottom-0 text-center overflow-y-hidden h-[100%] w-[100%] lg:w-[50%]">
            <img src="./images/logo.png" alt="logo" className=""/>
            <h1 className="h-96 overflow-y-hidden font-bold">
             We provide premium construction services.
            </h1>
            <btn className="flex items-center justify-center bg-transparent w-24 h-24 text-xl overflow-hidden border-2 border-yellow-400 text-yellow-400 rounded-md p-4 my-4 lg:my-2 hover:text-white hover:border-white duration-75 cursor-pointer">
              Contact
            </btn>
          </div>
        </ParallaxLayer>
        <About/>
        <Testimonial/>
        
      </Parallax>
      </div>
      
      
    </>
  )
}

export default Home