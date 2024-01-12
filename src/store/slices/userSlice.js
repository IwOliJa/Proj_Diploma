import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postSale = createAsyncThunk(
  "sale/postSale",
  async (userForm, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        body: JSON.stringify({ userForm }),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      });
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    phone: "",
    email: "",
    errorsField: {
      name: {
        show: false,
        text: "",
      },
      phone: {
        show: false,
        text: "",
      },
      email: {
        show: false,
        text: "",
      },
    },
  },

  reducers: {
    updateValue: (state, action) => {
      console.log(action.payload);
      state[action.payload.key] = action.payload.value;
    },

    validateField: (state, action) => {
      const { key, value } = action.payload;
      let hasError = false;
      let errorMessage = "";

      if (value === "") {
        errorMessage = "please fill in this field!";
        hasError = true;
      }

      state.errorsField[action.payload.key] = {
        show: hasError,
        text: errorMessage,
      };

      return !hasError;
    },
  },
});
export const { updateValue, validateField } = userSlice.actions;
export default userSlice.reducer;
