import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = (): JSX.Element => {
    return (
        <div className='bg-[#14142B] text-white'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full max-w-6xl pt-[200px] pb-[100px] grid grid-cols-5'>
                    <div className='col-span-1'>
                        <div className='relative w-52 min-h-[40px]'>
                            <Image
                                src='/Logo.svg'
                                fill
                                alt={`image`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </div>
                    <div className='col-span-3 w-full grid grid-cols-2 pl-32'>
                        {Object.keys(links).map(item => (
                            <ul key={item} className='w-fit col-span-1 pl-0'>
                                <li className='w-fit text-[20px] font-bold mb-8'>{item}</li>
                                {/* @ts-ignore */}
                                {links[item].map((link) => (
                                    <Link key={link} href={'#'}>
                                        <li className='w-fit text-base mb-4'>{link}</li>
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className='col-span-1 ml-auto'>
                        <ul className='flex flex-col gap-[42px] w-fit'>
                            <li className='text-[20px] font-bold'>Subscribe</li>
                            {images.map((image, idx) => (
                                <picture key={idx} className='block relative cursor-pointer'>
                                    <Image
                                        src={image.url}
                                        width={image.w}
                                        height={image.h}
                                        alt={`image`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className='w-fit h-fit object-contain'
                                    />
                                </picture>
                            ))

                            }
                        </ul>
                    </div>

                </div>
            </div>
            <div className='w-full bg-[#503AE7] py-5 text-center font-bold text-base'>
                © Copyright Finsweet 2021
            </div>
        </div>
    )
}

export default Footer;

const links = {
    Pages: [
        'Home',
        'Podcast',
        'Host',
        'Blog'
    ],
    'Reach Us': [
        'Contact',
        'About'
    ]
}

const images = [
    { url: '/assets/footer/Apple Podcast.svg', w: 182, h: 32 },
    { url: '/assets/footer/Soundcloud.svg', w: 174, h: 32 },
    { url: '/assets/footer/Google Podcast.svg', w: 196, h: 32 },
    { url: '/assets/footer/Spotify.svg', w: 128, h: 32 }
]