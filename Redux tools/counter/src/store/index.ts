import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './reducers/counterReducer';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
    key: "root",
    storage,
  };

const persistedReducer = persistReducer(persistConfig, counterReducer);
export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
