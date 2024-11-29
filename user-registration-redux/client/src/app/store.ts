import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoReducer from '../features/todo/todoSlice';
import { todoApi } from '../features/todo/todoApi';
import { loginAPI } from '../features/login/loginAPI';
import { usersAPI } from '../features/users/UsersAPI';

//auth persist config
const persistConfig = {
  key: 'auth',
  storage,
}

//combine all reducers
const rootReducer = combineReducers({
  todo: todoReducer,
  [loginAPI.reducerPath]: loginAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
  [todoApi.reducerPath]: todoApi.reducer
});

//apply pesist Reducer to only counter reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPI.middleware).concat(usersAPI.middleware).concat(todoApi.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
