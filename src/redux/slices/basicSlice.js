import { createSlice } from "@reduxjs/toolkit";
import {
  getCarModals,
  getLatestCarValued,
  getTopBrands,
  getTotalValuation,
} from "../actions/action";

const basicSlice = createSlice({
  name: "basic",
  initialState: {
    loading: false,
    data: null,
    error: null,
    success: false,
    topBrands: null,
    carModalsData: null,
    totalValuationData: null,
    latestCarValuationData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // getTopBrands
    builder.addCase(getTopBrands.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getTopBrands.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.topBrands = payload.data;
    });
    builder.addCase(getTopBrands.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });

    // getCarModals
    builder.addCase(getCarModals.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getCarModals.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.carModalsData = payload.data;
    });
    builder.addCase(getCarModals.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });

    // getTotalValuation
    builder.addCase(getTotalValuation.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getTotalValuation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.totalValuationData = payload.data;
    });
    builder.addCase(getTotalValuation.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });

    // getLatestCarValued
    builder.addCase(getLatestCarValued.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getLatestCarValued.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.latestCarValuationData = payload.data;
    });
    builder.addCase(getLatestCarValued.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });
  },
});

export default basicSlice.reducer;
