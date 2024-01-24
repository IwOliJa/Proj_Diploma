import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postSale = createAsyncThunk(
  "user/postSale",
  async ( userForm, { rejectWithValue } ) => {
    try {
      const response = await fetch( "http://localhost:3333/sale/send", {
        method: "POST",
        body: JSON.stringify( { userForm } ),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      } );
      if ( !response.ok ) {
        throw new Error( "Server Error!" );
      }
      const data = await response.json();
      return data;
    } catch ( error ) {
      return rejectWithValue( error.message );
    }
  }
);

export const userSlice = createSlice( {
  name: "user",
  initialState: {
    status: null,
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( postSale.pending, ( state, action ) => {
        state.status = "pending";
      } )
      .addCase( postSale.fulfilled, ( state, action ) => {
        state.status = "fulfilled";
        console.log( action.payload );
      } )
      .addCase( postSale.rejected, ( state, action ) => {
        state.status = "rejected"
      } )
  }
} )


export default userSlice.reducer;
