import Image from 'next/image';
import React from 'react'
import Container from './Container';
import Searchbar from './Searchbar';

function HeroSection() {
    return (
        <Container>
            <div className='w-full grid grid-cols-2 gap-4 my-20'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl font-bold'>
                        Become The Hero Of Your Own Story
                    </h1>
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                    <Searchbar />
                </div>
                <div className='w-full flex justify-end'>
                    <picture className='block w-80 h-64 relative object-contain'>
                        <Image
                            src='/assets/audio-track.svg'
                            fill
                            alt={`Logo`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className='w-full h-full object-contain'
                        />
                    </picture>
                </div>
            </div>
        </Container>
    )
}

export default HeroSection;
