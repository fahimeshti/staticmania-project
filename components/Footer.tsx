import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Footer() {
    return (
        <div className='bg-[#14142B] text-white'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full max-w-6xl pt-[200px] pb-[100px] grid grid-cols-3'>
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
                    <div className='col-span-1 w-full grid grid-cols-2'>
                        {Object.keys(links).map(item => (
                            <ul key={item} className='col-span-1'>
                                <li className='text-[20px] font-bold mb-8'>{item}</li>
                                {/* @ts-ignore */}
                                {links[item].map((link) => (
                                    <Link key={link} href={'#'}>
                                        <li className='text-base mb-4'>{link}</li>
                                    </Link>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className='col-span-1'>
                        <ul>
                            <picture className='block min-w-[150px] min-h-[240px] relative object-contain cursor-pointer'>
                                <Image
                                    src='/Links.svg'
                                    fill
                                    alt={`image`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className='w-full h-full object-contain'
                                />
                            </picture>
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
    ],
    // Subscribe: [

    // ]
}

const images = [
    '/assets/podcast/ApplePodcast.svg',
    '/assets/podcast/SoundCloud.svg',
    '/assets/podcast/GooglePodcast.svg',
    '/assets/podcast/Spotify.svg',
]