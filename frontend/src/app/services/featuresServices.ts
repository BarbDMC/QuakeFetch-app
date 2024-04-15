import axios from 'axios';
import { axiosInstance } from '../config/axiosInstance';

export const getFeatures = async (page: number) => {
  try {
    const response = await axiosInstance.get(`features`);
    console.log("🚀 ~ getFeatures ~ response:", response)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (comment: string, id: number) => {
  try {
    const response = await axiosInstance.post(`features/${id}/comments`, { comment });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
