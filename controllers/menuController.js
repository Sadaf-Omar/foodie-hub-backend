import {
  addMenuItem as addItem,
  getMenuItemsByRestaurant,
  updateMenuItem,
  deleteMenuItem,
} from "../models/menuModel.js";

export const addMenuItem = async (req, res) => {
  const { restaurantId, name, price, available } = req.body;
  const item = await addItem(restaurantId, name, price, available);
  res.status(201).json(item);
};

export const getMenu = async (req, res) => {
  const { restaurantId } = req.params;
  const items = await getMenuItemsByRestaurant(restaurantId);
  res.json(items);
};

export const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, price, available } = req.body;
  const updated = await updateMenuItem(id, name, price, available);
  res.json(updated);
};

export const removeMenu = async (req, res) => {
  const { id } = req.params;
  await deleteMenuItem(id);
  res.status(204).send();
};
