import React from 'react'
import Card from './Card';
import image1 from '../public/assets/episodes/photo-of-people-sitting-beside-table.png'
import image2 from '../public/assets/episodes/man-holding-black-smartphone-1220757.png'
import image3 from '../public/assets/episodes/photo-of-women-having-conversation-3194524.png'

const images = [
    image1,
    image2,
    image3
]

const RecentSection = (): JSX.Element => {
    return (
        <div className='w-full flex items-center justify-center my-24'>
            <div className='w-full max-w-6xl space-y-10'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <div>
                        <h2 className='font-bold text-[32px]'>Recent Episodes</h2>
                        <p className='text-base max-w-sm'>
                            Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
                        </p>
                    </div>
                    <div>
                        <button className='bg-[#503AE7] text-white py-3 px-8'>
                            See All Episiodes
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    {
                        images.map((image, idx) => (
                            <Card image={image} key={idx} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default RecentSection;
