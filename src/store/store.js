import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
// localStorage 저장 라이브러리
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
const reducers = combineReducers({
  user: userSlice.reducer,
});
const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: presistedReducer,
  // 임시로 middleware 체크 기능 제거
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export default store;
