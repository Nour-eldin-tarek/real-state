import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/courses`);
  return response.data;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (courseId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/courses/${courseId}`);
  return response.data;
});
