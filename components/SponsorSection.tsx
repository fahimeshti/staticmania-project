import Image from 'next/image';
import React from 'react';
import image1 from '../public/assets/sponsors/Logo.svg'
import image2 from '../public/assets/sponsors/Logo1.svg'
import image3 from '../public/assets/sponsors/Logo2.svg'
import image4 from '../public/assets/sponsors/Logo3.svg'
import image from '../public/assets/sponsors/Logo4.svg'

const images = [
    image1,
    image2,
    image3,
    image4,
    image
]
function SponsorSection() {
    return (
        <div className='w-full flex items-center justify-center mt-20 -mb-28'>
            <div className='w-full max-w-6xl bg-[#503AE7] px-[72px]'>
                <h2 className='w-full font-bold text-[32px] my-[72px] text-white text-center'>Our Sponsors</h2>
                <div className='w-full flex items-center justify-between gap-8 pb-[80px]'>
                    {images.map((item, idx) => (
                        <picture key={idx} className='relative block min-w-[172px] min-h-[40px]'>
                            <Image
                                src={item}
                                fill
                                alt={`image`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='w-full h-full object-contain'
                            />
                        </picture>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SponsorSection;
