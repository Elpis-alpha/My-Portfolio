import { configureStore } from "@reduxjs/toolkit";

import messagesSlice from "./slice/messagesSlice";

import displaySlice from "./slice/displaySlice";


const store = configureStore({

  reducer: {

    messages: messagesSlice,

    display: displaySlice

  }

});


export default store;