import Link from 'next/link'
import React from 'react'

export default function Tabs({ tabs, value }: {
    tabs?: {
        name: string,
        value: number
    }[],
    value?: number | string
}) {
    return (
        <div className='flex flex-row flex-wrap gap-4 ps-2'>
            {
                tabs?.map((tab) => (
                    <Link
                        key={tab.value}
                        href={`?value=${tab.value}`}
                        className={`${value == tab.value ? 'border-2 rounded-lg border-[#22B9DD] text-black' : 'text-[#A1A1A1]'} px-8 py-2 cursor-pointer`}
                    >
                        {tab.name}
                    </Link>))
            }
        </div>
    )
}
