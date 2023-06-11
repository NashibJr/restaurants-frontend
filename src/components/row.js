import React from "react";
import Button from "./button.js";
import { useNavigate } from "react-router-dom";

const Row = ({ restaurant, grabRestaurantId, grabRestaurant }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.cuisineType}</td>
      <td>{restaurant.location}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#updateRestaurantModal"
          onClick={() => grabRestaurant(restaurant)}
        >
          Update
        </button>
      </td>
      <td>
        <Button
          label="View"
          onClickEvent={() => navigate(`/singlerestaurants/${restaurant._id}`)}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#deleteRestaurantModal"
          onClick={() => grabRestaurantId(restaurant._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
