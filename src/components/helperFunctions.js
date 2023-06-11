import client from "../app/client.js";

const helperFunctions = {
  getRestaurants: async (token) => {
    try {
      const data = await client.get("/restaurants", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  },

  singleRestaurant: async (id) => {
    try {
      const data = await client.get(`/restaurants/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },

  deleteRestaurant: async (id) => {
    try {
      const data = await client.delete(`/restaurants/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  },

  createRestaurant: async (restaurant) => {
    try {
      const response = await client.post("/restaurants", restaurant);
      return response;
    } catch (error) {
      return error;
    }
  },

  updateRestaurant: async (id, data) => {
    try {
      const response = await client.put(`/restaurants/${id}`, data);
      return response;
    } catch (error) {
      return error;
    }
  },

  uploadImage: async (id, image) => {
    try {
      const data = await client.post(`/restaurants/upload/${id}`, image);
      return data;
    } catch (error) {
      return error;
    }
  },

  loginUser: async (data) => {
    try {
      const response = await client.post("/users", data);
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default helperFunctions;
