'use client'
import { PhoneInput } from 'react-international-phone';

import 'react-international-phone/style.css';
import './style.css';
export default function InputPhone({
    width,
    error,
    inWidth,
    label,
    ...props
}: {
    width: string;
    inWidth: string;
    label: string;
    error: string;
} & React.ComponentProps<any>) {
    return (
        <>
            <div className={`flex ${width} flex-col relative font-medium text-black dark:text-white`}>
                <div className='mb-1 flex flex-row w-fit'>
                    <label
                        htmlFor='phone'
                        className={`dark:text-textColor text-black text-lg inputLabel `}
                    >
                        {label}
                    </label>
                </div>
                <div className='relative'>
                    <PhoneInput
                        className={`
              ${error ? 'border-red-500' : 'border-textColor'}
                        dark:text-white shadow
                        !bg-#0D0D0D
                        ps-1
                        mt-2
                            rounded-[4px] border-[1px]
                        h-[54px] input-phone-number
                        w-[100%] align-middle items-center
                        border-textColor
                        `}
                        countrySelectorStyleProps={{
                            required: true,
                            className: '!border-red-500 bg-#0D0D0D dark:!text-white',
                        }}
                        dialCodePreviewStyleProps={{
                            required: true,
                            className: '!bg-#0D0D0D',
                        }}
                        inputProps={{
                            required: true,
                            className:
                                'bg-opacity-50 text-gray-950 block border-transparent border-gray-700 h-[48px] w-[100%] ps-3 shadow-sm focus:border-0 focus:ring focus:ring-gray-200 !bg-transparent',
                        }}
                        defaultCountry='iq'
                        {...props}
                    />
                    {error && <div className='ps-2 !text-sm  text-red-500 w-full'>{error}</div>}
                </div>
            </div>
        </>
    );
}