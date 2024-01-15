import { createSlice } from "@reduxjs/toolkit";

export const modaleSlice = createSlice( {
	name: "modale",
	initialState: {
		show: false
	},
	reducers: {
		setShow: ( state, action ) => {
			state.show = !state.show;
		},
	},
} );

export const { setShow } = modaleSlice.actions;
export default modaleSlice.reducer;
