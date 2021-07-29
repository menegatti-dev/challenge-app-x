import { ReduxStore } from '@/store/types';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useReduxSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
