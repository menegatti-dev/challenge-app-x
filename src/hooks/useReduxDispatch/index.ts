import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/types';

// eslint-disable-next-line
export const useReduxDispatch = () => useDispatch<AppDispatch>();
