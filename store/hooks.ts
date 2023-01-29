import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './index';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActionsCD = typedHooks.useStoreActions;
export const useStoreDispatchCD = typedHooks.useStoreDispatch;
export const useStoreStateCD = typedHooks.useStoreState;