import React from 'react';
import ICard from '@/components/cards/ICard';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const UsersPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ICard>
      <Typography variant="h5" fontWeight={600}>
        {t('Users List')}
      </Typography>
    </ICard>
  );
};

export default UsersPage;
