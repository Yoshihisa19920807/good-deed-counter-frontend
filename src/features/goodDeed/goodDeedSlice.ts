import { createSlice } from '@reduxjs/toolkit';
export interface goodDeedState {
  id: string;
  title: string;
  count: string;
  details: string;
  created_at: Date;
  updated_at: Date;
}

const initialState: goodDeedState = {
  id: '',
  title: '',
  count: '',
  details: '',
  created_at: new Date('1900-01-01'),
  updated_at: new Date('1900-01-01'),
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'hoge': {
      return;
    }
    default: {
      return state;
    }
  }
}

export const goodDeedSlice = createSlice({
  name: 'goodDeed',
  initialState,
  reducers: { reducer },
});
