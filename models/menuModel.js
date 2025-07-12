import pool from "./db.js";

export const addMenuItem = async (
  restaurantId,
  name,
  price,
  available = true
) => {
  const result = await pool.query(
    `INSERT INTO menu_items (restaurant_id, name, price, available)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [restaurantId, name, price, available]
  );
  return result.rows[0];
};

export const getMenuItemsByRestaurant = async (restaurantId) => {
  const result = await pool.query(
    `SELECT * FROM menu_items WHERE restaurant_id = $1`,
    [restaurantId]
  );
  return result.rows;
};

export const updateMenuItem = async (id, name, price, available) => {
  const result = await pool.query(
    `UPDATE menu_items SET name = $1, price = $2, available = $3
     WHERE id = $4 RETURNING *`,
    [name, price, available, id]
  );
  return result.rows[0];
};

export const deleteMenuItem = async (id) => {
  await pool.query(`DELETE FROM menu_items WHERE id = $1`, [id]);
};
