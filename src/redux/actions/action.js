import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../index";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getTopBrands = createAsyncThunk("topbrands", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get("/api/car/gettopbrands", config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getCarModals = createAsyncThunk("carmodals", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get("/api/car/mostvaluedmodels", config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getTotalValuation = createAsyncThunk(
  "total-valuation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/car/totalvaluations", config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getLatestCarValued = createAsyncThunk(
  "latest-valuation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/car/latestvaluedcar", config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
