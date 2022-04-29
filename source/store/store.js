import { configureStore } from "@reduxjs/toolkit";

import messagesSlice from "./slice/messagesSlice";

import displaySlice from "./slice/displaySlice";

import emailSlice from "./slice/emailSlice";


const store = configureStore({

  reducer: {

    messages: messagesSlice,

    display: displaySlice,

    email: emailSlice,

  }

});


export default store;