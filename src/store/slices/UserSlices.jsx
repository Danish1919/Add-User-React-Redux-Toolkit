import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            const index = state.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1)}
        },
        deleteAllUsers: (state) => {
            return []; // Clear the entire user state
        }
    }
});

export const { addUser, removeUser, deleteAllUsers } = userSlice.actions;
export default userSlice.reducer;
