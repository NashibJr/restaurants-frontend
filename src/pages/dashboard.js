import React, { useEffect, useState } from "react";
import Row from "../components/row.js";
import Card from "../components/card.js";
import NewRestaurant from "../modals/newRestaurant.js";
import UpdateRestaurantModal from "../modals/UpdateRestaurant.js";
import DeleteModal from "../modals/deleteModal.js";
import helperFunctions from "../components/helperFunctions.js";
import Button from "../components/button.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantId, setRestaurantId] = useState("");
  const [message, setMessage] = useState("");
  const [restaurant, setRestaurant] = useState({});
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await helperFunctions.getRestaurants(token);
      setRestaurants(data.data.restaurants);
    } catch (error) {
      alert(error.message);
    }
  };

  const setGrabbedId = (id) => {
    setRestaurantId(id);
  };

  const upDateDelete = (deletedRestaurant) =>
    setRestaurants((prevState) =>
      prevState.filter(
        (restaurants) => restaurants._id !== deletedRestaurant._id
      )
    );

  const handleDelete = async () => {
    try {
      const response = await helperFunctions.deleteRestaurant(restaurantId);
      upDateDelete(response.data.restaurants);
      setMessage(response.data.restaurants.message);
    } catch (error) {
      console.log(error);
    }
  };

  const setRestaurantObj = (restaurantObj) => {
    setRestaurant(restaurantObj);
  };

  const updateState = (updatedRestaurant) => {
    setRestaurants((prevState) =>
      prevState.map((item) => {
        if (item._id === updatedRestaurant._id) {
          return updatedRestaurant;
        }
        return item;
      })
    );
  };

  const addRestauratToState = (newRestaurant) => {
    setRestaurants((prevState) => [...prevState, newRestaurant]);
  };

  return (
    <div className="container">
      <div className="row h-100">
        <div className="mt-3">
          <header className="row">
            <h2 className="col-sm-10 fw-bold">Restaurants</h2>
            <div className="col-sm-2 d-flex">
              <div style={{ marginRight: 10 }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#newRestaurantModal"
                  data-bs-whatever="@mdo"
                  style={{ width: 150 }}
                >
                  Add Restaurant
                </button>
              </div>
              <div>
                <Button label="Logout" onClickEvent={() => navigate("/")} />
              </div>
            </div>
          </header>
          <main className="mt-4 w-100">
            <Card>
              <table className="table table-hover mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Cuisine type</th>
                    <th>Location</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {restaurants.map((restaurant) => (
                    <Row
                      key={restaurant._id}
                      restaurant={restaurant}
                      grabRestaurantId={setGrabbedId}
                      grabRestaurant={setRestaurantObj}
                    />
                  ))}
                </tbody>
              </table>
            </Card>
          </main>
        </div>
      </div>

      <NewRestaurant updatedRestaurants={addRestauratToState} />
      <UpdateRestaurantModal
        restaurant={restaurant}
        updateState={updateState}
      />
      <DeleteModal onDeleteRestaurant={handleDelete} message={message} />
    </div>
  );
};

export default Dashboard;
