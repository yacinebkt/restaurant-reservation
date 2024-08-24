import { ConfigContext } from '@/contexts/LayoutConfigContext';
import { useContext } from 'react';

const useLayoutConfig = () => useContext(ConfigContext);

export default useLayoutConfig;
