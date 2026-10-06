import React from 'react'
import Farmer from"../assets/Farmers.avif"
import { Quote, ArrowRight } from 'lucide-react'



const FarmersStory = () => {
  return (
    <section className="bg-[#2a5c14] grid grid-cols-2 grid-rows-1 h-[600px] min-h-00">
        <div className='col-span-1'>
            <img src={Farmer}
            alt="Farmer"
            className='h-full w-full object-cover'
            >
                
            </img>
        </div>
        <div className="col-span-1 pl-15 pt-35 tracking-wide font-bold pr-20">
            <h1 className='text-[#bf7e28] mb-4'>
                <Quote size={35}className='mb-3'/>
                <span className='text-shadow-xs text-xs'>OUR FARMERS</span>
            </h1>
            <h2 className='text-white font-serif text-4xl tracking-wide font-medium mb-5 mt-7'>EVERY PRODUCE PICKED 
                <br/>
                BY HAND.</h2>
            <p className='font-normal text-1xl text-white/50 font-serif'>
                Behind every listing is a farmer who wakes before dawn, reads the
                <br/>
                weather, and makes decisions that shape what lands on your table. 
               
                We make sure they're paid fairly for it.
                <br/>
            </p>
        
  

        <div className="flex gap-4 mt-10">
        {/* Join as a Farmer */}
        <button className="flex font-normal items-center gap-1 rounded-2xl h-[50px] w-[190px] bg-[#C98625] px-5 py-3 font-semibold text-black transition hover:bg-[#B8751C] whitespace-nowrap">
            Join as a Farmer
            <ArrowRight size={20} />
        </button>

        {/* Meet Our Farmers */}
        <button className="rounded-2xl border border-white/25 px-7 py-3 h-[50px] w-[190px] font-semibold text-white transition hover:bg-white/10 whitespace-nowrap">
            Meet Our Farmers
        </button>
        </div>
    </div>
    </section>
  )
}

export default FarmersStory
