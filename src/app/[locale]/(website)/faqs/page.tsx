// src/app/[locale]/(website)/faqs/page.tsx

import FormattedText from '@/components/formattedText/FormattedText';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { fetchData } from '@/lib/api/fetchData';
import { formatDateTime } from '@/lib/date/formatDateTime';

export default async function FAQs() {
  const data = await fetchData({ endPoint: '/api/public/faqs' });

  return (
    <div className='w-full grid grid-cols-1 gap-6'>
      {data &&
        data.map((faq: any) => (
          <div key={faq.id}>
            <Accordion
              type='single'
              collapsible
              className='space-y-6 w-full'
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-xl font-semibold text-[#1C1C1C]'>
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className='flex flex-col gap-2'>
                    <span>
                      <FormattedText htmlText={faq?.answer} />
                    </span>
                    <span>{formatDateTime(faq?.created_at)}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
    </div>
  );
}
