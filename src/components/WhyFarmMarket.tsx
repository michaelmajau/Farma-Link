
import { BadgeCheck , Handshake, Truck} from 'lucide-react'

const WhyFarmMarket = () => {
  return (
    <section className='py-30 px-6 border-b border-[#182008]/20 bg-[#F5F3EA] flex '>
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3E6D7] mb-3">
            <BadgeCheck className="h-6 w-6 text-[#2F5D20]" />
          </div>

           <h3 className="text-xl font-bold text-[#182008]"
           style={{
            fontFamily: '"DM Serif Display", serif',           
          }}
           >
          Farm Direct
        </h3>

        <p className="mt-2 leading-7 text-[#4A4A3A]">
          Buy directly from local farmers and know exactly where
          your food comes from.
        </p>



        </div>
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3E6D7] mb-3">
            <Handshake className="h-6 w-6 text-[#2F5D20]" />
          </div>

           <h3 className="text-xl font-bold text-[#182008]"
           style={{
            fontFamily: '"DM Serif Display", serif',           
          }}
           >
          Fair Prices
        </h3>

        <p className="mt-2 leading-7 text-[#4A4A3A]">
          Farmers keep more of what they earn while you get 
          fresh produce at prices that are fair for everyone.
        </p>



        </div>
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3E6D7] mb-3">
            <Truck className="h-6 w-6 text-[#2F5D20]" />
          </div>

           <h3 className="text-xl font-bold text-[#182008]"
           style={{
            fontFamily: '"DM Serif Display", serif',           
          }}
           >
          Fresh & Local
        </h3>

        <p className="mt-2 leading-7 text-[#4A4A3A]">
          Discover fresh produce from farms near you, 
          with convenient pickup or delivery straight to your doorstep.
        </p>

        </div>
     
    </div>
    </section>
    
  )
}

export default WhyFarmMarket

