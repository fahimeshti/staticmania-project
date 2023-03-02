import Link from 'next/link';
import React from 'react'

const Topbar = (): JSX.Element => {
    return (
        <div className='w-full h-[72px] flex items-center justify-center'>
            <div className='w-full max-w-6xl flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-3xl'>{'{Finsweet'}</h1>
                </div>
                <div>
                    <Link href={'/about'}>
                        <span className='text-base'>About</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
