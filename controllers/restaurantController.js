import {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../models/restaurantModel.js";

export const getRestaurants = async (req, res) => {
  const restaurants = await getAllRestaurants();
  res.json(restaurants);
};

export const addRestaurant = async (req, res) => {
  const { name, location } = req.body;
  const restaurant = await createRestaurant(name, location);
  res.status(201).json(restaurant);
};

export const editRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  const updated = await updateRestaurant(id, name, location);
  res.json(updated);
};

export const removeRestaurant = async (req, res) => {
  const { id } = req.params;
  await deleteRestaurant(id);
  res.status(204).send();
};
