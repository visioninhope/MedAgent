'use client';

import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { languages, languageLabels } from '@/i18n/settings';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChange = (value: string) => {
        if (i18n.changeLanguage) {
            i18n.changeLanguage(value);
        }
    };

    return (
        <Select
            defaultValue={i18n.language || 'en'}
            style={{ width: 100 }}
            onChange={handleChange}
        >
            {languages.map((lang) => (
                <Option key={lang} value={lang}>
                    {languageLabels[lang]}
                </Option>
            ))}
        </Select>
    );
};

export default LanguageSwitcher;