import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import vial from '../images/vial.svg';
import { ResultPageLayout } from './ResultPageLayout';

// language changes, but this is currently described as the "non-PCR" test result
export const ResultRapidTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={vial}
      imageBg='bg-lightYellowBackground'
      imageAlt='vial'
      title={t('ResultRapidTest')}
      titleColor='text-bcBlueNav'
    >
      <div>
        <p>{t('ResultRapidTestDescription1')}</p>
        <p>{t('ResultRapidTestDescription2')}</p>
        <p>
          <Trans i18nKey='ResultRapidTestNotice'>
            <a
              className='underline text-bcBlueLink'
              href='https://www2.gov.bc.ca/gov/content/covid-19/info/testing#get'
              rel='noreferrer'
              target='_blank'
            >
              Find more information
            </a>
            on getting a rapid antigen test kit.
          </Trans>
        </p>
      </div>
    </ResultPageLayout>
  );
};
