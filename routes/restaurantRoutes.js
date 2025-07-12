import express from "express";
import {
  getRestaurants,
  addRestaurant,
  editRestaurant,
  removeRestaurant,
} from "../controllers/restaurantController.js";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", addRestaurant);
router.put("/:id", editRestaurant);
router.delete("/:id", removeRestaurant);

export default router;
