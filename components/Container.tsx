import React from 'react'

const Container = ({ children }: { children: React.ReactElement }): JSX.Element => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full max-w-5xl flex items-center justify-between'>
                {children}
            </div>
        </div>
    )
}

export default Container;
