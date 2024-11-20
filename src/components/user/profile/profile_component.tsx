import Tabs from '@/components/tabs/tabs'
import React from 'react'

export default function Profile_component({ value }: { value: number | string }) {
    return (
        <div>
            <Tabs value={value} tabs={[{ name: 'Profile', value: 1 }, { name: 'Location', value: 2 }, { name: 'Social', value: 3 }, { name: 'Payment Method', value: 4 }, { name: 'Password', value: 5 }, { name: 'Delete Account', value: 6 }]} />
        </div>
    )
}
