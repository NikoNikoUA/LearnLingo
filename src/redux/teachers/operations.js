import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl =
  "https://learnlingo-acbd2-default-rtdb.europe-west1.firebasedatabase.app/";

axios.defaults.baseURL = baseUrl;

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAllTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
