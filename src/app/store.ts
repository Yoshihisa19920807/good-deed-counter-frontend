import { configureStore } from '@reduxjs/toolkit';
import { goodDeedSlice } from '../features/goodDeed/goodDeedSlice';

const store = configureStore({
  reducer: {
    goodDeed: goodDeedSlice.reducer,
  },
});

export default store;
