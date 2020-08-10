import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducer';
import authReducer from './auth/auth-reducer';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
