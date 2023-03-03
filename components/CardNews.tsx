import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

type MyType = {
    image: StaticImageData;
    title: string;
    text: string;
}

const CardNews = ({ image, title, text }: MyType): JSX.Element => {
    return (
        <div className='col-span-1 h-full flex flex-col items-center justify-between'>
            <picture className='relative block w-full h-[320px]'>
                <Image
                    src={image}
                    fill
                    alt={`Card`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='w-full h-full object-cover'
                />
            </picture>

            <div className='space-y-3 mt-4'>
                <h3 className='text-2xl font-semibold'>
                    {title}
                </h3>
                <p className='text-base'>
                    {text}
                </p>
                <div className='font-semibold text-base text-[#503AE7] flex gap-2 items-center'>
                    <Link href={'#'}>
                        <span>Read Now</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardNews;
