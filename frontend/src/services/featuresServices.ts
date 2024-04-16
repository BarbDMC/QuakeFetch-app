import { axiosInstance } from '../config/axiosInstance';

export const getFeatures = async (page: number) => {
  try {
    const response = await axiosInstance.get(`features`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getFeature = async (id: string) => {
  try {
    const response = await axiosInstance.get(`features/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (comment: string, id: number) => {
  try {
    const response = await axiosInstance.post(`features/${id}/comments`, { comment: { body: comment } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
