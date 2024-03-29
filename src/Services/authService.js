import axios from "./axiosConfig"; // Adjust the import path as needed
import toast from "react-hot-toast";

const authService = {
  login: async (data) => {
    try {
      const sendData = {
        email: data.email.toString(), // Use toString() instead of ToString()
        password: data.password,
      };

      const response = await axios.post("/api/login", sendData);
      return response.data; // Assuming the API returns a token or user object
    } catch (error) {
      if (error.response.data.error.errors.email) {
        toast.error(error.response.data.error.errors.email);
      } else if (error.response.data.error.errors.password) {
        toast.error(error.response.data.error.errors.password);
      } else toast.error(error.response.data.error.message);
      throw new Error(error.response.data);
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post("/api/register", userData);
      return response.data; // Assuming the API returns a success message or user object
    } catch (error) {
      // alert()
      if (error.response.data.error.errors.email) {
        toast.error(error.response.data.error.errors.email);
      } else if (error.response.data.error.errors.password) {
        toast.error(error.response.data.error.errors.password);
      } else toast.error(error.response.data.error.message);

      throw new Error(error.response.data);
    }
  },

  logout: async () => {
    try {
      await axios.post("/api/logout");
      // Optionally clear token or user data from localStorage or state
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Other methods like refreshToken, isAuthenticated, etc. can be added here
};

export default authService;
