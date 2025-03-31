const express = require("express");
const { createItem, getItems, getItemById, updateItem, deleteItem } = require("../controllers/itemController");

const router = express.Router();

///item routes
router.post("/items/", createItem);
router.get("/items/", getItems);
router.get("/items/:id", getItemById);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

module.exports = router;