import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  VendorBasicDetails: [],
  // VendorTaxDetails: [],
  // VendorBankDetails: []
}

const vendorSlice = createSlice({
  name: 'VendorInfo',
  initialState,
  reducers: {
    addVendorBasicDetails: (state, action) => {
      
      state.VendorBasicDetails.push(action.payload);
    }
    // addVendorTaxDetails: (state, action) => {
    //   state.VendorTaxDetails.push(action.payload);
    // },
    // addVendorBankDetails: (state, action) => {
    //   state.VendorBankDetails.push(action.payload);
    // },
  },
});

export const { addVendorBasicDetails} =
  vendorSlice.actions;



export default vendorSlice.reducer