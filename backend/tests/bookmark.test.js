const request = require("supertest");
const app = require("../app");

describe("Bookmark API", () => {
  it("GET /api/bookmarks", async () => {
    const res = await request(app).get("/api/bookmarks");
    expect(res.statusCode).toBe(200);
  });

  it("POST /api/bookmarks validation", async () => {
    const res = await request(app).post("/api/bookmarks").send({});
    expect(res.statusCode).toBe(400);
  });
});
