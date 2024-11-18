import Profile_component from '@/components/user/profile/profile_component'
import React from 'react'

export default async function page({ searchParams }: { searchParams: { [key: string]: number } }) {
    return (
        <div className='mb-20'>
            <Profile_component value={searchParams.value} />
        </div>
    )
}
