import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '' 
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationVoted(state, action) {
      state.message = action.payload; 
    },
    clearNotificationVoted(state) {
      state.message = ''; 
    },
    setNotificationCreated(state, action) {
        state.message = action.payload
    },  
    clearNotificationCreated(state) {
        state.message = ''; 
    },
  },
});

export const { setNotificationVoted, clearNotificationVoted, setNotificationCreated, clearNotificationCreated } = notificationSlice.actions;
export default notificationSlice.reducer;