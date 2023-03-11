import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  baseUrl: 'https://rickandmortyapi.com/api/character/?name=&status=&gender=',
  name: '',
  status: '',
  gender: ''
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.name = action.payload
    },
    setStatus: (state, action) => {
        state.status = action.payload
    },
    setGender: (state, action) => {
        state.gender = action.payload
    },
  },
})


export const { setName, setStatus, setGender } = filtersSlice.actions
export default filtersSlice.reducer