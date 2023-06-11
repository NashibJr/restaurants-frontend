import React, { useState } from "react";
import Input from "../components/input.js";
import Button from "../components/button.js";
import Modal from "./modal.js";
import helperFunctions from "../components/helperFunctions.js";
import Alert from "../components/alert.js";

const UpdateRestaurantModal = ({ restaurant, updateState }) => {
  const [state, setState] = useState({
    name: "",
    cuisineType: "",
    location: "",
  });
  const { _id } = restaurant;
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    setState({
      name: restaurant.name,
      cuisineType: restaurant.cuisineType,
      location: restaurant.location,
    });
  }, [restaurant]);

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleSubmit = async () => {
    try {
      const data = { ...state };
      if (!data.name) {
        delete data.name;
      }
      if (!data.cuisineType) {
        delete data.cuisineType;
      }
      if (!data.location) {
        delete data.location;
      }
      const response = await helperFunctions.updateRestaurant(_id, data);
      updateState(response.data.restaurant);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Update Restaurant" modalId="updateRestaurantModal">
      {message ? (
        <Alert message={message} />
      ) : (
        <form>
          <Input
            type="text"
            name="name"
            value={state.name ?? ""}
            handleChange={handleChange}
            placeholder="Restaurant name"
          />
          <Input
            type="text"
            name="cuisineType"
            value={state.cuisineType ?? ""}
            handleChange={handleChange}
            placeholder="Cuisine"
          />
          <Input
            type="text"
            name="location"
            value={state.location ?? ""}
            handleChange={handleChange}
            placeholder="Location"
          />
          <div className="mt-3">
            <Button label="Submit" onClickEvent={handleSubmit} />
          </div>
        </form>
      )}
    </Modal>
  );
};

export default UpdateRestaurantModal;
