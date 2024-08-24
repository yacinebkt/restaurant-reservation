import React from 'react';
import { Box, Typography } from '@mui/material';
import ICard from '@/components/cards/ICard';
import ListData from '../../components/list/table';
import { useTranslation } from 'react-i18next';

const ReservationsList: React.FC = () => {
  const {t} = useTranslation()
  return (
    <ICard>
      <Box className="flex flex-col gap-4 ">
        <Typography variant="h5" fontWeight={600}>
          {t("Reservations List")}
        </Typography>
        <ListData />
      </Box>
    </ICard>
  );
};

export default ReservationsList;
