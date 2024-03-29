import axios from "axios";

const userService = {
  getUserData: async (token) => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.get("/api/user");
      return response.data; // Assuming the API returns user data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  updateProfile: async (userData) => {
    try {
      // send as form data
      const response = await axios.post("/api/user", userData);
      return response.data; // Assuming the API returns updated user data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  resetPassword: async (email) => {
    try {
      const data = {
        email: email.email.toString(),
      };
      const response = await axios.post("/api/reset-password", data);
      return response.data; // Assuming the API returns a success message or confirmation
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  },
  updatePassword: async (data) => {
    try {
      const sendData = {
        token: data.token,
        password: data.password,
      };
      const response = await axios.post("/api/update-password", sendData);
      return response.data; // Assuming the API returns a success message or confirmation
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  },

  verifyEmail: async (otp) => {
    try {
      const response = await axios.post("/api/verify-email", { otp });
      return response.data; // Assuming the API returns a success message or confirmation
    } catch (error) {
      throw new Error(error.response.data.error.message);
    }
  },

  resendOtp: async () => {
    try {
      const response = await axios.post("/api/resend-verify-email-otp");
      return response.data; // Assuming the API returns a success message or confirmation
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Other methods like changePassword, deleteUser, etc. can be added here
};

export default userService;
