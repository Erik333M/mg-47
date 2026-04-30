import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companyName: 'MG Armor Systems',
  heroMessage: 'Engineered Protection for High-Risk Environments',
}

const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
})

export const siteReducer = siteSlice.reducer
