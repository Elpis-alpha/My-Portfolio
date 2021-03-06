import { createSlice } from '@reduxjs/toolkit'


const displaySlice = createSlice({

  name: "item",

  initialState: {

    works: "elpis"

  },

  reducers: {

    setWorks: (state, { payload }) => {

      state.works = payload

    },

    backWorks: (state) => {

      const worksList = state.works.split('/')

      worksList.pop()

      state.works = worksList.length === 0 ? "elpis" : worksList.join('/')

    },

    frontWorks: (state, { payload }) => {

      const worksList = state.works.split('/')

      worksList.push(payload)

      state.works = worksList.join('/')

    },

    sideWorks: (state, { payload }) => {

      const worksList = state.works.split('/')

      worksList.pop()

      worksList.push(payload)

      state.works = worksList.join('/')

    },

  }

})

export default displaySlice.reducer;

export const { setWorks, backWorks, frontWorks, sideWorks } = displaySlice.actions
