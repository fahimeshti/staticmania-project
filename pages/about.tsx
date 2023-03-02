import Footer from '@/components/Footer';
import SponsorSection from '@/components/SponsorSection';
import Topbar from '@/components/Topbar';
import { NextPage } from 'next';
import React from 'react'

const About: NextPage = () => {
    return (
        <div>
            <Topbar />
            <section className='w-full flex r justify-center'>
                <div className='w-full max-w-4xl pt-32 pb-20 space-y-8'>
                    <h1 className='text-[48px] font-bold leading-none'>About Finsweet <br /> Podcast</h1>
                    <p className='max-w-[480px] text-base'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <button className='bg-[#503AE7] text-white px-8 py-3'>
                        Subscribe Now!
                    </button>
                </div>
            </section>
            <SponsorSection />
            <Footer />
        </div>
    )
}

export default About;
