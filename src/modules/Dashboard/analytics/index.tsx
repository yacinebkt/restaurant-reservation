import React from 'react';
import ICard from '@/components/cards/ICard';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ICard>
      <Typography variant="h5" fontWeight={600}>
        {t('Analytics Page')}
      </Typography>
    </ICard>
  );
};

export default AnalyticsPage;
