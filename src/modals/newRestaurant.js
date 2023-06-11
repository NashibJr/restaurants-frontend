import React, { useState } from "react";
import Input from "../components/input.js";
import Button from "../components/button.js";
import Modal from "./modal.js";
import helperFunctions from "../components/helperFunctions.js";
import Alert from "../components/alert.js";

const NewRestaurant = ({ updatedRestaurants }) => {
  const [state, setState] = useState({
    name: "",
    cuisineType: "",
    location: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const createRestaurant = async () => {
    try {
      const data = { ...state };
      const response = await helperFunctions.createRestaurant(data);
      setMessage(response.data.restaurant.message);
      updatedRestaurants(response.data.restaurant);
      setState({ name: "", cuisineType: "", location: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Add Restaurant" modalId="newRestaurantModal">
      {message ? (
        <Alert message={message} />
      ) : (
        <form>
          <Input
            type="text"
            name="name"
            value={state.name}
            handleChange={handleChange}
            placeholder="Restaurant name"
          />
          <Input
            type="text"
            name="cuisineType"
            value={state.cuisineType}
            handleChange={handleChange}
            placeholder="Cuisine"
          />
          <Input
            type="text"
            name="location"
            value={state.location}
            handleChange={handleChange}
            placeholder="Location"
          />
          <div className="mt-3">
            <Button label="Add" onClickEvent={createRestaurant} />
          </div>
        </form>
      )}
    </Modal>
  );
};

export default NewRestaurant;
