// import { createSlice } from '@reduxjs/toolkit';

// const filterState = '';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterState,
//   reducers: {
//     filterUser(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { filterUser } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter: change } = filterSlice.actions;
