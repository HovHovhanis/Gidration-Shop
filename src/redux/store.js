

// import { configureStore } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REGISTER,
//     REHYDRATE,
//     PAUSE,
//     PURGE,
//     PERSIST
// } from 'redux-persist'
// import storage from "redux-persist/lib/storage";


// import gidrationReducer from "./gidrationSlice";

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,    
// }

// const persistedReducer = persistReducer(persistConfig, gidrationReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })

// export let persiston = persistStore(store)

