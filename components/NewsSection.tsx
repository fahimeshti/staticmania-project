import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CardNews from './CardNews';
import image1 from '../public/assets/news/bitcoins.png'
import image2 from '../public/assets/news/top-view-of-assorted-gadgets-on-desk-3568520.png'

const cards = [
    {
        image: image1,
        title: 'Getting the first 100 customers for your business',
        text: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'
    },
    {
        image: image2,
        title: 'Getting the first 100 customers for your business',
        text: 'Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.'
    },
]
function NewsSection() {
    return (
        <div className='w-full flex items-center justify-center my-24'>
            <div className='w-full max-w-6xl flex flex-row gap-4 items-stretch'>
                <div className='w-[416px] h-[516px] bg-[#F4F2FF]'>
                    <div className='p-10'>
                        <h2 className='text-[32px] font-bold'>
                            Read our <br />
                            articles & news
                        </h2>
                        <Link href={'#'}>
                            <span className='text-[#503AE7] text-base font-semibold'>See More</span>
                        </Link>
                    </div>

                    <div className='relative w-full h-[320px]'>
                        <Image
                            src='/assets/news/bg.svg'
                            fill
                            alt={`image`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='w-full h-full object-contain'
                        />
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    {cards.map((item, idx) => (
                        <CardNews
                            key={idx}
                            image={item.image}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsSection;
