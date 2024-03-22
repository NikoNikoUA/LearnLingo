import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl =
  "https://learnlingo-acbd2-default-rtdb.europe-west1.firebasedatabase.app/";

axios.defaults.baseURL = baseUrl;

export const LIMIT = 4;

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (page = 1, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: LIMIT,
      });
      const response = await axios.get(`/teachers.json?${params}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllTeachers = createAsyncThunk(
  "teachers/fetchAllTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
