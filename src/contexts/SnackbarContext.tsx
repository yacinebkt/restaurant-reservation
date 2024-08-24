import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Snackbar } from '@mui/material';

import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

interface SnackbarProviderProps {
  children: ReactNode;
}

//  AlertColor = 'success' | 'error' | 'warning' | 'info';

type AlertColorType = AlertColor | undefined;

const SnackbarContext = createContext<any | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<AlertColorType>('info');

  const openSnackbar = ({ message, status }: { message: string; status: AlertColorType }) => {
    setMessage(message);
    setIsOpen(true);
    setStatus(status);
  };

  const closeSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar, isOpen, message, status }}>
      {children}

      <Snackbar open={isOpen} autoHideDuration={2500} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity={status || 'info'} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
