import Image, { StaticImageData } from 'next/image';
import React from 'react'

const Card = ({ image }: { image: StaticImageData }): JSX.Element => {
    return (
        <div className='w-[416px]'>
            <picture className='relative block w-full h-[256px] object-contain'>
                <div className='w-10 h-10 absolute top-4 right-4 z-10'>
                    <Image
                        src='/assets/episodes/microp.svg'
                        fill
                        alt={`Card`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='w-full h-full object-contain'
                    />
                </div>
                <Image
                    src={image}
                    fill
                    alt={`Card`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='w-full h-full object-contain'
                />
            </picture>

            <div className='space-y-3 mt-4'>
                <h3 className='text-2xl font-semibold'>
                    Ep 1: How to build a world-class business brand
                </h3>
                <p className='text-base'>
                    Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <button className='font-semibold text-base text-[#503AE7] flex gap-2 items-center'>
                    <span className='bg-[#503AE7] h-8 w-8 rounded-full flex items-center justify-center'>
                        <svg className='-mr-1' width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33337 5.99996L0.444486 11.6452L0.444487 0.354761L9.33337 5.99996Z" fill="white" />
                        </svg>
                    </span>
                    <span>Listen Now</span>
                </button>
            </div>
        </div>
    )
}

export default Card;
