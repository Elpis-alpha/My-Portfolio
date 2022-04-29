import { createSlice } from '@reduxjs/toolkit'


const displaySlice = createSlice({

  name: "email",

  initialState: {

    name: "",

    email: "",

    message: ""

  },

  reducers: {

    setName: (state, { payload }) => {

      state.name = payload

    },

    setEmail: (state, { payload }) => {

      state.email = payload

    },

    setMessage: (state, { payload }) => {

      state.message = payload

    },

    clearAll: (state) => {

      state.message = ""

      state.email = ""

      state.name = ""

    },

  }

})

export default displaySlice.reducer;

export const { setEmail, clearAll, setMessage, setName } = displaySlice.actions
