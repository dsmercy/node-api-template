const request = require("supertest");
const app = require("../index");

describe("Item API", () => {
    let createdItem;
  
    beforeAll(async () => {
      // Create an item before tests that need it
      const res = await request(app).post("/api/items").send({ name: "Test Item", description: "Test Desc" });
      createdItem = res.body; // Store the created item
    });
  
    it("should create an item", async () => {
      expect(createdItem).toHaveProperty("id");
    });
  
    it("should get all items", async () => {
      const res = await request(app).get("/api/items");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  
    it("should get a single item", async () => {
      const res = await request(app).get(`/api/items/${createdItem.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("id", createdItem.id);
    });
  
    it("should update an item", async () => {
      const res = await request(app)
        .put(`/api/items/${createdItem.id}`)
        .send({ name: "Updated Test Item" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("name", "Updated Test Item");
    });
  
    it("should delete an item", async () => {
      const res = await request(app).delete(`/api/items/${createdItem.id}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("message", "Item deleted successfully");
    });
  });
  