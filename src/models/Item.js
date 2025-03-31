class Item {
    constructor(id, name, description) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  
  const items = [];
  module.exports = { Item, items };