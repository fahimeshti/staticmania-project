import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const images = [
    '/assets/podcast/ApplePodcast.svg',
    '/assets/podcast/SoundCloud.svg',
    '/assets/podcast/GooglePodcast.svg',
    '/assets/podcast/Spotify.svg',
]

const PodcastSection = (): JSX.Element => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full max-w-6xl flex items-center justify-between'>
                <h2 className='w-full font-semibold text-2xl'>Podcast Available On</h2>
                <div className='w-full flex items-center justify-end gap-10 -mr-8'>
                    {
                        images.map((image, idx) => (
                            <picture key={idx} className='block w-[174px] h-[36px] relative object-contain'>
                                <Link href={'#'}>
                                    <Image
                                        src={image}
                                        fill
                                        alt={`image`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className='w-full h-full object-contain'
                                    />
                                </Link>
                            </picture>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PodcastSection;
