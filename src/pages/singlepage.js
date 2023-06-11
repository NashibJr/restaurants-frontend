import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/card.js";
import Button from "../components/button.js";
import helperFunctions from "../components/helperFunctions.js";
import Upload from "./upload.js";

const SingleRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});

  const getRestaurant = async () => {
    try {
      const data = await helperFunctions.singleRestaurant(id);
      setRestaurant(data.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => getRestaurant())();
  }, []);

  return (
    <div className="container mt-3 h-25">
      <div className="d-flex">
        <div className="mt-1 mb-5" style={{ width: "15vh" }}>
          <Button label="Back" onClickEvent={() => navigate("/dashboard")} />
        </div>
        <p className="h2 fw-bold m-1" data-testid="details">
          Restaurant Details
        </p>
      </div>
      <Card>
        <div className="mb-5">
          <img
            src={restaurant.image}
            height="300px"
            width="300px"
            alt=""
            role="button"
          />
        </div>
        <p className="h5 fw-bold">{restaurant.name}</p>
        <p>{restaurant.cuisineType}</p>
        <p>{restaurant.location}</p>
        <Upload id={id} />
      </Card>
    </div>
  );
};

export default SingleRestaurant;
