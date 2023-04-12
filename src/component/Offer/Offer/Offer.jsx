import React from 'react';
import OfferCart from '../OfferCart/OfferCart';
import dv1 from '../../../Assctes/vectors/dv1.jpg'
import dv2 from '../../../Assctes/vectors/dv2.jpg'
import dv3 from '../../../Assctes/vectors/dv3.jpg'
import dv4 from '../../../Assctes/vectors/dv4.jpg'
const Offer = () => {
    const offerData=[
        {
            id :0,
            name : "Qualified Expertise",
            pic : dv1,
            description : "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to."
        },
        {
            id :1,
            name : "Dedicated Teamhas justice",
            pic : dv2,
            description : "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet!"
        },
        {
            id :2,
            name : "Continuous Supervision",
            pic : dv3,
            description : "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling. Inspiring, invest synergy capacity building, white paper; silo, unprecedented challenge B-corp problem-solvers."
        },
        {
            id :3,
            name : "Collaborative Process",
            pic : dv4,
            description : "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse and Mrs Falani were up to no good with a bunch of crook pikelets."
        },
    ]
    return (
        <div className="w-full bg-[#020A1C]">
            <div className="work-bg ">
            <div className='md:w-[85%] w-[98%] pt-8 pb-12 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
              <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">How We Develop <span className="shadow-tx">Software</span></h1>
              <p className="text-center mt-8 text-blue-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
                doloremque rem aperiam, eaque ipsa quae.
              </p>

              <div className="grid md:grid-cols-4 grid-cols-1 gap-14 mt-16">
                    {
                        offerData.map(offerData => <OfferCart key={offerData.id} offerData={offerData} />)
                    }
              </div>
        </div>
            </div>
        </div>
    );
};

export default Offer;