import React from 'react'
import { User, Package, Truck } from 'lucide-react'

const HowitWorks = () => {
  return (
    <section id="HowitWorks" className='bg-[#f5f1e8]'>
        <div className='text-center pt-20'>
            <h1 className='text-xs tracking-wider font-medium text-[#bf7e28]'>SIMPLE PROCESS</h1>
            <h2 className='font-semibold text-[42px] mt-2 tracking-wide'
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >How it works</h2>

        </div>
        <div className='grid grid-cols-3 gap-4 p-10 mt-3'>

            <div className='col-span-1'>
                <div className="flex items-center gap-4">
                {/* Icon box */}
                <div className="w-10 h-10 bg-[#286B16] rounded-2xl flex items-center justify-center">
                    <User className="text-white text-2xl" />
                </div>

                {/* Number */}
                <span className="text-3xl font-medium font-['Bebas_Neue']  text-[#D9D8D1]">
                    01
                </span>
                </div> 
                <div className='mt-4'>
                    <h1 className='font-medium font-serif text-2xl tracking-tight'>Create an Account</h1>
                    <p className='mt-3 text-[#7a7560] tracking-tighter'>Sign up as a buyer or farmer in under 2 minutes. Farmers
                        <br/>
                        complete a simple one-time verification.
                    </p>

                </div>            

            </div>


            <div className='col-span-1'>
                <div className="flex items-center gap-4">
                {/* Icon box */}
                <div className="w-10 h-10 bg-[#286B16] rounded-2xl flex items-center justify-center">
                    <Package className="text-white text-2xl" />
                </div>

                {/* Number */}
                <span className="text-3xl font-medium font-['Bebas_Neue']  text-[#D9D8D1]">
                    02
                </span>
                </div> 
                <div className='mt-4'>
                    <h1 className='font-medium font-serif text-2xl tracking-tight'>Browse or List</h1>
                    <p className='mt-3 text-[#7a7560] tracking-tighter'>Sign up as a buyer or farmer in under 2 minutes. Farmers
                        <br/>
                        complete a simple one-time verification.
                    </p>

                </div>            

            </div>



            <div className='col-span-1'>
                <div className="flex items-center gap-4">
                {/* Icon box */}
                <div className="w-10 h-10 bg-[#286B16] rounded-2xl flex items-center justify-center">
                    <Truck className="text-white text-2xl" />
                </div>

                {/* Number */}
                <span className="text-3xl font-medium font-['Bebas_Neue']  text-[#D9D8D1]">
                    03
                </span>
                </div> 
                <div className='mt-4'>
                    <h1 className='font-medium font-serif text-2xl tracking-tight'>Connect & Receive</h1>
                    <p className='mt-3 text-[#7a7560] tracking-tighter'>Sign up as a buyer or farmer in under 2 minutes. Farmers
                        <br/>
                        complete a simple one-time verification.
                    </p>

                </div>            

            </div>

        </div>
    </section>
  )
}

export default HowitWorks
