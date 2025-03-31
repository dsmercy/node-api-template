const { Item, items } = require("../models/Item");

// Create Item
exports.createItem = (req, res) => {
  const newItem = new Item(items.length + 1, req.body.name, req.body.description);
  items.push(newItem);
  res.status(201).json(newItem);
};

// Get All Items
exports.getItems = (req, res) => {
  res.json(items);
};

// Get Item by ID
exports.getItemById = (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

// Update Item
exports.updateItem = (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  item.name = req.body.name || item.name;
  item.description = req.body.description || item.description;
  res.json(item);
};

// Delete Item
exports.deleteItem = (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });
  items.splice(index, 1);
  res.json({ message: "Item deleted successfully" });
};