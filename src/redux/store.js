// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactSlice';
// import { filterReducer } from './filterSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    data: contactReducer,
    filter: filterSlice.reducer,
  },
});
