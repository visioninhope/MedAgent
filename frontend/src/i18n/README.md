# Internationalization (i18n)

This directory contains the internationalization (i18n) resource files for the MedAgent frontend project.

## Directory Structure

```
src/i18n/
├── README.md
├── settings.ts      # i18n configuration file
├── index.ts        # i18n initialization file
├── en/             # English translations
│   └── common.json # General translation file
├── zh/             # Chinese translations
│   └── common.json # General translation file
└── de/             # German translations
    └── common.json # General translation file
```

## Usage Instructions

1. Adding a new language:
   - Add the new language code to the `languages` array in `settings.ts`
   - Create a new translation folder and `common.json` under the corresponding language code

2. Adding a new translation key:
   - Add the same key to `common.json` in all languages
   - Organize translation content using nested objects

3. Using in components:
```tsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  return <div>{t('key.subkey')}</div>;
}
```

## Supported Languages

- English (en)
- Chinese (zh)
- German (de)

## File Naming Convention

- Use lowercase letters
- Use ISO 639-1 language codes as folder names
- Translation files use .json format

## Translation File Structure

Each language's translation file should follow the same structure:

```json
{
  "section": {
    "key": "translation"
  }
}
```

## Notes

1. Ensure all language translation files have consistent key structures
2. Ensure all translation keys have corresponding translation content
3. Use semantic key names for easy maintenance
4. Regularly check and update translation content