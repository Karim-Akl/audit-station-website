// src/app/[locale]/(website)/faqs/page.tsx

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BASE_URL } from '@/lib/actions/actions';
import { formatDateTime } from '@/lib/date/formatDateTime';

export default async function FAQs() {
  try {
    const res = await fetch(`${BASE_URL}/api/public/faqs`);

    if (!res.ok) {
      throw new Error('Failed to fetch FAQs');
    }

    const data = await res.json();
    const FAQs = data?.data || [];

    return (
      <div className='w-full grid grid-cols-1 gap-6'>
        {FAQs &&
          FAQs.map((faq: any) => (
            <div key={faq.id}>
              <Accordion type='single' collapsible className='space-y-6 w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='text-xl font-semibold text-[#1C1C1C]'>
                    {faq?.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-2'>
                      <span>{faq.answer}</span>
                      <span>{formatDateTime(faq.created_at)}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
      </div>
    );
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }
}
