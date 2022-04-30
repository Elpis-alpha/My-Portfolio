import { createSlice } from '@reduxjs/toolkit'


const emailSlice = createSlice({

  name: "email",

  initialState: {

    name: "",

    email: "",

    message: "",

    serviceMessage: ""

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

    setServiceMessage: (state, { payload }) => {

      state.serviceMessage = payload

    },

  }

})

export default emailSlice.reducer;

export const { setEmail, clearAll, setMessage, setName, setServiceMessage } = emailSlice.actions
