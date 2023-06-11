import { act, fireEvent, render, waitFor } from "@testing-library/react";
import Dashboard from "../pages/dashboard.js";
import NewRestaurant from "../modals/newRestaurant.js";
import Row from "../components/row.js";
import { BrowserRouter as Router } from "react-router-dom";
import SingleRestaurant from "../pages/singlepage.js";

const restaurant = {
  name: "Nashib",
  cuisineType: "Ugandan",
  location: "Kampala",
};
const MyRow = ({ restaurant }) => {
  const myFunction = jest.fn();
  return (
    <Router>
      <Row
        restaurant={restaurant}
        grabRestaurant={myFunction}
        grabRestaurantId={myFunction}
      />
    </Router>
  );
};

const MySinglePage = () => {
  return (
    <Router>
      <SingleRestaurant />
    </Router>
  );
};

describe("Dashboard", () => {
  it("tests that we navigate to the restaurant details when the view button is clicked.", async () => {
    const { getByRole } = render(<MyRow restaurant={restaurant} />);
    const { getByTestId } = render(<MySinglePage />);
    const btn = getByRole("button", { name: "View" });
    const text = getByTestId("details").textContent;
    await act(() => fireEvent.click(btn));
    expect(text).toBe("Restaurant Details");
  });

  it("tests that we navigate to the dashboard when the view button is clicked.", async () => {
    const { getByRole } = render(<MySinglePage />);
    const { getByText } = render(<MyRow restaurant={restaurant} />);
    const backBtn = getByRole("button", { name: "Back" });
    const deleteBtn = getByText("Delete");
    await act(() => fireEvent.click(backBtn));
    expect(deleteBtn).toBeInTheDocument();
  });

  it("tests that the spinner shows when the image is being uploaded", async () => {
    const { getByPlaceholderText, getByTestId } = render(<MySinglePage />);
    const uploadBtn = getByPlaceholderText("Image");
    const loader = getByTestId("loader");
    await act(() => fireEvent.change(uploadBtn, { target: { value: "" } }));
    expect(loader).toBeVisible();
  });
});
