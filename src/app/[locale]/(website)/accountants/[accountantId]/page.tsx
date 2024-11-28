import React from 'react'
import { getLocale } from 'next-intl/server';
import AccountantProfile from '../../accountants/_accountant-profile'
const page = async ({
  params: { accountantId },

}: {
  params: {
    accountantId: number;
  };
}) => {

  const locale = await getLocale()
  return (
    <div>
    <AccountantProfile params={{
        accountantId: 0
      }}  />
    </div>
  )
}

export default page