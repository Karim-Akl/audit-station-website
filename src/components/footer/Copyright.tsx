"use client";
import { useTranslations } from 'next-intl';
import React from 'react';


const Copyright: React.FC = () => {
    const t = useTranslations("contact");
    // Add your component logic here

    return (
        <p className='text-black font-black'>{t("copyRight")}</p>
    );
};

export default Copyright;