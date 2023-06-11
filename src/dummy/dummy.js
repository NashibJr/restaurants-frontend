import { nanoid } from "@reduxjs/toolkit";
import chinese from "../images/chinese.jpg";
import english from "../images/english.jpg";
import italy from "../images/italy.jpg";
import ntinda from "../images/ntinda.jpg";
import german from "../images/german.jpg";

const restaurants = [
  {
    id: nanoid(),
    name: "Ntinda Restaurant",
    type: "Ugandan Cuisine",
    location: "Ntinda",
    image: ntinda,
  },
  {
    id: nanoid(),
    name: "London Restaurant",
    type: "English Cuisine",
    location: "London",
    image: english,
  },
  {
    id: nanoid(),
    name: "Beijing Restaurant",
    type: "Chinese Cuisine",
    location: "Beijing",
    image: chinese,
  },
  {
    id: nanoid(),
    name: "Turin Restaurant",
    type: "Italian Cuisine",
    location: "Turin",
    image: italy,
  },
  {
    id: nanoid(),
    name: "Munich Restaurant",
    type: "German Cuisine",
    location: "Munich",
    image: german,
  },
];

export default restaurants;
